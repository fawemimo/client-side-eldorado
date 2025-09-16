"use client";
import React from "react";
import { Formik, Form } from "formik";
import AppInput from "@/components/shared/forms/AppInput";
import AppButton from "@/components/shared/AppButton";
import BusinessSteps from "./BusinessSteps";
import PhoneNumberInput from "@/components/page-components/auth/signup/PhoneNumberInput";
import PlusIconB from "@/components/shared/icons/PlusIconB";
import SelectCountry from "@/components/page-components/auth/signup/SelectCountry";
import SelectState from "../../individual/SelectState";
import SelectCity from "../../individual/SelectCity";

export default function Contact({
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
							How can we reach you
						</h3>
						<p className="text-2xl mt-3 md:w-[85%]  text-[#404B7C]">
							The channels you include below would help us to get in touch with
							you. We will email you with regular updates.
						</p>
					</div>
					<div className="mt-10 w-full flex flex-col gap-y-8">
						<div className="grid md:grid-cols-2 gap-5">
							<AppInput
								name={"first_name"}
								placeholder={"Business Email"}
								label={"Business Email"}
								style={{ backgroundColor: "white" }}
							/>
							<PhoneNumberInput
								selectedCountryCode={"+234"}
								backgroundColor={"white"}
							/>
						</div>
						<div className="grid  md:grid-cols-2  gap-5">
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
						<div className="grid  md:grid-cols-2  gap-5">
							<SelectCountry
								selectedCountry={"Nigeria"}
								backgroundColor={"white"}
							/>
							<SelectState />
						</div>

						<div className="grid  md:grid-cols-2  gap-5">
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
