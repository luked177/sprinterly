"use client";

import { Card, CardContent, CardHeader } from "@/components/Card";
import { X } from "lucide-react";
import React from "react";
import ReactApexChart from "react-apexcharts";

export const DevVelocityGraph = ({ chartData, devInfo, setDashboardInfo }) => {
	const lineChartDataDefault = [
		{
			name: "Velocity per Sprint",
			data: [
				Math.floor(Math.random() * 20) + 1,
				Math.floor(Math.random() * 20) + 1,
				Math.floor(Math.random() * 20) + 1,
				Math.floor(Math.random() * 20) + 1,
				Math.floor(Math.random() * 20) + 1,
				Math.floor(Math.random() * 20) + 1,
				Math.floor(Math.random() * 20) + 1,
				Math.floor(Math.random() * 20) + 1,
				Math.floor(Math.random() * 20) + 1,
			],
		},
	];

	const lineChartOptionsDefault = {
		chart: {
			toolbar: {
				show: false,
			},
		},
		tooltip: {
			theme: "dark",
		},
		dataLabels: {
			enabled: false,
		},
		xaxis: {
			categories: ["8.46", "8.47", "8.48", "8.49", "8.50", "8.51", "8.52", "8.53", "8.54"],
			labels: {
				style: {
					colors: "#c8cfca",
					fontSize: "12px",
				},
			},
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
		},
		yaxis: {
			labels: {
				style: {
					colors: "#c8cfca",
					fontSize: "12px",
				},
			},
		},
		legend: {
			show: false,
		},
		grid: {
			strokeDashArray: 0,
		},
		fill: {
			type: "gradient",
			gradient: {
				shade: "light",
				type: "vertical",
				shadeIntensity: 0.5,
				// gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
				inverseColors: true,
				opacityFrom: 0.8,
				opacityTo: 0,
				stops: [],
			},
			colors: ["#4FD1C5", "#2D3748"],
		},
		colors: ["#4FD1C5", "#2D3748"],
	};

	const removeItem = (devInfo) => {
		const dashboardInfo = JSON.parse(window.localStorage.getItem("dashboardComponents"));
		const filteredDashboardInfo = dashboardInfo.filter((d) => devInfo.dashboardId !== d.dashboardId);
		setDashboardInfo(filteredDashboardInfo);
		window.localStorage.setItem("dashboardComponents", JSON.stringify(filteredDashboardInfo));
	};

	return (
		<Card className='h-fit w-[400px]'>
			<CardHeader>
				<div className='flex justify-between'>
					<p>{devInfo.dev} - Dev Velocity Trend</p>
					<X className='cursor-pointer' onClick={() => removeItem(devInfo)} />
				</div>
			</CardHeader>
			<CardContent>
				<ReactApexChart options={lineChartOptionsDefault} series={chartData || lineChartDataDefault} type='area' height={"100%"} width={"100%"} />
			</CardContent>
		</Card>
	);
};
