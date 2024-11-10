import React, { useState } from 'react';
import { PlusCircleIcon } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { UploadButton } from "@/lib/uploadthing";
import {uploadDb} from "@/action/actiont"
import { revalidatePath } from 'next/cache'
const FileUploadComponent = (props) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }


  };

  const handleUpload = () => {
    if (file) {
      // Upload logic goes here
      console.log('Uploading file:', file);
    }
  };

  return (
    <div className='flex'>
     <UploadButton
  endpoint="imageUploader"
  content={{
    button({ ready }) {
      if (ready) return <div className=" justify-between  gap-2 flex">
        <PlusCircleIcon/>
       <p>Upload stuff</p> </div>;

      return "Getting ready...";
    },
    allowedContent({ ready, fileTypes, isUploading }) {
      if (!ready) return "Checking what you allow";
      if (isUploading) return "Seems like stuff is uploading";
      return `Stuff you can upload: ${fileTypes.join(", ")}`;
    },
  }}
  onClientUploadComplete={(res) => {
    // Do something with the response
    console.log("Files: ", res[0].url);
    uploadDb(props.value,res[0].url)

    async function getFiles() {
      const response = await fetch("/api/getfiles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ path: props.value }), // Send the path as part of the request body
      });
      const data = await response.json();
      console.log(data)
      props.setFiles(data.data);
    }

    getFiles()


  }}


  appearance={{
    button:
      "ut-ready:bg-black ut-readying:bg-black font-sans  ut-uploading:bg-black !bg-black  after:bg-black",
    container: "w-max flex-row flex   rounded-md border-cyan-300 bg-white",
    allowedContent:
      "flex h-8 flex-col items-center    justify-center px-2 text-white",
  }}

/>


    </div>
  );
};

export default FileUploadComponent;