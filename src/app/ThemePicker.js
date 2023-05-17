"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { setTheme, setUpTheme } from "../utils/ThemeHelpers";

export default function ThemePicker() {
	let themeType = null;
	if (typeof window !== "undefined") {
		themeType = localStorage.getItem("SprinterlyTheme");
	}
	const [selectedTheme, setSelectedTheme] = useState(themeType || "light");
	useEffect(() => {
		setUpTheme();
	}, []);
	return (
		<div>
			{selectedTheme === "dark" ? (
				<MoonIcon
					className='cursor-pointer'
					onClick={() => {
						setTheme("light");
						setSelectedTheme("light");
					}}
				/>
			) : (
				<SunIcon
					className='cursor-pointer'
					onClick={() => {
						setTheme("dark");
						setSelectedTheme("dark");
					}}
				/>
			)}
		</div>
	);
}
