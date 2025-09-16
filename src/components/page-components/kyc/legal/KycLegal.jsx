"use client";
import React, { useState } from "react";
import LegalVerificationStep from "./LegalVerificationStep";
import Documents from "./Documents";
import Business from "./Business/Business";
import Registration from "./Registration";

export default function KycLegal() {
	const [currentStep, setCurrentStep] = useState(1);
	const [steps, setSteps] = useState([
		{ step: 1, title: "DOCUMENTS", completed: false },
		{ step: 2, title: "BUSINESS", completed: false },
		{ step: 3, title: "REGISTRATION", completed: false },
		{ step: 4, title: "ACCOUNT", completed: false },
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
		<>
			<div className="w-full">
				<LegalVerificationStep steps={steps} currentStep={currentStep} />
			</div>
			<div className="w-full pb-12">
				{currentStep === 1 && (
					<Documents
						goToNextStep={() => setCurrentStep(2)}
						completeStep={() => markStepComplete(1)}
					/>
				)}

				{currentStep === 2 && (
					<Business
						goToNextStep={() => setCurrentStep(3)}
						completeStep={() => markStepComplete(2)}
					/>
				)}

				{currentStep === 3 && (
					<Registration
						goToNextStep={() => setCurrentStep(4)}
						completeStep={() => markStepComplete(3)}
					/>
				)}
			</div>
		</>
	);
}
