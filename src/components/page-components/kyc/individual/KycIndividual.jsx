"use client";
import React, { useState } from "react";
import IndividualVerificationStep from "./IndividualVerificationStep";
import PersonalDetailsForm from "./PersonalDetailsForm";
import AddressDetailsForm from "./AddressDetailsForm";
import IdentityDetailsForm from "./IdentityDetailsForm";
import Requests from "./Requests";

export default function KycIndividual() {
	const [currentStep, setCurrentStep] = useState(1);
	const [steps, setSteps] = useState([
		{ step: 1, title: "PERSONAL DETAILS", completed: false },
		{ step: 2, title: "ADDRESS DETAILS", completed: false },
		{ step: 3, title: "IDENTITY DETAILS", completed: false },
		{ step: 4, title: "DOCUMENTS UPLOAD", completed: false },
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
			<div className="w-full mb-12">
				<IndividualVerificationStep steps={steps} currentStep={currentStep} />
			</div>
			<div className="w-full pb-12">
				{currentStep === 1 && (
					<PersonalDetailsForm
						goToNextStep={() => setCurrentStep(2)}
						completeStep={() => markStepComplete(1)}
					/>
				)}
				{currentStep === 2 && (
					<AddressDetailsForm
						goToNextStep={() => setCurrentStep(3)}
						completeStep={() => markStepComplete(2)}
					/>
				)}
				{currentStep === 3 && (
					<IdentityDetailsForm
						goToNextStep={() => setCurrentStep(4)}
						completeStep={() => markStepComplete(3)}
					/>
				)}
				{currentStep === 4 && <Requests />}
			</div>
		</>
	);
}
