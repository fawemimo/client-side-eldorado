"use client";
import React from "react";
import { Formik, Form } from "formik";
import AppInput from "@/components/shared/forms/AppInput";
import AppButton from "@/components/shared/AppButton";
import UploadImage from "../individual/UploadImage";

export default function Registration({ goToNextStep, completeStep }) {
	return (
		<Formik
			onSubmit={() => {
				goToNextStep();
				completeStep();
			}}
			initialValues={{ country_code: "+234" }}>
			{({ setFieldValue, values }) => (
				<Form className="lg:px-12 xl:px-24 mt-10 w-full">
					<div>
						<h3 className="font-bold text-[2.8rem] text-[#0D1D54]">
							Enter your business registration information
						</h3>
						<p className="text-2xl mt-3 md:w-[85%]  text-[#404B7C]">
							The channels you include below would help us to get in touch with
							you. We will email you with regular updates.
						</p>
					</div>
					<div className="mt-10 w-full flex flex-col gap-y-8">
						<div className="grid  gap-5">
							<AppInput
								name={"first_name"}
								placeholder={"Business Number(BN)"}
								label={"Business Number(BN)"}
								style={{ backgroundColor: "white" }}
							/>
						</div>

						<div className="mt-5">
							<p className="font-bold text-2xl text-[#0D1D54] my-5">
								Business registration documents
							</p>
							<div className="text-2xl mb-5">
								<p className="mb-3">Please upload documents that:</p>
								<ul className="list-disc pl-5">
									<li>Are government issued</li>
									<li>Are full-sized, original and unedited</li>
									<li>Are in JPG, JPEG, PNG or PDF file formats</li>
								</ul>
							</div>
						</div>

						<div className="flex flex-col gap-y-3">
							<span className="text-2xl">Certificate of Business Name</span>
							<UploadImage />
						</div>

						<div className="flex flex-col gap-y-3">
							<span className="text-2xl">Form CAC BN 1</span>
							<UploadImage />
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
