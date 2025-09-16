"use client";
import React from "react";
import { Formik, Form } from "formik";
import AppButton from "@/components/shared/AppButton";
import BusinessSteps from "./BusinessSteps";
import UploadImage from "../../individual/UploadImage";

export default function Verify({
	completeBusinessStep,
	businessSteps,
	currentBusinessStep,
	goToNextStep,
	completeStep,
}) {
	return (
		<Formik
			onSubmit={() => {
				completeBusinessStep();
				goToNextStep();
				completeStep();
			}}
			initialValues={{ country_code: "+234" }}>
			{({ setFieldValue, values }) => (
				<Form className="w-full">
					<div>
						<h3 className="font-bold text-[2.8rem] text-[#0D1D54]">
							Verify your business address
						</h3>
						<p className="text-2xl mt-3 md:w-[85%]  text-[#404B7C]">
							Please upload a proof of address that:
						</p>
					</div>
					<div className="mt-10">
						<p className="text-2xl mb-5">
							Proof of address can be any of these documents, not more than 6
							months old:
						</p>
						<div className="pl-5 text-2xl mb-5">
							<ul className="list-disc">
								<li>Confirm your address at:</li>
								<li>
									45 Igbariam street achara layout, Enugu, Enugu, Enugu, Nigeria
								</li>
								<li>Are less than 6 months old and in JPG, JPEG, PNG or PDF</li>
							</ul>
						</div>
						<p className="font-bold text-2xl text-[#0D1D54] my-5">
							We accept any ONE of the following documents:
						</p>
						<div className="pl-5 text-2xl mb-5">
							<ul className="list-disc">
								<li>Bank statement</li>
								<li>Utility bills (e.g electricity, water or DSTV bills)</li>
								<li>Tax assessment</li>
								<li>Letter from a government authority</li>
							</ul>
						</div>
					</div>
					<div className="mt-10 w-full flex flex-col gap-y-8">
						<div className="w-full">
							<UploadImage />
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
