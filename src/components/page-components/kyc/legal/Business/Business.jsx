"use client";
import React, { useState } from "react";
import Profile from "./Profile";
import Contact from "./Contact";
import Verify from "./Verify";

export default function Business({ goToNextStep, completeStep }) {
	const [currentStep, setCurrentStep] = useState(1);
	const [steps, setSteps] = useState([
		{ step: 1, title: "profile", completed: false },
		{ step: 2, title: "contact", completed: false },
		{ step: 3, title: "verify", completed: false },
	]);

	function markStepComplete(stepNo) {
		setSteps((prev) => {
			const newSteps = [...prev];
			const prevToComplete = newSteps.find((step) => step.step === stepNo);
			prevToComplete.completed = true;
			return newSteps;
		});
	}

	return (
		<div className="md:px-24 mt-10 w-full">
			{currentStep === 1 && (
				<Profile
					businessSteps={steps}
					goToNextBusinessStep={() => setCurrentStep(2)}
					completeBusinessStep={() => markStepComplete(1)}
					currentBusinessStep={currentStep}
				/>
			)}
			{currentStep === 2 && (
				<Contact
					businessSteps={steps}
					goToNextBusinessStep={() => setCurrentStep(3)}
					completeBusinessStep={() => markStepComplete(2)}
					currentBusinessStep={currentStep}
				/>
			)}
			{currentStep === 3 && (
				<Verify
					businessSteps={steps}
					completeBusinessStep={() => markStepComplete(3)}
					currentBusinessStep={currentStep}
					goToNextStep={goToNextStep}
					completeStep={completeStep}
				/>
			)}
		</div>
	);
}
