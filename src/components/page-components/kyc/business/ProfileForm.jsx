"use client";
import React from "react";
import { Formik, Form } from "formik";
import AppInput from "@/components/shared/forms/AppInput";
import AppButton from "@/components/shared/AppButton";
import SelectIndustry from "./SelectIndustry";
import SelectCategory from "./SelectCategory";
import SelectBusinessType from "./SelectBusinessType";
import SelectRole from "./SelectRole";

export default function ProfileForm({ goToNextStep, completeStep }) {
	return (
		<Formik
			initialValues={{
				business_name: "",
				staff_size: "",
				description: "",
				industry: "",
				category: "",
				business_type: "",
				role: "",
			}}
			onSubmit={() => {
				goToNextStep();
				completeStep();
			}}>
			{({ setFieldValue, values }) => (
				<Form className="lg:px-12 xl:px-24 mt-10 w-full">
					<div>
						<h3 className="font-bold text-[2rem] md:text-[2.8rem] text-[#0D1D54]">
							Create Your Business Profile
						</h3>
					</div>
					<div className="mt-10 w-full flex flex-col gap-y-8">
						<div className="grid md:grid-cols-2 gap-5">
							<AppInput
								name={"business_name"}
								placeholder={"Business Name"}
								label={"Business Name"}
								style={{ backgroundColor: "white" }}
							/>
							<AppInput
								name={"first_name"}
								placeholder={"Staff Size"}
								label={"Staff Size"}
								style={{ backgroundColor: "white" }}
							/>
						</div>
						<div className="">
							<AppInput
								name={"first_name"}
								placeholder={"Description"}
								label={"Description"}
								as="textarea"
								style={{ backgroundColor: "white" }}
							/>
						</div>
						<div className="grid md:grid-cols-2 gap-5">
							<SelectIndustry />
							<SelectCategory />
						</div>
						<div className="grid md:grid-cols-2 gap-5">
							<SelectBusinessType />
							<SelectRole />
						</div>
						<div className="w-[50%] md:w-[30%] mt-24">
							<AppButton.WithLoader label={"Save and Continue"} />
						</div>
					</div>
				</Form>
			)}
		</Formik>
	);
}
