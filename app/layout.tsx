"use client"
import type { Metadata } from "next";
import { Noto_Sans_Tifinagh } from "next/font/google";
import "./globals.css";
import "@uploadthing/react/styles.css";


import { SessionProvider } from 'next-auth/react';

const inter = Noto_Sans_Tifinagh({
	weight: ["400" ],
	subsets: ["latin"],
});


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
			<script defer data-domain="nosign.vercel.app" src="https://plausible.io/js/script.js"></script>
			</head>
			<body className={`  ${inter.className}`}>
			<SessionProvider>
				{children}
			</SessionProvider>

				</body>
		</html>
	);
}
