import { Suspense } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Sprinterly",
	description: "An Azure DevOps Sprint Analyser",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
