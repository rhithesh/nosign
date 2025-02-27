"use client";
import Image from "next/image";
import Textarea from "@/components/Textarea";
import Header from "@/components/Header";
import React, { useState, useEffect, useRef } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { Redis } from "@upstash/redis";
import FileUploadComponent from "@/components/fileComponent";
import Link from "next/link";
import io from "socket.io-client";
import prisma from "@/lib/prismaDb";
import { Share } from "lucide-react";

const socket = io("https://nosignbackend.onrender.com", {
  transports: ["websocket"],
});

export default function Home({ params }: { params: { slug: string } }) {
  const [value, setValue] = useState("");
  const isSocketConnected = useRef(false);
  const redis = new Redis({
    url: "https://apn1-equipped-grub-34450.upstash.io",
    token:
      "AYaSASQgMzE1MzM3MWItNDYzMi00ZjU2LWJiOTEtNjk3OTkyNDJmMTlhMTkxZmNmY2RhMDZlNGNmMDhmYjZkODZiMzhmZmZmYTU=",
  });
  const [files, setFiles] = useState([]);

  useEffect(() => {
    if (!isSocketConnected.current) {
      socket.connect();
      socket.on("connect", () => {
        console.log("connected");
        isSocketConnected.current = true;
      });

      redis
        .get(params.s)
        .then((data) => {
          setValue(data);
        })
        .catch((err) => {
          console.log(err);
        });

      socket.emit("join-room", params.s);

      socket.on("chat message", (data) => {
        console.log("Receiving from the other end", data);
        setValue(data);
      });
    }

    return () => {
      socket.disconnect();
      socket.off("connect");
      socket.off("join-room");
      socket.off("chat message");
    };
  }, []);

  useEffect(() => {
    async function getFiles() {
      const response = await fetch("/api/getfiles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ path: params.s }), // Send the path as part of the request body
      });
      if (response.ok) {
        
      
        const data = await response.json();
      setFiles(data.data);
    }}

    getFiles();
  }, []);

  return (
    <>
	<div className=" overflow-hidden">

      <Header />
      <div className="gap-3 mx-5 flex w-screen h-[89vh] overflow-hidden justify-evenly">
      <textarea
  className="border-2 basis-[60%] mb-8 pl-3 pt-3 rounded-xl border-black font-mono ring-0 focus:ring-0 outline-none focus:outline-none"
  value={value}
  onChange={async (e) => {
    setValue(e.target.value);
    const a = await redis.set(params.s, e.target.value);
    console.log(a);
    socket.emit("chat message", e.target.value, params.s);
  }}
/>

        <div className="basis-[30%] gap-4 flex flex-col   border-black">
          <div className="basis-[87%] flex flex-col rounded-xl border-2">
{   files?.length>0 ?  <p className="text-2xl pl-2 font-sans">your files</p>  :          <p className="text-2xl font-sans">No files to show here</p>}
            {files?.length > 0 ? (
              files.map((e,b) => {
                return (
                  <Link download={true}
				  target="_blank"
                    key={e.id}
                    href={e.fileUrl}
                    className="cursor-pointer w-[300px] text-black  my-3 ml-4 pl-4 bg-fuchsia-600 "
                  >
                {`File ${b + 1}`}
                  </Link>
                );
              })
            ) : (
              <p>No files found.</p>
            )}
          </div>
          <div className=" flex gap-11">
          <FileUploadComponent setFiles={setFiles} value={params.s} />
      <Share className=" cursor-pointer mt-2"/>



          </div>

        </div>

       
      </div>
	  
	  
</div>

    </>
  );
}
