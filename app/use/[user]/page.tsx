"use client";
import { Card } from "@/components/ui/card";
import Infinity from "../../infinity.svg";
import Image from "next/image";
import HeaderDash from "@/components/HeaderDash";
import Choice from "@/components/Choice";
import Dashcard from "@/components/Dashcard";
import useNumberStore from "@/zustand/store";
export default function Dashboard() {
	const { number, setNumber, setOpen } = useNumberStore();

	return (
		<>
			<div>
				<HeaderDash />
				<div className=" mx-20 ">
					<div className=" flex justify-end my-5 border">
						<Choice>
							<svg
								onClick={() => {
									setOpen(false);
								}}
								className=" border  size-14 rounded-lg hover:scale-90   hover:bg-slate-50 hover:cursor-pointer   "
								width="15"
								height="15"
								viewBox="0 0 15 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
									fill="currentColor"
									fill-rule="evenodd"
									clipRule="evenodd"></path>
							</svg>
						</Choice>
					</div>
					<div className=" flex flex-wrap  gap-5 w-[1400px]">
						{Array.from({ length: number }).map((a, index) => (
							<Dashcard key={1} text="hithesh" titel="My name" />
						))}
					</div>
				</div>
			</div>
		</>
	);
}
