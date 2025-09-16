"use client";

import Step from "@/components/shared/Step";
import React from "react";

export default function BusinessSteps({ steps, currentStep }) {
	return (
		<div className="flex items-center gap-5">
			{steps.map((step, index, arr) => (
				<Step
					key={step.title}
					stepTitle={step.title}
					isActive={step.step === currentStep}
					isCompleted={step.completed}
					step={step.step}
					showLine={index !== arr.length - 1}
					titleColor={"white"}
					lineColor={"black"}
					circleActiveStyle={{ borderColor: "#25C348" }}
					titleActiveStyle={{ color: "black" }}
					horizontal={true}
					showTitle={true}
				/>
			))}
		</div>
	);
}
