"use client";
import { Card } from "./ui/card";
import { useEffect, useState } from "react";
import useNumberStore from "@/zustand/store";

export default function Dashcard({
	text,
	titel,
}: {
	text: string;
	titel: string;
}) {
	const { number, setNumber } = useNumberStore();

	useEffect(()=>{
    


	},[number])

	return (
		<>
			<Card
				key={""}
				className={`w-[400px]  relative flex flex-col  rounded-xl h-[100px] space-y-3 group  hover:bg-slate-50`}>
				<h1 className="    font-mono   text-center text-sm pt-3">
					<span className="   hover:scale-105 border p-2 rounded-xl">
						{titel}
					</span>
				</h1>
				<svg
					onClick={() => {
						setNumber(number - 1);
					}}
					className="absolute  border rounded-xl  right-0 top-14 opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out  hover:scale-105"
					width="25"
					height="25"
					viewBox="0 0 15 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z"
						fill="currentColor"
						fill-rule="evenodd"
						clipRule="evenodd"></path>
				</svg>
				<p className=" p-4 mx-4   text-center font-mono text-sm">{text}</p>
			</Card>
		</>
	);
}
