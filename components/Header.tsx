"use client";
import { Button } from "./ui/button";
import Link from "next/link";
import { Switch } from "./ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Infinity from "@/app/infinity.svg";
import Image from "next/image";

export default function Header() {
	return (
		<>
			<div className=" w-screen flex pb-3  justify-between   items-baseline ">
				<div>
					<Button
						variant={"link"}
						className=" bg-transparent hover:bg-transparent outline-none focus:outline-none border-none  mt-2"
						asChild>
						<Link className="  font-bold    text-4xl" href="/">
							Nosign
						</Link>
					</Button>
					<Switch
						onCheckedChange={() => {
							console.log("checked");
						}}
					/>
				</div>
				<div className="  flex justify-center  border rounded-md  space-x-3 mx-3		">
					<Avatar className=" m-4">
						<AvatarImage src="https://github.com/rhithesh.png" alt="@shadcn" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<Avatar className=" m-4">
						<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<Image alt="knf" width={50} src={Infinity} className="  mr-3  " />
				</div>
			</div>
		</>
	);
}
