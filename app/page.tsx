"use client"
import Link from "next/link";
import Infinity from "./infinity.svg";
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
import { useRouter } from "next/router";
import React from "react";
export default function Component() {
	const [link, setLink] = React.useState("");
	
	return (
		<div className="flex flex-col min-h-[100dvh]">
			<header className="px-4 lg:px-6 h-14 flex items-center justify-start">
				<Link className="" href="#">
					<Image alt="knf" width={50} src={Infinity} className="  mr-3  " />
					<span className="sr-only">Acme Inc</span>
				</Link>
				{/* <nav className="ml-auto flex gap-4 sm:gap-6">
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						href="#">
						Features
					</Link>
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						href="#">
						Pricing
					</Link>
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						href="#">
						About
					</Link>
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						href="#">
						Contact
					</Link>
				</nav> */}
			</header>
			<main className="flex-1 justify-center items-center">
				<section className="w-full h-screen py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48  ">
					<div className=" mx-auto container px-4 md:px-6 flex flex-col items-center hover:shadow-sm    justify-center space-y-4 text-center   py-5 rounded-xl w-[700px]">
						<div className="space-y-2">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
								NoSign for Everyone
							</h1>
							<p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
								Maybe it is easier to be quick and now
							</p>
						</div>
						<div className="flex flex-col gap-2 min-[400px]:flex-row">
							<Link
								className="inline-flex h-10 hover:scale-105 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
								href="/anything">
								Get Started
							</Link>
						</div>
						<div className="flex mx-auto">
						
						<input onChange={(e)=>{
							setLink(e.target.value)
						}} className=" border-2 border-l-black border-t-black  border-b-black rounded-3xl"/>
					<p className=" hover:cursor-pointer rounded-xl border-2 ml-2">
						<Link href={ `/${link}`}>Lets Go!
						</Link>
						</p>
					</div>
					</div>
					
				</section>
			</main>
			<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
				<p className="text-xs text-gray-500 dark:text-gray-400">
					© 2024 No Sign Inc. All rights reserved.
				</p>
				<nav className="sm:ml-auto flex gap-4 sm:gap-6">
					<Link className="text-xs hover:underline underline-offset-4" href="#">
						Terms of Service
					</Link>
					<Link className="text-xs hover:underline underline-offset-4" href="#">
						Privacy
					</Link>
				</nav>
			</footer>
		</div>
	);
}
