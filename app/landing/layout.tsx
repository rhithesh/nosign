import type { Metadata } from "next";
import { Big_Shoulders_Stencil_Text } from "next/font/google";
const inter = Big_Shoulders_Stencil_Text({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "No Sign",
	description: "Here we are.",
};

export default function Landing({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div className={`  ${inter.className}`}>{children}</div>;
}
