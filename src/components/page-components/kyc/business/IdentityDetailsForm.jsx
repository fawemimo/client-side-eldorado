"use client";
import React from "react";
import { Formik, Form } from "formik";
import AppInput from "@/components/shared/forms/AppInput";
import AppButton from "@/components/shared/AppButton";
import SelectCountry from "../../auth/signup/SelectCountry";
import SelectIDType from "../individual/SelectIDType";
import HomeAddress from "./HomeAddress";

export default function IdentityDetailsForm({ goToNextStep, completeStep }) {
	return (
		<Formik
			initialValues={{
				country_code: "+234",
				phone: "",
				business_email: "",
				website: "",
				country: "",
				state: "",
				city: "",
				zip: "",
				address: "",
			}}
			onSubmit={() => {
				goToNextStep();
				completeStep();
			}}>
			{({ setFieldValue, values }) => (
				<Form className="lg:px-12 xl:px-24 mt-10 w-full">
					<div>
						<h3 className="font-bold text-[2rem] md:text-[2.8rem] text-[#0D1D54]">
							Identity Details
						</h3>
					</div>
					<div className="mt-10 w-full flex flex-col gap-y-8">
						<div className="grid md:grid-cols-2 gap-5">
							<AppInput
								name={"business_email"}
								placeholder={"Date of Birth"}
								label={"Date of Birth"}
								style={{ backgroundColor: "white" }}
							/>
							<SelectCountry
								selectedCountry={"Nigeria"}
								backgroundColor="white"
							/>
						</div>
						<div className="grid gap-5">
							<SelectIDType />
						</div>
						<div className="grid gap-5">
							<AppInput
								name={"business_email"}
								placeholder={"Identification Number"}
								label={"Identification Number"}
								style={{ backgroundColor: "white" }}
							/>
						</div>
						<HomeAddress />
						<div className="w-[50%] md:w-[30%] mt-24">
							<AppButton.WithLoader label={"Save and Continue"} />
						</div>
					</div>
				</Form>
			)}
		</Formik>
	);
}
