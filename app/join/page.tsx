import Infinity from "../infinity.svg";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export default function Signup() {
	return (
		<>
			<div className=" h-screen w-screen  flex justify-center items-center space-x-7 	">
				<div className=" text-center">
					<Image alt="knf" width={390} src={Infinity} className="  mr-3  " />
					<h2 className=" mr-5 py-4 border  text-5xl">NoSign</h2>
				</div>
				<div className=" basis-1/2 flex justify-center items-center  border	">
					<Card className=" w-[450px] h-[450px] flex flex-col justify-around items-center">
						<h2 className=" text-black text-2xl text-center w-[350px]">
							Join us to save your links and share them with the world!
						</h2>
						<div className=" flex gap-9">
							<Button>
								<LoginLink postLoginRedirectURL="/">Sign in</LoginLink>
							</Button>
							<Button>
								<RegisterLink postLoginRedirectURL="/">Sign up</RegisterLink>
							</Button>
						</div>
					</Card>
				</div>
			</div>
		</>
	);
}
