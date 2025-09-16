"use client";
import Step from "@/components/shared/Step";
import Image from "next/image";
import React from "react";

export default function BusinessVerificationStep({ steps, currentStep }) {
	return (
		<>
			<div className="bg-white h-full w-full pt-12 md:pt-24 pb-12 lg:pb-0">
				<div className="md:px-24 flex flex-col gap-y-2 md:flex-row md:items-center justify-between">
					<p className="text-[2.5rem] md:text-[4rem] lg:text-[3.5rem] xl:text-[4rem] font-bold text-primary">
						KYC Verification
					</p>
					<p className="text-customGray text-2xl">
						Having trouble ? <span className="text-black">Get help</span>
					</p>
				</div>
				<div className="md:px-24 mt-12 w-full">
					<div className="hidden lg:flex  gap-5 w-full">
						{steps.map((step, index, arr) => (
							<Step
								key={step.title}
								stepTitle={step.title}
								isActive={step.step === currentStep}
								isCompleted={step.completed}
								step={step.step}
								showLine={index !== arr.length - 1}
								horizontal={true}
								showTitle={true}
							/>
						))}
					</div>
					<div className="lg:hidden flex items-center gap-5 w-full">
						{steps.map((step, index, arr) => (
							<Step
								key={step.title}
								stepTitle={step.title}
								isActive={step.step === currentStep}
								isCompleted={step.completed}
								step={step.step}
								showLine={index !== arr.length - 1}
								horizontal={true}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
