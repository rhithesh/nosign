"use client";
import Image from "next/image";
import Textarea from "@/components/Textarea";
import Header from "@/components/Header";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import io from "socket.io-client";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const socket = io("https://nosignbackend.onrender.com", {
	transports: ["websocket"],
});

export default function Home({ params }: { params: { slug: string } }) {
	const [value, setValue] = useState("");
	const isSocketConnected = useRef(false);

	useEffect(() => {
		if (!isSocketConnected.current) {
			socket.connect();
			socket.on("connect", () => {
				console.log("connected");
				isSocketConnected.current = true;
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
				onChange={(e) => {
					setValue(e.target.value);
					socket.emit("chat message", e.target.value, params.s);
				}}
			/>

			<h1>{params.slug}</h1>
		</>
	);
}
