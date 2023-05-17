import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/Card";
import { X } from "lucide-react";
import React from "react";

export default function TeamSprintCard({ sprintStats, setDashboardInfo }) {
	const stats = sprintStats.stats;
	const removeItem = (devInfo) => {
		console.log(devInfo);
		const dashboardInfo = JSON.parse(window.localStorage.getItem("dashboardComponents"));
		const filteredDashboardInfo = dashboardInfo.filter((d) => devInfo.dashboardId !== d.dashboardId);
		setDashboardInfo(filteredDashboardInfo);
		window.localStorage.setItem("dashboardComponents", JSON.stringify(filteredDashboardInfo));
	};
	return (
		<Card>
			<CardHeader className='text-center'>
				<CardTitle>
					<div className='flex justify-between'>
						{stats?.title} - 8.54
						<X className='cursor-pointer' onClick={() => removeItem(sprintStats)} />
					</div>
				</CardTitle>
				<CardDescription>An overview of stats</CardDescription>
			</CardHeader>
			<CardContent className='flex gap-5 justify-center'>
				<div>
					<p>User Stories Completed - {stats?.userStories}</p>
					<p>Bugs Completed - {stats?.bugs}</p>
					<p>Issues Completed - {stats?.issues}</p>
				</div>
				<div>
					<p>Velocity - {stats?.velocity}</p>
					<p>Top Performer - {stats?.topPerformer}</p>
					<p>Bug Basher - {stats?.bugBasher}</p>
					<p>Work Items Completed - {stats?.workItemsCompleted}</p>
				</div>
			</CardContent>
		</Card>
	);
}
