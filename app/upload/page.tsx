"use client";

import { UploadButton } from "@/lib/uploadthing";
import "./hello.css"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">


<UploadButton
  endpoint="imageUploader"
  content={{
    button({ ready }) {
      if (ready) return <div className="">Upload stuff</div>;

      return "Getting ready...";
    },
    allowedContent({ ready, fileTypes, isUploading }) {
      if (!ready) return "Checking what you allow";
      if (isUploading) return "Seems like stuff is uploading";
      return `Stuff you can upload: ${fileTypes.join(", ")}`;
    },
  }}

  appearance={{
    button:
      "ut-ready:bg-black  ut-uploading:cursor-not-allowed rounded-r-none bg-red-500 bg-none after:bg-orange-400",
    container: "w-max flex-row rounded-md border-cyan-300 bg-slate-800",
    allowedContent:
      "flex h-8 flex-col items-center justify-center px-2 text-white",
  }}

/>





    </main>
  );
}
