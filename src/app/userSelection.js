"use client";

import React from "react";
import { Combobox } from "../components/Combobox";
import { usePathname, useRouter } from "next/navigation";

export default function UserSelection({ teams, sprints, searchParams }) {
	const { replace } = useRouter();
	const pathname = usePathname();

	const handleSprint = (sprint) => {
		const params = new URLSearchParams(window.location.search);
		if (sprint) {
			params.set("sprint", sprint);
		} else {
			params.delete("sprint");
		}

		replace(`${pathname}?${params.toString()}`);
	};

	const handleTeam = (team) => {
		const params = new URLSearchParams(window.location.search);
		if (team) {
			params.set("team", team);
		} else {
			params.delete("team");
		}

		replace(`${pathname}?${params.toString()}`);
	};

	return (
		<div className='flex items-center gap-4'>
			<Combobox defaultValue={searchParams?.team} items={teams} placeholder={"Pick a team"} onChange={(e) => handleTeam(e)} />
			<Combobox defaultValue={searchParams?.sprint} items={sprints} placeholder={"Sprints"} onChange={(e) => handleSprint(e)} />
		</div>
	);
}
