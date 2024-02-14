"use client";
import Image from "next/image";
import Textarea from "@/components/Textarea";
import Header from "@/components/Header";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function Home() {
	const [value, setValue] = useState("");

	return (
		<>
			<Header />

			<ReactQuill
				theme="snow"
				className=" h-screen"
				value={value}
				onChange={(e) => {
					console.log(e);
					setValue(e);
				}}
			/>
		</>
	);
}
