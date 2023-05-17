"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/Card";
import { analyzeSelectedSprint } from "./devOpsAPI";

export default async function SprintCard({ searchParams }) {
	const teamStats = searchParams.sprint && searchParams.team && (await analyzeSelectedSprint(searchParams?.sprint, [searchParams?.team]));
	const sprintStats = teamStats?.stats;
	return (
		<div className='flex flex-col gap-2 flex-wrap px-6'>
			{teamStats && (
				<Card>
					<CardHeader className='text-center'>
						<CardTitle>
							{sprintStats?.title} - {searchParams?.sprint}
						</CardTitle>
						<CardDescription>An overview of stats</CardDescription>
					</CardHeader>
					<CardContent className='flex gap-5 justify-center'>
						<div>
							<p>User Stories Completed - {sprintStats?.userStories}</p>
							<p>Bugs Completed - {sprintStats?.bugs}</p>
							<p>Issues Completed - {sprintStats?.issues}</p>
						</div>
						<div>
							<p>Velocity - {sprintStats?.velocity}</p>
							<p>Top Performer - {sprintStats?.topPerformer}</p>
							<p>Bug Basher - {sprintStats?.bugBasher}</p>
							<p>Work Items Completed - {sprintStats?.workItemsCompleted}</p>
						</div>
					</CardContent>
				</Card>
			)}
			<div className='flex gap-2'>
				{teamStats &&
					sprintStats?.userStats.map((user) => {
						if (user.displayName !== "Unassigned") {
							return (
								<>
									<Card>
										<CardHeader>
											<CardTitle>{user.displayName}</CardTitle>
										</CardHeader>
										<CardContent>
											<p>User Stories Completed - {user?.userStories}</p>
											<p>Bugs Completed - {user?.bugs}</p>
											<p>Issues Completed - {user?.issues}</p>
											<p>Story Points - {user?.storyPoints}</p>
										</CardContent>
									</Card>
								</>
							);
						}
					})}
			</div>
		</div>
	);
}
