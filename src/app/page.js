"use client";

import { Button } from "@/components/Button";
import { Combobox } from "@/components/Combobox";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/Dialog";
import { DevVelocityGraph } from "./devsprintstats/DevVelocityGraph";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs";
import TeamSprintCard from "./TeamSprintCard";

export default async function Home() {
	const [devName, setDevName] = useState("");
	const [teamName, setTeamName] = useState("");
	const dashboardStorage = JSON.parse(window.localStorage.getItem("dashboardComponents"));
	const [dashboardInfo, setDashboardInfo] = useState(dashboardStorage);

	const addDevDashboard = (devName) => {
		const prevDashboards = window.localStorage.getItem("dashboardComponents");

		if (prevDashboards !== null) {
			const prevDashboardsParsed = JSON.parse(prevDashboards);
			const newData = [
				{
					dev: devName,
					graphType: "line",
					dashboardId: crypto.randomUUID(),
				},
				...prevDashboardsParsed,
			];
			window.localStorage.setItem("dashboardComponents", JSON.stringify(newData));
			setDashboardInfo(newData);
			setDevName("");
			return;
		}

		const newData = [
			{
				dev: devName,
				graphType: "line",
				dashboardId: crypto.randomUUID(),
			},
		];
		window.localStorage.setItem("dashboardComponents", JSON.stringify(newData));
		setDashboardInfo(newData);
		setTeamName("");
	};

	const addTeamDashboard = (teamName) => {
		const prevDashboards = window.localStorage.getItem("dashboardComponents");

		const stats = {
			title: `Sprint Stats for ${teamName}`,
			sprintName: "8.54",
			workItemsCompleted: Math.floor(Math.random() * 20) + 1,
			velocity: Math.floor(Math.random() * 20) + 1,
			userStories: Math.floor(Math.random() * 20) + 1,
			bugs: Math.floor(Math.random() * 20) + 1,
			issues: Math.floor(Math.random() * 20) + 1,
			topPerformer: "Luke Dore: 3",
			bugBasher: "Tommy Carter: 3",
		};

		if (prevDashboards !== null) {
			const prevDashboardsParsed = JSON.parse(prevDashboards);
			const newData = [
				{
					team: teamName,
					graphType: "teamStats",
					dashboardId: crypto.randomUUID(),
					stats: stats,
				},
				...prevDashboardsParsed,
			];
			window.localStorage.setItem("dashboardComponents", JSON.stringify(newData));
			setDashboardInfo(newData);
			setDevName("");
			return;
		}

		const newData = [
			{
				team: teamName,
				graphType: "teamStats",
				dashboardId: crypto.randomUUID(),
				stats: stats,
			},
		];
		window.localStorage.setItem("dashboardComponents", JSON.stringify(newData));
		setDashboardInfo(newData);
		setTeamName("");
	};

	return (
		<main className='h-[calc(100%-64px)] p-8'>
			<div className='w-full flex justify-end mb-4'>
				<Dialog>
					<DialogTrigger asChild>
						<Button variant='outline'>Add</Button>
					</DialogTrigger>
					<DialogContent className='sm:max-w-[425px]'>
						<DialogHeader>
							<DialogTitle>Add to Dashboard</DialogTitle>
							<DialogDescription>Add graphs to your homepage dashboard</DialogDescription>
						</DialogHeader>
						<Tabs defaultValue='team' className='w-[400px]'>
							<TabsList>
								<TabsTrigger value='team'>Team</TabsTrigger>
								<TabsTrigger value='dev'>Dev</TabsTrigger>
							</TabsList>
							<TabsContent value='team'>
								<Combobox onChange={(e) => setTeamName(e)} items={["Kenobi Front End", "Baggins Front End", "Baggins Back End"]} placeholder={"Select Team"} />
								<DialogClose>
									<Button onClick={() => addTeamDashboard(teamName)} type='submit'>
										Add Graph
									</Button>
								</DialogClose>
							</TabsContent>
							<TabsContent value='dev'>
								<Combobox onChange={(e) => setDevName(e)} items={["Luke Dore", "Jordan Murray", "Jamie Owsianka"]} placeholder={"Select Dev"} />
								<DialogClose>
									<Button onClick={() => addDevDashboard(devName)} type='submit'>
										Add Graph
									</Button>
								</DialogClose>
							</TabsContent>
						</Tabs>
					</DialogContent>
				</Dialog>
			</div>
			<div className='flex gap-3 flex-wrap'>
				{dashboardInfo?.map((d, i) => {
					switch (d.graphType) {
						case "line":
							return <DevVelocityGraph setDashboardInfo={setDashboardInfo} key={i} devInfo={d} />;

						case "teamStats":
							return <TeamSprintCard setDashboardInfo={setDashboardInfo} sprintStats={d} />;

						default:
							break;
					}
				})}
			</div>
		</main>
	);
}
