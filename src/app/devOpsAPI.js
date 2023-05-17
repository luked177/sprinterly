import axios from "axios";

var organization = "Streets-Heaver";
var project = "Products";
var authHeader;
const apiVersion = "7.0";

async function fetchSprints() {
	const url = `https://dev.azure.com/${organization}/${project}/_apis/work/teamsettings/iterations?api-version=${apiVersion}`;
	try {
		const response = await axios.get(url, authHeader);
		return response.data;
	} catch (error) {
		console.error("Error fetching sprints:", error.message);
	}
}

async function fetchSprintByName(sprintName) {
	const allSprints = await fetchSprints();
	const targetSprint = allSprints.value.find((sprint) => sprint.name === sprintName);

	if (targetSprint) {
		return targetSprint;
	} else {
		console.error(`Sprint with name '${sprintName}' not found.`);
		return null;
	}
}

async function fetchCurrentSprint() {
	const sprints = [
		{
			count: 58,
			value: [
				{
					id: "b28eafe4-0dc2-459d-a442-1af185cb85a1",
					name: "8.16",
					path: "Products\\8.16",
					attributes: { startDate: "2019-03-18T00:00:00Z", finishDate: "2019-04-28T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/b28eafe4-0dc2-459d-a442-1af185cb85a1",
				},
				{
					id: "48f1dcee-d9df-4579-a270-b6e360104d21",
					name: "8.17",
					path: "Products\\8.17",
					attributes: { startDate: "2019-04-29T00:00:00Z", finishDate: "2019-06-09T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/48f1dcee-d9df-4579-a270-b6e360104d21",
				},
				{
					id: "17810e05-4fb6-4e34-88ec-9d38d1550f62",
					name: "8.18",
					path: "Products\\8.18",
					attributes: { startDate: "2019-06-10T00:00:00Z", finishDate: "2019-07-21T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/17810e05-4fb6-4e34-88ec-9d38d1550f62",
				},
				{
					id: "e8640ffc-a1dc-49b0-99c4-86b0bddddf63",
					name: "8.19",
					path: "Products\\8.19",
					attributes: { startDate: "2019-07-22T00:00:00Z", finishDate: "2019-08-30T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/e8640ffc-a1dc-49b0-99c4-86b0bddddf63",
				},
				{
					id: "f61b5dcd-3e17-4c8b-a5cf-2b616ba21011",
					name: "8.20",
					path: "Products\\8.20",
					attributes: { startDate: "2019-09-02T00:00:00Z", finishDate: "2019-10-11T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/f61b5dcd-3e17-4c8b-a5cf-2b616ba21011",
				},
				{
					id: "ceaf6c70-4fb7-4710-9dae-fa592879e537",
					name: "8.21",
					path: "Products\\8.21",
					attributes: { startDate: "2019-10-14T00:00:00Z", finishDate: "2019-11-22T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/ceaf6c70-4fb7-4710-9dae-fa592879e537",
				},
				{
					id: "59dd286e-b613-47d9-8070-28caeb71c241",
					name: "8.22",
					path: "Products\\8.22",
					attributes: { startDate: "2019-11-25T00:00:00Z", finishDate: "2020-01-03T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/59dd286e-b613-47d9-8070-28caeb71c241",
				},
				{
					id: "e477a38d-8d84-42a2-bfda-653bc4ae694d",
					name: "8.23",
					path: "Products\\8.23",
					attributes: { startDate: "2020-01-06T00:00:00Z", finishDate: "2020-02-14T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/e477a38d-8d84-42a2-bfda-653bc4ae694d",
				},
				{
					id: "ed37a1a0-5a20-4dbd-9d3c-b03d2ef4dc7a",
					name: "8.24",
					path: "Products\\8.24",
					attributes: { startDate: "2020-02-17T00:00:00Z", finishDate: "2020-03-27T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/ed37a1a0-5a20-4dbd-9d3c-b03d2ef4dc7a",
				},
				{
					id: "934e2b06-cb8a-4656-a0a3-ec0dac3f8ad1",
					name: "8.25",
					path: "Products\\8.25",
					attributes: { startDate: "2020-03-30T00:00:00Z", finishDate: "2020-05-08T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/934e2b06-cb8a-4656-a0a3-ec0dac3f8ad1",
				},
				{
					id: "daae0688-fda2-49c7-bfa0-168b1d0b3df4",
					name: "8.26",
					path: "Products\\8.26",
					attributes: { startDate: "2020-05-11T00:00:00Z", finishDate: "2020-06-19T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/daae0688-fda2-49c7-bfa0-168b1d0b3df4",
				},
				{
					id: "d0000353-1ae3-4e91-9c2e-bd8810f65e12",
					name: "8.27",
					path: "Products\\8.27",
					attributes: { startDate: "2020-06-22T00:00:00Z", finishDate: "2020-07-31T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/d0000353-1ae3-4e91-9c2e-bd8810f65e12",
				},
				{
					id: "564d6295-8ce3-46c2-b8f0-991e9f3a1104",
					name: "8.28",
					path: "Products\\8.28",
					attributes: { startDate: "2020-08-03T00:00:00Z", finishDate: "2020-09-11T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/564d6295-8ce3-46c2-b8f0-991e9f3a1104",
				},
				{
					id: "e3167378-928a-4b3b-8da2-4f393bddfa5d",
					name: "8.29",
					path: "Products\\8.29",
					attributes: { startDate: "2020-09-14T00:00:00Z", finishDate: "2020-10-23T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/e3167378-928a-4b3b-8da2-4f393bddfa5d",
				},
				{
					id: "1a6f270b-9b70-4235-8e9f-5eacb79656ae",
					name: "8.30",
					path: "Products\\8.30",
					attributes: { startDate: "2020-10-26T00:00:00Z", finishDate: "2020-12-04T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/1a6f270b-9b70-4235-8e9f-5eacb79656ae",
				},
				{
					id: "f3c7e0db-76f7-4da0-bf43-d274b0148343",
					name: "8.31",
					path: "Products\\8.31",
					attributes: { startDate: "2020-12-07T00:00:00Z", finishDate: "2021-01-15T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/f3c7e0db-76f7-4da0-bf43-d274b0148343",
				},
				{
					id: "08caf493-7c80-4a25-afbd-b5cc8d731d6f",
					name: "8.32",
					path: "Products\\8.32",
					attributes: { startDate: "2021-01-18T00:00:00Z", finishDate: "2021-02-26T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/08caf493-7c80-4a25-afbd-b5cc8d731d6f",
				},
				{
					id: "dd43b92c-a03c-4c62-a4c3-825a59125ad5",
					name: "8.33",
					path: "Products\\8.33",
					attributes: { startDate: "2021-03-01T00:00:00Z", finishDate: "2021-04-09T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/dd43b92c-a03c-4c62-a4c3-825a59125ad5",
				},
				{
					id: "21545482-c382-43b9-991d-da32c253e2d4",
					name: "8.34",
					path: "Products\\8.34",
					attributes: { startDate: "2021-04-12T00:00:00Z", finishDate: "2021-05-21T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/21545482-c382-43b9-991d-da32c253e2d4",
				},
				{
					id: "a2a1de69-6d9f-4d8f-8ead-be9fe905c6d4",
					name: "8.35",
					path: "Products\\8.35",
					attributes: { startDate: "2021-05-24T00:00:00Z", finishDate: "2021-07-02T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/a2a1de69-6d9f-4d8f-8ead-be9fe905c6d4",
				},
				{
					id: "9abbe07b-264a-46bf-bfa8-4d6e6999fdf1",
					name: "8.36",
					path: "Products\\8.36",
					attributes: { startDate: "2021-07-05T00:00:00Z", finishDate: "2021-08-13T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/9abbe07b-264a-46bf-bfa8-4d6e6999fdf1",
				},
				{
					id: "50fc7855-50da-4610-a140-6ef32063babe",
					name: "8.37",
					path: "Products\\8.37",
					attributes: { startDate: "2021-08-16T00:00:00Z", finishDate: "2021-09-24T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/50fc7855-50da-4610-a140-6ef32063babe",
				},
				{
					id: "9dadb80a-20ad-487b-aae6-21875b699a5f",
					name: "8.38",
					path: "Products\\8.38",
					attributes: { startDate: "2021-09-27T00:00:00Z", finishDate: "2021-11-05T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/9dadb80a-20ad-487b-aae6-21875b699a5f",
				},
				{
					id: "7eb7e715-ba1f-4396-9d49-f5e296a2bc6e",
					name: "8.39",
					path: "Products\\8.39",
					attributes: { startDate: "2021-11-08T00:00:00Z", finishDate: "2021-12-17T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/7eb7e715-ba1f-4396-9d49-f5e296a2bc6e",
				},
				{
					id: "9aa883a0-eb00-4dd9-b260-c51fd89ef863",
					name: "8.40",
					path: "Products\\8.40",
					attributes: { startDate: "2021-12-20T00:00:00Z", finishDate: "2022-01-28T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/9aa883a0-eb00-4dd9-b260-c51fd89ef863",
				},
				{
					id: "a5d49e24-98c0-4257-8532-480ff4156ced",
					name: "8.41",
					path: "Products\\8.41",
					attributes: { startDate: "2022-01-31T00:00:00Z", finishDate: "2022-03-11T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/a5d49e24-98c0-4257-8532-480ff4156ced",
				},
				{
					id: "80a34bc3-2c41-4696-a384-8c05abf108ea",
					name: "8.42",
					path: "Products\\8.42",
					attributes: { startDate: "2022-03-14T00:00:00Z", finishDate: "2022-04-22T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/80a34bc3-2c41-4696-a384-8c05abf108ea",
				},
				{
					id: "80b3d820-6732-4558-a6c0-28efe6ef9f51",
					name: "8.43",
					path: "Products\\8.43",
					attributes: { startDate: "2022-04-25T00:00:00Z", finishDate: "2022-06-03T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/80b3d820-6732-4558-a6c0-28efe6ef9f51",
				},
				{
					id: "9aea523f-35b5-489e-9dbd-eedc427cfbdf",
					name: "8.44",
					path: "Products\\8.44",
					attributes: { startDate: "2022-06-06T00:00:00Z", finishDate: "2022-07-15T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/9aea523f-35b5-489e-9dbd-eedc427cfbdf",
				},
				{
					id: "db1d7056-f567-48cf-8d3a-ff8c6b78a402",
					name: "8.45",
					path: "Products\\8.45",
					attributes: { startDate: "2022-07-18T00:00:00Z", finishDate: "2022-08-26T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/db1d7056-f567-48cf-8d3a-ff8c6b78a402",
				},
				{
					id: "4670e111-5429-4e2c-b8c6-562364bfa34a",
					name: "8.46",
					path: "Products\\8.46",
					attributes: { startDate: "2022-08-29T00:00:00Z", finishDate: "2022-10-07T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/4670e111-5429-4e2c-b8c6-562364bfa34a",
				},
				{
					id: "a88f86d6-b18d-45cd-bb53-e4b937b205fe",
					name: "8.47",
					path: "Products\\8.47",
					attributes: { startDate: "2022-10-10T00:00:00Z", finishDate: "2022-11-18T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/a88f86d6-b18d-45cd-bb53-e4b937b205fe",
				},
				{
					id: "514976c9-3645-401f-a625-490ec40a3f33",
					name: "8.48",
					path: "Products\\8.48",
					attributes: { startDate: "2022-11-21T00:00:00Z", finishDate: "2022-12-30T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/514976c9-3645-401f-a625-490ec40a3f33",
				},
				{
					id: "1332d316-62c0-44a3-af3c-9fd2c5dacfbf",
					name: "8.49",
					path: "Products\\8.49",
					attributes: { startDate: "2023-01-02T00:00:00Z", finishDate: "2023-01-20T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/1332d316-62c0-44a3-af3c-9fd2c5dacfbf",
				},
				{
					id: "5529ee6d-bb99-45a0-972b-780ea920fa94",
					name: "8.50",
					path: "Products\\8.50",
					attributes: { startDate: "2023-01-23T00:00:00Z", finishDate: "2023-02-10T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/5529ee6d-bb99-45a0-972b-780ea920fa94",
				},
				{
					id: "6d7bc3a9-9ddd-482c-8c41-001f38cd67a9",
					name: "8.51",
					path: "Products\\8.51",
					attributes: { startDate: "2023-02-13T00:00:00Z", finishDate: "2023-03-03T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/6d7bc3a9-9ddd-482c-8c41-001f38cd67a9",
				},
				{
					id: "aeb088bb-2d9d-4cb7-a51b-31db6bb60935",
					name: "8.52",
					path: "Products\\8.52",
					attributes: { startDate: "2023-03-06T00:00:00Z", finishDate: "2023-03-24T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/aeb088bb-2d9d-4cb7-a51b-31db6bb60935",
				},
				{
					id: "f6a64398-66cc-413d-9ae9-4b368d60823a",
					name: "8.53",
					path: "Products\\8.53",
					attributes: { startDate: "2023-03-27T00:00:00Z", finishDate: "2023-04-14T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/f6a64398-66cc-413d-9ae9-4b368d60823a",
				},
				{
					id: "6923a683-3273-4a2d-962b-50fbcb621ed0",
					name: "8.54",
					path: "Products\\8.54",
					attributes: { startDate: "2023-04-17T00:00:00Z", finishDate: "2023-05-05T00:00:00Z", timeFrame: "past" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/6923a683-3273-4a2d-962b-50fbcb621ed0",
				},
				{
					id: "073ea0fb-4885-4697-8d41-66ca81f6031c",
					name: "8.55",
					path: "Products\\8.55",
					attributes: { startDate: "2023-05-08T00:00:00Z", finishDate: "2023-05-26T00:00:00Z", timeFrame: "current" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/073ea0fb-4885-4697-8d41-66ca81f6031c",
				},
				{
					id: "572e9cbc-486a-461a-93e5-ce923a6e26ba",
					name: "8.56",
					path: "Products\\8.56",
					attributes: { startDate: "2023-05-29T00:00:00Z", finishDate: "2023-06-16T00:00:00Z", timeFrame: "future" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/572e9cbc-486a-461a-93e5-ce923a6e26ba",
				},
				{
					id: "82c63275-2175-4fbd-a0d0-db798af75ae9",
					name: "8.57",
					path: "Products\\8.57",
					attributes: { startDate: "2023-06-19T00:00:00Z", finishDate: "2023-07-07T00:00:00Z", timeFrame: "future" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/82c63275-2175-4fbd-a0d0-db798af75ae9",
				},
				{
					id: "9592f0b8-2488-4679-9f5d-cb71732618d2",
					name: "8.58",
					path: "Products\\8.58",
					attributes: { startDate: "2023-07-10T00:00:00Z", finishDate: "2023-07-28T00:00:00Z", timeFrame: "future" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/9592f0b8-2488-4679-9f5d-cb71732618d2",
				},
				{
					id: "377c5977-98ab-428f-851b-64ce7c3bb55c",
					name: "8.59",
					path: "Products\\8.59",
					attributes: { startDate: "2023-07-31T00:00:00Z", finishDate: "2023-08-18T00:00:00Z", timeFrame: "future" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/377c5977-98ab-428f-851b-64ce7c3bb55c",
				},
				{
					id: "94d43476-3005-4fe2-bbbd-15eba86adf78",
					name: "8.60",
					path: "Products\\8.60",
					attributes: { startDate: "2023-08-21T00:00:00Z", finishDate: "2023-09-08T00:00:00Z", timeFrame: "future" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/94d43476-3005-4fe2-bbbd-15eba86adf78",
				},
				{
					id: "9386c5be-3ef1-40ab-8a00-220745f32ace",
					name: "8.61",
					path: "Products\\8.61",
					attributes: { startDate: "2023-09-11T00:00:00Z", finishDate: "2023-09-29T00:00:00Z", timeFrame: "future" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/9386c5be-3ef1-40ab-8a00-220745f32ace",
				},
				{
					id: "1ef7cadc-1cfa-450d-a92e-d52091fdad93",
					name: "8.62",
					path: "Products\\8.62",
					attributes: { startDate: "2023-10-02T00:00:00Z", finishDate: "2023-10-20T00:00:00Z", timeFrame: "future" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/1ef7cadc-1cfa-450d-a92e-d52091fdad93",
				},
				{
					id: "bc9cd868-3f54-427c-add6-555a7c153bbe",
					name: "8.63",
					path: "Products\\8.63",
					attributes: { startDate: "2023-10-23T00:00:00Z", finishDate: "2023-11-10T00:00:00Z", timeFrame: "future" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/bc9cd868-3f54-427c-add6-555a7c153bbe",
				},
				{
					id: "e750aeda-efe9-4a90-8d66-7096f3f68f8f",
					name: "8.64",
					path: "Products\\8.64",
					attributes: { startDate: "2023-11-13T00:00:00Z", finishDate: "2023-12-01T00:00:00Z", timeFrame: "future" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/e750aeda-efe9-4a90-8d66-7096f3f68f8f",
				},
				{
					id: "e93c22da-aba8-434b-9cf5-a8f739145a07",
					name: "8.65",
					path: "Products\\8.65",
					attributes: { startDate: "2023-12-04T00:00:00Z", finishDate: "2023-12-22T00:00:00Z", timeFrame: "future" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/e93c22da-aba8-434b-9cf5-a8f739145a07",
				},
				{
					id: "e92f2e54-aa7b-4798-aaa3-cefd39ee2080",
					name: "8.66",
					path: "Products\\8.66",
					attributes: { startDate: "2023-12-25T00:00:00Z", finishDate: "2024-01-12T00:00:00Z", timeFrame: "future" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/e92f2e54-aa7b-4798-aaa3-cefd39ee2080",
				},
				{
					id: "f8c708d3-ef04-482a-bdcd-638434f76b44",
					name: "8.67",
					path: "Products\\8.67",
					attributes: { startDate: "2024-01-15T00:00:00Z", finishDate: "2024-02-02T00:00:00Z", timeFrame: "future" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/f8c708d3-ef04-482a-bdcd-638434f76b44",
				},
				{
					id: "82632c73-d38f-49b3-9807-c6163f145c97",
					name: "8.68",
					path: "Products\\8.68",
					attributes: { startDate: "2024-02-05T00:00:00Z", finishDate: "2024-02-23T00:00:00Z", timeFrame: "future" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/82632c73-d38f-49b3-9807-c6163f145c97",
				},
				{
					id: "6e19d18e-e020-450d-824e-7b0c29e895c9",
					name: "8.69",
					path: "Products\\8.69",
					attributes: { startDate: "2024-02-26T00:00:00Z", finishDate: "2024-03-15T00:00:00Z", timeFrame: "future" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/6e19d18e-e020-450d-824e-7b0c29e895c9",
				},
				{
					id: "fb73e35f-2f84-43dc-9487-7a7c30230e83",
					name: "8.70",
					path: "Products\\8.70",
					attributes: { startDate: "2024-03-18T00:00:00Z", finishDate: "2024-04-05T00:00:00Z", timeFrame: "future" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/fb73e35f-2f84-43dc-9487-7a7c30230e83",
				},
				{
					id: "49546319-585e-42a3-937c-c521810995f6",
					name: "8.71",
					path: "Products\\8.71",
					attributes: { startDate: "2024-04-08T00:00:00Z", finishDate: "2024-04-26T00:00:00Z", timeFrame: "future" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/49546319-585e-42a3-937c-c521810995f6",
				},
				{
					id: "b65482c6-df0a-46c5-b7cb-11684d24fa0b",
					name: "8.72",
					path: "Products\\8.72",
					attributes: { startDate: "2024-04-29T00:00:00Z", finishDate: "2024-05-17T00:00:00Z", timeFrame: "future" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/b65482c6-df0a-46c5-b7cb-11684d24fa0b",
				},
				{
					id: "ddf41f86-52ec-4285-a0ba-9b12eb1c93a2",
					name: "8.73",
					path: "Products\\8.73",
					attributes: { startDate: "2024-05-20T00:00:00Z", finishDate: "2024-06-07T00:00:00Z", timeFrame: "future" },
					url: "https://dev.azure.com/Streets-Heaver/31b8a614-ef73-47ad-8375-9fe47cb4a2d5/ed323b02-7190-4b42-8ac4-a900559ab968/_apis/work/teamsettings/iterations/ddf41f86-52ec-4285-a0ba-9b12eb1c93a2",
				},
			],
		},
	];
	const currentSprint = sprints[0].value.find((sprint) => {
		const now = new Date();
		const startDate = new Date(sprint.attributes.startDate);
		const endDate = new Date(sprint.attributes.finishDate);
		return startDate <= now && endDate >= now;
	});
	return currentSprint;
}

async function fetchWorkItems(sprintName, areaPaths) {
	const url = `https://dev.azure.com/${organization}/${project}/_apis/wit/wiql?api-version=${apiVersion}`;

	const validatedAreaPaths = areaPaths.map((areaPath) =>
		areaPath
			.substring(1)
			.replace(/\\\\/g, "\\")
			.replace(/Area\\/g, "")
	);

	const areaPathFilter = validatedAreaPaths.map((path) => `'${path}'`).join(", ");

	const query = `
        SELECT [System.Id]
        FROM WorkItems
        WHERE [System.TeamProject] = @project
            AND [System.AreaPath] IN (${areaPathFilter})
            AND [System.WorkItemType] IN ('User Story', 'Bug', 'Issue')
            AND [System.State] = 'Closed'
            AND [System.IterationPath] = '${project}\\${sprintName}'`;

	try {
		const response = await axios.post(url, { query }, authHeader);
		return response.data.workItems.map((wi) => wi.id);
	} catch (error) {
		console.error("Error fetching work items:", error.message);
		if (error.response && error.response.data) {
			console.error("Error details:", error.response.data);
		}
		return [];
	}
}

async function fetchWorkItemDetails(workItemIds) {
	if (workItemIds.length === 0) {
		return [];
	}
	const ids = workItemIds.join(",");
	const url = `https://dev.azure.com/${organization}/${project}/_apis/wit/workitems?ids=${ids}&api-version=${apiVersion}`;

	try {
		const response = await axios.get(url, authHeader);
		return response.data.value;
	} catch (error) {
		if (error.response && error.response.data) {
			console.error("Error details:", error.response.data);
		}
		console.error("Error fetching work item details:", error.message);
	}
}

async function analyzeSprint(sprint, workItemDetails, team) {
	const areaPaths = new Set();
	const stats = {
		title: `Sprint Stats for ${team}`,
		sprintName: sprint.name,
		startDate: sprint.attributes.startDate,
		endDate: sprint.attributes.finishDate,
		workItemsCompleted: workItemDetails.length,
		userStats: [],
		velocity: 0,
		userStories: 0,
		bugs: 0,
		issues: 0,
		topPerformer: "",
		bugBasher: "",
	};

	const usersStats = {};

	workItemDetails.forEach((workItem) => {
		const areaPath = workItem.fields["System.AreaPath"];
		if (areaPath) {
			areaPaths.add(areaPath);
		}

		const type = workItem.fields["System.WorkItemType"];
		let completedBy = workItem.fields["System.AssignedTo"];
		if (completedBy !== undefined) {
			completedBy = completedBy.displayName;
		} else {
			completedBy = "Unassigned";
		}

		if (!usersStats[completedBy]) {
			usersStats[completedBy] = { displayName: completedBy, userStories: 0, bugs: 0, issues: 0, storyPoints: 0 };
		}

		switch (type) {
			case "User Story":
				stats.userStories++;
				usersStats[completedBy].userStories++;
				const effort = workItem.fields["Microsoft.VSTS.Scheduling.StoryPoints"];
				stats.velocity += effort;
				usersStats[completedBy].storyPoints += effort;
				break;
			case "Bug":
				stats.bugs++;
				usersStats[completedBy].bugs++;
				break;
			case "Issue":
				stats.issues++;
				usersStats[completedBy].issues++;
				break;
			default:
				break;
		}
	});

	let topPerformer = { name: "", count: 0 };
	let bugBasher = { name: "", count: 0 };

	for (const [user, userStat] of Object.entries(usersStats)) {
		if (userStat.userStories > topPerformer.count) {
			topPerformer = { name: user, count: userStat.userStories };
		}

		if (userStat.bugs > bugBasher.count) {
			bugBasher = { name: user, count: userStat.bugs };
		}
		stats.userStats.push(userStat);
	}

	stats.topPerformer = topPerformer.name + ": " + topPerformer.count;
	stats.bugBasher = bugBasher.name + ": " + bugBasher.count;
	stats.areaPaths = Array.from(areaPaths);

	return stats;
}

async function fetchAreaPaths() {
	const url = `https://dev.azure.com/${organization}/${project}/_apis/wit/classificationnodes?api-version=${apiVersion}&$depth=10&$expand=all`;

	try {
		const response = await axios.get(url, authHeader);
		const areaPaths = [];

		function extractAreaPaths(node) {
			areaPaths.push(node.path);

			if (node.children) {
				for (const child of node.children) {
					extractAreaPaths(child);
				}
			}
		}

		extractAreaPaths(response.data.value[0]);
		return areaPaths;
	} catch (error) {
		if (error.response && error.response.data) {
			console.error("Error details:", error.response.data);
		}
		console.error("Error fetching area paths:", error.message);
		return null;
	}
}

async function fetchTeamAreaPaths(team) {
	const url = `https://dev.azure.com/${organization}/${project}/${team}/_apis/work/teamsettings/teamfieldvalues?api-version=${apiVersion}`;

	try {
		const response = await axios.get(url, authHeader);
		const teamValues = response.data.values;
		const allAreaPaths = await fetchAreaPaths();
		let teamAreaPaths = [];

		for (const value of teamValues) {
			const normalizedValue = value.value.replace(/^[^\\]*\\/, "\\");
			const actualPath = `\\${project}\\Area${normalizedValue}`;
			const matchingAreaPaths = allAreaPaths.filter((path) => path.includes(actualPath));
			teamAreaPaths = [...teamAreaPaths, ...matchingAreaPaths];
		}

		return teamAreaPaths;
	} catch (error) {
		if (error.response && error.response.data) {
			console.error("Error details:", error.response.data);
		}
		console.error("Error fetching area paths:", error.message);
		return null;
	}
}

async function fetchTeamNames(_organization, _project, patToken) {
	const base64Pat = btoa(":" + patToken);
	authHeader = {
		headers: {
			Authorization: `Basic ${base64Pat}`,
		},
	};

	organization = _organization;
	project = _project;

	const url = `https://dev.azure.com/${organization}/_apis/projects/${project}/teams?api-version=${apiVersion}`;

	try {
		const response = await axios.get(url, authHeader);
		return response.data.value.map((team) => team.name);
	} catch (error) {
		console.error("Error fetching teams:", error.message);
		return null;
	}
}

async function fetchSprintNames() {
	const pageSize = 100;
	let skip = 0;

	const url = `https://dev.azure.com/${organization}/${project}/_apis/work/teamsettings/iterations?api-version=${apiVersion}&$skip=${skip}&$top=${pageSize}`;
	try {
		const response = await axios.get(url, authHeader);
		const sprints = response.data.value.map((sprint) => sprint.name);
		return sprints;
	} catch (error) {
		console.error("Error fetching all sprints:", error.message);
	}
}

async function analyzeSelectedSprint(sprintName, teams) {
	const sprint = await fetchSprintByName(sprintName);
	const areaPaths = await fetchTeamAreaPaths(teams[0]);
	const workItemIds = await fetchWorkItems(sprint.name, areaPaths);
	const workItemDetails = await fetchWorkItemDetails(workItemIds);
	const stats = await analyzeSprint(sprint, workItemDetails, teams[0]);

	return {
		areaPaths: areaPaths,
		workItemIds: workItemIds,
		workItemDetails: workItemDetails,
		stats: stats,
	};
}

async function analyzeCurrentSprint(teams, currentSprint) {
	const areaPaths = await fetchTeamAreaPaths(teams[0]);
	const workItemIds = await fetchWorkItems(currentSprint.name, areaPaths);
	const workItemDetails = await fetchWorkItemDetails(workItemIds);
	const stats = await analyzeSprint(currentSprint, workItemDetails, teams[0].value);

	return stats;
}

export { fetchSprints, fetchAreaPaths, fetchTeamNames, fetchTeamAreaPaths, fetchWorkItems, fetchCurrentSprint, fetchSprintNames as fetchAllSprints, analyzeCurrentSprint, analyzeSelectedSprint };
