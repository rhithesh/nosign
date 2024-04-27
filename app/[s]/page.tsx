"use client";
import Image from "next/image";
import Textarea from "@/components/Textarea";
import Header from "@/components/Header";
import React, { use, useState } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import io from "socket.io-client";
import { Redis } from "@upstash/redis";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
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
				console.log("reciving from the other end", data);
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

	return (
		<>
			<Header />
			<textarea
				className=" border-2 border-black w-screen h-screen font-mono"
				value={value}
				onChange={async (e) => {
					setValue(e.target.value);
					const a = await redis.set(params.s, e.target.value);
					console.log(a);
					socket.emit("chat message", e.target.value, params.s);
				}}
			/>

			<h1>{params.slug}</h1>
		</>
	);
}
