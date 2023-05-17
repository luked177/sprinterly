"use client";

import React from "react";
import ThemePicker from "../ThemePicker";
import Link from "next/link";
import GraphAnimation from "@/assets/GraphAnimation";
import { usePathname } from "next/navigation";

const linksArray = [
	{
		text: "Dashboard",
		href: "/",
	},
	{
		text: "Team Sprint Stats",
		href: "/teamsprintstats",
	},
	{
		text: "Dev Sprint Stats",
		href: "/devsprintstats",
	},
];

export default function Header() {
	const pathname = usePathname();
	return (
		<header className='flex justify-between p-4 items-center'>
			<div className='flex'>
				<GraphAnimation />
				<h1>Sprinterly</h1>
			</div>
			<div className='flex gap-6'>
				{linksArray.map((link, i) => {
					const isActive = pathname === link.href;
					return (
						<Link className={isActive ? "bg-app rounded p-1 text-white" : "p-1"} key={i} href={link.href}>
							{link.text}
						</Link>
					);
				})}
			</div>
			<ThemePicker />
		</header>
	);
}
