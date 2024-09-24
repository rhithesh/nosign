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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useRef, useEffect } from "react";
import useNumberStore from "@/zustand/store";

interface Dialogue {
  children: React.ReactNode;
}

export default function Choice(props: Dialogue) {
  const { number, setNumber, open, setOpen } = useNumberStore();
  const [link, setLink] = useState({});
  const closeRef = useRef<HTMLButtonElement>(null);


  async function addlink(){
   
   



  }




  

   useEffect(()=>{
  console.log(link)

   },[link])



  return (
    <Dialog>
      <DialogTrigger>
        {props.children ? (
          props.children
        ) : (
          <Button variant="outline" className="">
            Share
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="w-[800px] h-[400px] max-w-full">
        <DialogHeader className="space-y-3 flex justify-center items-center">
          <DialogTitle className="font-mono text-3xl">
            Add a link
          </DialogTitle>
          <DialogDescription className="font-mono">
            Enter link code
          </DialogDescription>
		  <Tabs
								defaultValue="account "
								className="w-[400px]  flex flex-col justify-center flex-wrap">
								<TabsList className=" rounded-full  max-w-fit mx-auto">
									<TabsTrigger
										className=" font-mono rounded-full"
										value="personal">
										Personal
									</TabsTrigger>
									<TabsTrigger
										className=" font-mono rounded-full"
										value="public">
										Public
									</TabsTrigger>
								</TabsList>
								<TabsContent value="personal">
									<div className=" font-mono text-green-400 shadow-sm   text-center mx-auto  text-1xl ">
										{" "}
										Make a Personal link .
									</div>
									<div className="flex items-center space-x-2">
										<div className="grid flex-1 gap-2">
											<div className=" flex justify-center gap-3">
												<Label
													htmlFor="link"
													className=" text-2xl font-mono text-center ">
													Link
												</Label>
												<TooltipProvider>
													<Tooltip>
														<TooltipTrigger asChild className="   ">
															<svg
																className=" scale-125   mt-1"
																width="15"
																height="15"
																viewBox="0 0 15 15"
																fill="none"
																xmlns="http://www.w3.org/2000/svg">
																<path
																	d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z"
																	fill="currentColor"
																	fill-rule="evenodd"
																	clipRule="evenodd"></path>
															</svg>
														</TooltipTrigger>
														<TooltipContent>
															<p className=" font-mono text-sm">
																Only personal links are saved
															</p>
														</TooltipContent>
													</Tooltip>
												</TooltipProvider>
											</div>

											<Input
												className=" text-center ring-green-300 font-mono   mx-auto"
												id="link"
												onChange={(e) => {
													setLink({
														...link,
														link: e.target.value,
														public: false,
														private: true,
													});
												}}
												defaultValue=""
											/>
										</div>
									</div>{" "}
								</TabsContent>
								<TabsContent value="public">
									<div className=" font-mono text-yellow-400 shadow-sm  text-center  mx-auto  text-1xl ">
										{" "}
										Make a Public link .
									</div>
									<div className="flex items-center space-x-2">
										<div className="grid flex-1 gap-2">
											<div className=" flex justify-center gap-3">
												<Label
													htmlFor="link"
													className=" text-2xl font-mono text-center ">
													Link
												</Label>
												<TooltipProvider>
													<Tooltip>
														<TooltipTrigger asChild className="   ">
															<svg
																className=" scale-125   mt-1"
																width="15"
																height="15"
																viewBox="0 0 15 15"
																fill="none"
																xmlns="http://www.w3.org/2000/svg">
																<path
																	d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z"
																	fill="currentColor"
																	fill-rule="evenodd"
																	clipRule="evenodd"></path>
															</svg>
														</TooltipTrigger>
														<TooltipContent>
															<p className=" font-mono text-sm">
																Only personal links are saved
															</p>
														</TooltipContent>
													</Tooltip>
												</TooltipProvider>
											</div>
											<Input
												className=" text-center ring-green-300 font-mono  mx-auto"
												id="link"
												onChange={(e) => {
													setLink({
														...link,
														link: e.target.value,
														public: true,
														private: false,
													});
													console.log("hello");
												}}
												defaultValue=""
											/>
										</div>
									</div>
								</TabsContent>
							</Tabs>
        </DialogHeader>

        <DialogFooter className="sm:justify-start mx-auto font-mono text-2xl flex">
          <Button
            className="hover:bg-slate-500 hover:shadow-sm"
            onClick={() => {
              setOpen(!open);
              setNumber(number + 1);
              closeRef.current?.click();
              //async database call
			
			}}
          >
            create!

          </Button>
        </DialogFooter>
      </DialogContent>
      <DialogClose ref={closeRef} onClick={() => setOpen(false)} />
    </Dialog>
  );
}