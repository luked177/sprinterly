"use client";

import React, { useRef } from "react";
import Lottie from "lottie-react";
import graphAnimationData from "./graphAnimation.json";

export default function GraphAnimation() {
	const animationRef = useRef(null);
	return (
		<Lottie
			style={{ width: "30px" }}
			onComplete={() => {
				// animationRef.current.stop();
			}}
			lottieRef={animationRef}
			loop={false}
			animationData={graphAnimationData}
		/>
	);
}
