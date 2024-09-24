"use client"
import { signIn } from "next-auth/react";



export default function Page(){

    return(

        <>
        <button onClick={()=>{
            signIn("google", { callbackUrl: "/discover" })
        }}>Sign in</button>

        </>
    )

}