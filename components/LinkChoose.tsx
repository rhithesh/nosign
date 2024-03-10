"use client";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

interface Dialouge {
	children: React.ReactNode;
}

export default function Dialouge(props: Dialouge) {
	const [open, setOpen] = useState(false);

	//removing asChild has fixxed the error
	return false ? (
		""
	) : (
		<Dialog>
			<DialogTrigger>
				{props.children ? (
					props.children
				) : (
					<>
						<Button variant="outline" className="">
							Share
						</Button>
					</>
				)}
			</DialogTrigger>
			<DialogContent className="  w-[800px] h-[400px] max-w-full ">
				{open ? (
					<DialogHeader className=" w-full   gap-4  flex  justify-center items-center  ">
						<DialogTitle className=" text-4xl font-mono">BACK TO!</DialogTitle>
						<div className=" flex flex-col ">
							<div className=" flex gap-3  justify-center items-center">
								<Button className=" hover:bg-slate-500  hover:shadow-sm  ">
									GoToLink
								</Button>
								<Button className=" hover:bg-slate-500  hover:shadow-sm  ">
									dashboard
								</Button>
							</div>
						</div>
					</DialogHeader>
				) : (
					<>
						<DialogHeader className=" space-y-3 flex justify-center items-center ">
							<DialogTitle className=" font-mono text-3xl">
								Add a link
							</DialogTitle>
							<DialogDescription className=" font-mono  ">
								Enter link code
							</DialogDescription>
							<Tabs
								defaultValue="account "
								className="w-[400px]  flex flex-col justify-center flex-wrap">
								<TabsList className=" rounded-full  max-w-fit mx-auto">
									<TabsTrigger
										className=" font-mono rounded-full"
										value="account">
										Personal
									</TabsTrigger>
									<TabsTrigger
										className=" font-mono rounded-full"
										value="password">
										Public
									</TabsTrigger>
								</TabsList>
								<TabsContent
									className=" font-mono  text-green-400 shadow-sm text-1xl  mx-auto"
									value="account">
									Make a personal link.
								</TabsContent>
								<TabsContent
									value="password"
									className=" font-mono text-yellow-400 shadow-sm   mx-auto  text-1xl ">
									Make a Public link .
								</TabsContent>
							</Tabs>
						</DialogHeader>
						<div className="flex items-center space-x-2">
							<div className="grid flex-1 gap-2">
								<Label htmlFor="link" className="sr-only">
									Link
								</Label>
								<Input
									className=" text-center ring-green-300 font-mono w-[70%] mx-auto"
									id="link"
									defaultValue=""
								/>
							</div>
						</div>
						<DialogFooter className="sm:justify-start  mx-auto font-mono text-2xl">
							<Button
								className="  hover:bg-slate-500  hover:shadow-sm  "
								onClick={() => setOpen(!open)}>
								create!
							</Button>
						</DialogFooter>
					</>
				)}
			</DialogContent>
		</Dialog>
	);
}
