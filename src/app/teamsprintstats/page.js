import { Suspense } from "react";
import SprintCard from "../SprintCard";
import { fetchAllSprints, fetchTeamNames } from "../devOpsAPI";
import UserSelection from "../userSelection";

export default async function TeamSprint({ searchParams }) {
	const teams = await fetchTeamNames("Streets-Heaver", "Products", process.env.PAT_TOKEN);
	const sprints = await fetchAllSprints();
	return (
		<main className='flex h-[calc(100%-64px)] flex-col items-center gap-5'>
			<UserSelection searchParams={searchParams} teams={teams.sort((a, b) => a.localeCompare(b))} sprints={sprints} />
			<Suspense fallback={<p>Loading...</p>}>
				<SprintCard searchParams={searchParams} />
			</Suspense>
		</main>
	);
}
