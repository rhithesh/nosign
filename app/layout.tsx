"use client"
import type { Metadata } from "next";
import { Big_Shoulders_Stencil_Text } from "next/font/google";
import "./globals.css";
import "@uploadthing/react/styles.css";


import { SessionProvider } from 'next-auth/react';

const inter = Big_Shoulders_Stencil_Text({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`  ${inter.className}`}>
			<SessionProvider>
				{children}
			</SessionProvider>

				</body>
		</html>
	);
}
