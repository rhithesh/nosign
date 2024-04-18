import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

import Image from "next/image";
export default async function Profile() {
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
