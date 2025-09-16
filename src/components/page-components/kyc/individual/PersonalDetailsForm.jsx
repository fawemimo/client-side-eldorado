"use client";
import React from "react";
import { Formik, Form } from "formik";
import AppInput from "@/components/shared/forms/AppInput";
import PhoneNumberInput from "../../auth/signup/PhoneNumberInput";
import SelectGender from "./SelectGender";
import AppButton from "@/components/shared/AppButton";

export default function PersonalDetailsForm({ goToNextStep, completeStep }) {
	return (
		<Formik
			initialValues={{
				country_code: "+234",
				phone: "",
				gender: "",
				email: "",
				first_name: "",
				last_name: "",
			}}
			onSubmit={() => {
				goToNextStep();
				completeStep();
			}}>
			{({ setFieldValue, values }) => (
				<Form className="lg:px-12 xl:px-24 md:mt-10 w-full">
					<div>
						<h3 className="font-bold text-[2rem] md:text-[2.8rem] text-[#0D1D54]">
							Enter Your Personal Details
						</h3>
						<p className="text-2xl md:w-[75%] mt-4 text-[#404B7C]">
							Enter the right details in the following as your information will
							not be lost and is safe with us.
						</p>
					</div>
					<div className="mt-10 w-full flex flex-col gap-y-8">
						<div className="grid md:grid-cols-2 gap-5">
							<AppInput
								name={"first_name"}
								placeholder={"First Name"}
								label={"First Name"}
								style={{ backgroundColor: "white" }}
							/>
							<AppInput
								name={"first_name"}
								placeholder={"First Name"}
								label={"Last Name"}
								style={{ backgroundColor: "white" }}
							/>
						</div>
						<div className="grid md:grid-cols-2 gap-5">
							<AppInput
								name={"first_name"}
								placeholder={"Email"}
								label={"Email"}
								style={{ backgroundColor: "white" }}
							/>
							<PhoneNumberInput
								setCountryCode={(val) => setFieldValue("country_code", val)}
								selectedCountryCode={values.country_code}
								setPhoneNumber={(val) => setFieldValue("phone_number", val)}
								backgroundColor={"white"}
							/>
						</div>
						<div className="grid md:grid-cols-2 gap-5">
							<SelectGender />
						</div>
						<div className="w-[50%] md:w-[30%]">
							<AppButton.WithLoader label={"Save and Continue"} />
						</div>
					</div>
				</Form>
			)}
		</Formik>
	);
}
