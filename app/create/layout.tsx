import type { Metadata } from "next";
import { Big_Shoulders_Stencil_Text } from "next/font/google";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
	title: "No Sign",
	description: "Here we are.",
};

export default function Join({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className={`  `}>
			{children}
			<Toaster />
			<Footer />
		</div>
	);
}
