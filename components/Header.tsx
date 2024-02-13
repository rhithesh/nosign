"use client";
import { Button } from "./ui/button";
import Link from "next/link";
import { Switch } from "./ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Infinity from "@/app/infinity.svg";
import Image from "next/image";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Header() {
	return (
		<>
			<div className=" w-screen flex pb-3  justify-between   items-baseline ">
				<div>
					<Button
						variant={"link"}
						className=" bg-transparent hover:bg-transparent outline-none focus:outline-none border-none  mt-2"
						asChild>
						<Link href="/">
							<h1 className="  mx-5 text-4xl  ">Nosign</h1>
						</Link>
					</Button>
					<Switch
						onCheckedChange={() => {
							console.log("checked");
						}}
					/>
				</div>
				<div className="  flex justify-center    space-x-3 mx-3		">
					<div className="flex justify-center items-center font-mono text-green-400">
						writing..
					</div>
					<div className=" hidden bg-blue-50 rounded-full gap-3 px-6 justify-center  md:flex items-center">
						<Avatar className=" m-1 h-9 w-9  ring ring-pink-500 ring-offset-2 ">
							<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<Avatar className=" m-1 h-9 w-9 ">
							<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<Avatar className=" m-1 h-9 w-9 ">
							<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>

						<Avatar className=" m-1 h-9 w-9 ring ring-pink-500 ring-offset-2  ">
							<AvatarFallback>4+</AvatarFallback>
						</Avatar>
					</div>
					<div className="border rounded-md flex">
						<NavigationMenu>
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuTrigger>
										<Avatar className=" m-4">
											<AvatarImage
												src="https://github.com/rhithesh.png"
												alt="@shadcn"
											/>
											<AvatarFallback>CN</AvatarFallback>
										</Avatar>
									</NavigationMenuTrigger>
									<NavigationMenuContent className=" md:w-[140px] font-mono md:h-[200px] py-2 text-clip px-3">
										<h1 className=" hover:bg-gray-200 pl-2"> Profile</h1>
										<h1 className=" hover:bg-gray-200 pl-2"> Profile</h1>
										<h1 className=" hover:bg-gray-200 pl-2"> Profile</h1>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>

						<Image alt="knf" width={50} src={Infinity} className="  mr-3  " />
					</div>
				</div>
			</div>
		</>
	);
}
