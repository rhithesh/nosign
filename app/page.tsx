"use client";
import Image from "next/image";
import Textarea from "@/components/Textarea";
import Header from "@/components/Header";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
export default function Home() {
	const [value, setValue] = useState("");

	return (
		<>
			<p>hrththtyh</p>
		</>
	);
}
