import type { Metadata } from "next";
import { Big_Shoulders_Stencil_Text } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Big_Shoulders_Stencil_Text({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});

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
		<div className={`  ${inter.className}`}>
			{children}
			<Footer />
		</div>
	);
}
