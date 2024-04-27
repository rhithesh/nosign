"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default async function Profile() {
	const router = useRouter();

	useEffect(() => {
		axios
			.get(
				"http://localhost:8080/api/protected-route",

				{
					// Request headers
					headers: {
						Authorization: localStorage.getItem("token"),
						// Add other headers as needed
					},
				},
			)

			.then((res) => {
				console.log(res);
			})
			.catch((error) => {
				router.push("/");
				if (error.response) {
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				} else if (error.request) {
					console.log(error.request);
				} else {
					console.log("Error", error.message);
				}
			});

		localStorage.getItem("token");
		console.log("Header");
	}, []);

	return (
		<div className=" h-screen w-screen flex justify-center items-center">
			<div className="  w-[450px] flex flex-col items-center border py-10">
				<div className="h-[250px] w-[250px] border rounded-xl ring-[7px] ring-black ring-inset"></div>
				<div className=" font-mono text-center py-2  mt-4 rounded-xl mx-2 bg-gradient-to-r from-indigo-200 via-purple-500 to-pink-200 text-3xl border w-[350px] ">
					<h1>rhithesh1947@gmail </h1>
				</div>
			</div>
		</div>
	);
}
