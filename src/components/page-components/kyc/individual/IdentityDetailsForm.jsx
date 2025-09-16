"use client";
import React from "react";
import { Formik, Form } from "formik";
import AppInput from "@/components/shared/forms/AppInput";
import AppButton from "@/components/shared/AppButton";
import SelectIDType from "./SelectIDType";
import UploadImage from "./UploadImage";
import ImageVerification from "./ImageVerification";
import VideoVerification from "./VideoVerification";

export default function IdentityDetailsForm({ goToNextStep, completeStep }) {
	return (
		<Formik
			onSubmit={() => {
				goToNextStep();
				completeStep();
			}}
			initialValues={{ country_code: "+234" }}>
			{({ setFieldValue, values }) => (
				<Form className="md:px-36 md:mt-10 w-full">
					<div>
						<h3 className="font-bold text-[2rem] md:text-[2.8rem] text-[#0D1D54]">
							Identity Details
						</h3>
					</div>
					<div className="mt-10 w-full flex flex-col gap-y-16">
						<div className="grid md:grid-cols-2 gap-5">
							<AppInput
								name={"first_name"}
								placeholder={"Date of Birth"}
								label={"Date of Birth"}
								style={{ backgroundColor: "white" }}
							/>
							<AppInput
								name={"first_name"}
								placeholder={"Place of Birth"}
								label={"Place of Birth"}
								style={{ backgroundColor: "white" }}
							/>
						</div>
						<div className="flex flex-col md:flex-row md:items-center gap-5">
							<h3 className="font-bold text-[2rem] md:text-[2.8rem] text-[#0D1D54]">
								Identity Type
							</h3>
							<div className="md:w-1/2">
								<SelectIDType />
							</div>
						</div>
						<div className="grid md:grid-cols-2 gap-5">
							<AppInput
								name={"first_name"}
								placeholder={"Enter ID Number"}
								label={"ID Number"}
								style={{ backgroundColor: "white" }}
							/>
						</div>
						<div className="w-full">
							<UploadImage title={"UPLOAD FRONT ID IMAGE"} />
						</div>
						<div className="w-full">
							<UploadImage title={"UPLOAD BACK ID IMAGE"} />
						</div>
						{/* <div className="grid md:grid-cols-2 gap-y-20">
							<div className="flex items-center justify-center">
								<div className="w-[242px] h-[242px]">
									<ImageVerification />
								</div>
							</div>
							<div className="flex items-center justify-center">
								<div className="w-[242px] h-[242px]">
									<VideoVerification />
								</div>
							</div>
						</div> */}
						<div className="w-1/2 md:w-[30%] mt-10">
							<AppButton.WithLoader label={"Save and Continue"} />
						</div>
					</div>
				</Form>
			)}
		</Formik>
	);
}
