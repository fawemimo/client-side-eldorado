"use client";
import React from "react";
import { Formik, Form } from "formik";
import AppInput from "@/components/shared/forms/AppInput";
import AppButton from "@/components/shared/AppButton";
import SelectBank from "../../profile/bank-accounts/SelectBank";

export default function AccountDetails() {
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
			}}>
			{({ setFieldValue, values }) => (
				<Form className="lg:px-12 xl:px-24 mt-10 w-full">
					<div>
						<h3 className="font-bold text-[2rem] md:text-[2.8rem] text-[#0D1D54]">
							Account Details
						</h3>
					</div>
					<div className="mt-10 w-full flex flex-col gap-y-8">
						<div className="grid gap-5">
							<SelectBank />
						</div>

						<div className="grid gap-5">
							<AppInput
								name={"business_email"}
								placeholder={"Account Number"}
								label={"Account Number"}
								style={{ backgroundColor: "white" }}
							/>
						</div>

						<div className="grid gap-5">
							<AppInput
								name={"business_email"}
								placeholder={"Name on Account"}
								label={"Name on Account"}
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
