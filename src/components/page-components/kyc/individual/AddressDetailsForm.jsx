"use client";
import React from "react";
import { Formik, Form } from "formik";
import AppInput from "@/components/shared/forms/AppInput";
import SelectCountry from "../../auth/signup/SelectCountry";
import AppButton from "@/components/shared/AppButton";
import SelectState from "./SelectState";
import SelectCity from "./SelectCity";

export default function AddressDetailsForm({ goToNextStep, completeStep }) {
	return (
		<Formik
			onSubmit={() => {
				goToNextStep();
				completeStep();
			}}
			initialValues={{ country_code: "+234" }}>
			{({ setFieldValue, values }) => (
				<Form className="md:px-24 md:mt-10 w-full">
					<div>
						<h3 className="font-bold text-[2.8rem] text-[#0D1D54]">
							Address Details
						</h3>
					</div>
					<div className="mt-10 w-full flex flex-col gap-y-8">
						<div className="grid md:grid-cols-2 gap-5">
							<SelectCountry
								selectedCountry={"Nigeria"}
								backgroundColor="white"
							/>
							<SelectState />
						</div>
						<div className="grid md:grid-cols-2 gap-5">
							<SelectCity />
							<AppInput
								name={"first_name"}
								placeholder={"Postal/ZIP Code"}
								label={"Postal/ZIP Code"}
								style={{ backgroundColor: "white" }}
							/>
						</div>
						<div className="gap-5">
							<AppInput
								name={"first_name"}
								placeholder={"Address"}
								label={"Address"}
								style={{ backgroundColor: "white" }}
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
