import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/HomePage/Footer";
import Phone from "@/components/Phone/Phone";
import ClientWrapper from "@/components/ClientWrapper";

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		template: "%s - Realistic Labs",
		absolute: "Realistic Labs",
	},
	description:
		"Realistic Labs, building speech AI technology for 2,000+ African languages",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="!scroll-smooth">
			<body className={`${poppins.className} antialiased svg-bg bg-fixed`}>
				<ClientWrapper>{children}</ClientWrapper>

				<Phone />
				<Footer />
			</body>
		</html>
	);
}
