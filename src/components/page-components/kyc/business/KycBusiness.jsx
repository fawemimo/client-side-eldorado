"use client";
import React, { useState } from "react";
import BusinessVerificationStep from "./BusinessVerificationStep";
import ProfileForm from "./ProfileForm";
import ContactDetails from "./ContactDetails";
import IdentityDetailsForm from "./IdentityDetailsForm";
import AccountDetails from "./AccountDetails";

export default function KycBusiness() {
	const [currentStep, setCurrentStep] = useState(1);
	const [steps, setSteps] = useState([
		{ step: 1, title: "PROFILE", completed: false },
		{ step: 2, title: "CONTACT", completed: false },
		{ step: 3, title: "IDENTITY DETAILS", completed: false },
		{ step: 4, title: "ACCOUNT DETAILS", completed: false },
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
				<BusinessVerificationStep steps={steps} currentStep={currentStep} />
			</div>
			<div className="w-full pb-12">
				{currentStep === 1 && (
					<ProfileForm
						goToNextStep={() => setCurrentStep(2)}
						completeStep={() => markStepComplete(1)}
					/>
				)}
				{currentStep === 2 && (
					<ContactDetails
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
				{currentStep === 4 && <AccountDetails />}
			</div>
		</>
	);
}
