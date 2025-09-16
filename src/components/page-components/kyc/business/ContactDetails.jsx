"use client";
import React from "react";
import { Formik, Form } from "formik";
import AppInput from "@/components/shared/forms/AppInput";
import AppButton from "@/components/shared/AppButton";
import PhoneNumberInput from "../../auth/signup/PhoneNumberInput";
import SelectCountry from "../../auth/signup/SelectCountry";
import SelectState from "../individual/SelectState";
import SelectCity from "../individual/SelectCity";
import PlusIconB from "@/components/shared/icons/PlusIconB";

export default function ContactDetails({ goToNextStep, completeStep }) {
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
							Create Your Contact details
						</h3>
					</div>
					<div className="mt-10 w-full flex flex-col gap-y-8">
						<div className="grid md:grid-cols-2 gap-5">
							<AppInput
								name={"business_email"}
								placeholder={"Business Email"}
								label={"Business Email"}
								style={{ backgroundColor: "white" }}
							/>
							<PhoneNumberInput
								selectedCountryCode={values.country_code}
								backgroundColor={"white"}
							/>
						</div>
						<div className="grid md:grid-cols-2 gap-5">
							<AppInput
								name={"first_name"}
								placeholder={"Website"}
								label={"Website"}
								style={{ backgroundColor: "white" }}
							/>
							<div className="flex flex-col gap-y-2 justify-center">
								<div className="flex items-center gap-2">
									<PlusIconB />
									<span className="text-2xl">Facebook</span>
								</div>
								<div className="flex items-center gap-2">
									<PlusIconB />
									<span className="text-2xl">Instagram</span>
								</div>
								<div className="flex items-center gap-2">
									<PlusIconB />
									<span className="text-2xl">Twitter</span>
								</div>
							</div>
						</div>
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
						<div className="grid gap-5">
							<AppInput
								name={"first_name"}
								placeholder={"Address Flat no / House no"}
								label={"Address"}
								style={{ backgroundColor: "white" }}
							/>
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
