"use client";
import Infinity from "../infinity.svg";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
type signup = {
	password: string;
	passwords: string;
	username: string;
};

export default function Login() {
	const [value, setValue] = useState<signup>({} as signup);

	function Signup() {
		if (value.password !== value.passwords) {
			toast.error("Password does not match");
		} else {
			axios
				.post("http://localhost:8080/auth/signup", {
					email: value.username,
					password: value.password,
				})
				.then((res) => {
					console.log(res.data);
					console.log("hello");
				})
				.catch((err) => {
					toast.error("Username already exists");
				});
		}
	}

	return (
		<>
			<div className=" h-screen w-screen  flex justify-center items-center space-x-7 	">
				<Card className=" w-[450px] h-[450px] font-serif space-y-3 flex items-center ">
					<form className=" flex justify-center items-center  w-full px-3">
						<div className="grid w-full items-center gap-4">
							<div className="flex flex-col space-y-1.5">
								<h1 className="text-2xl font-bold">Sign Up</h1>
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="name">Username</Label>
								<Input
									onChange={(e) => {
										setValue({ ...value, username: e.target.value });
									}}
									id="name"
									placeholder="Username"
								/>
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="name">Password</Label>
								<Input
									id="name"
									type="password"
									placeholder=" Password "
									onChange={(e) => {
										setValue({ ...value, password: e.target.value });
									}}
								/>
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="name">Re-enter Password</Label>
								<Input
									id="name"
									type="password"
									placeholder=" Password "
									onChange={(e) => {
										setValue({ ...value, passwords: e.target.value });
									}}
								/>
							</div>
							<Button
								type="submit"
								onClick={(e) => {
									e.preventDefault();
									Signup();
								}}>
								Sign up
							</Button>
						</div>
					</form>
				</Card>
			</div>
		</>
	);
}
