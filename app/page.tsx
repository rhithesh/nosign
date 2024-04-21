"use client";
import Image from "next/image";
import Textarea from "@/components/Textarea";
import Header from "@/components/Header";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import io from "socket.io-client";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const socket = io("http://localhost:8080", {
	transports: ["websocket"],
});

export default function Home() {
	const [value, setValue] = useState("");

	useEffect(() => {
		// Set up event listeners when component mounts
		socket.connect();
		socket.on("connect", () => {
			console.log("connected");
		});

		socket.emit("join", "hithesh");

		socket.on("message", (data) => {
			console.log(data);
		});

		// Clean up event listeners when component unmounts
		return () => {
			socket.off("message");
		};
	}, []);

	const sendMessage = () => {
		socket.emit("message", value);
		setValue(""); // Clear the input after sending the message
	};

	return (
		<>
			<Header />

			<ReactQuill
				theme="snow"
				className=" h-screen"
				value={value}
				onChange={(e) => {
					console.log(e);
					sendMessage();
					setValue(e);
				}}
			/>
		</>
	);
}
