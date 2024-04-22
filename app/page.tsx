"use client";
import Image from "next/image";
import Textarea from "@/components/Textarea";
import Header from "@/components/Header";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import axios from "axios";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
export default function Home() {
	const [value, setValue] = useState("");
	useEffect(() => {
		axios.post("http://localhost:8080", {
			email: "ceewce",
			password: "cewcew",
		});
	}, []);

	return (
		<>
			<div className=" pl-5 pt-3">
				<p className=" font-serif  font-extraligh ">
					Hello everyone this is Hithesh R the creater of Nosign, It is quite
					obviously DontPad clone! I still recommend you not to make an account.
					Use it as you go!!
				</p>
				<p className=" font-serif underline-offset-1 underline ">
					Website Guide
				</p>
				<p className=" font-serif">
					"/anyting" - anything specifice the place where you can put your
					content you can keep the link and share it to your friends!!
				</p>
				<p className=" font-serif">"/login" - Login to your own account.</p>
				<p className=" font-serif">"/create" - create your account!</p>
				<p className=" font-serif">"/profile" - your profile!</p>
			</div>
		</>
	);
}
