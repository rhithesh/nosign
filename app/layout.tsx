import type { Metadata } from "next";
import { Big_Shoulders_Stencil_Text } from "next/font/google";
import "./globals.css";
const inter = Big_Shoulders_Stencil_Text({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "No Sign",
	description:
		"Copy free, privacy first, and open source. No Sign is a simple and secure alternative to DontPad.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`  ${inter.className}`}>{children}</body>
		</html>
	);
}
