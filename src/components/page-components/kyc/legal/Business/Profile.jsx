"use client";
import React from "react";
import { Formik, Form } from "formik";
import AppInput from "@/components/shared/forms/AppInput";
import AppButton from "@/components/shared/AppButton";
import BusinessSteps from "./BusinessSteps";

export default function Profile({
	goToNextBusinessStep,
	completeBusinessStep,
	businessSteps,
	currentBusinessStep,
}) {
	return (
		<Formik
			onSubmit={() => {
				goToNextBusinessStep();
				completeBusinessStep();
			}}
			initialValues={{ country_code: "+234" }}>
			{({ setFieldValue, values }) => (
				<Form className="w-full">
					<div>
						<h3 className="font-bold text-[2.8rem] text-[#0D1D54]">
							Tell us more about your business
						</h3>
						<p className="text-2xl mt-3 md:w-[85%]  text-[#404B7C]">
							As a regulated financial services company, we would need to verify
							your identification and business registration information.
						</p>
					</div>
					<div className="mt-10 w-full flex flex-col gap-y-8">
						<div className="grid gap-5">
							<AppInput
								name={"first_name"}
								placeholder={"Verify your legal business name"}
								label={"Verify your legal business name"}
								as="textarea"
								style={{ backgroundColor: "white" }}
							/>
						</div>
						<div className="grid  gap-5">
							<AppInput
								name={"first_name"}
								placeholder={"Verify business description"}
								label={"Verify business description"}
								as="textarea"
								style={{ backgroundColor: "white" }}
							/>
						</div>

						<div className="my-12">
							<BusinessSteps
								steps={businessSteps}
								currentStep={currentBusinessStep}
							/>
						</div>

						<div className="w-1/2 md:w-[30%]">
							<AppButton.WithLoader label={"Save and Continue"} />
						</div>
					</div>
				</Form>
			)}
		</Formik>
	);
}
