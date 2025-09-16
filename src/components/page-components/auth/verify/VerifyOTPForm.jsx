"use client";
import AppButton from "@/components/shared/AppButton";
import AppInput from "@/components/shared/forms/AppInput";
import { Formik, Form } from "formik";
import React from "react";

export default function VerifyOTPForm() {
	return (
		<>
			<div className="lg:mt-8">
				<h1 className="text-[3rem] md:text-[3.5rem] font-semibold text-customBlackA text-center lg:text-start">
					Verify OTP
				</h1>
				<p className="text-[1.9rem] text-customBlackB  text-center lg:text-start">
					Enter the six digit one time pass code sent to your email to continue
				</p>
			</div>
			<div className="w-full flex items-center justify-center mt-12">
				<Formik initialValues={{ password: "" }}>
					{({ values }) => (
						<Form className="w-full shadow-lg p-10 md:p-12 rounded-lg">
							<div className=" w-full mb-8">
								<AppInput name={"password"} placeholder={"Enter OTP code"} />
							</div>

							<div className="mt-24 flex items-center justify-between">
								<div className="w-[45%]">
									<AppButton.WithLoader
										label="Resend OTP"
										style={{
											background: "transparent",
											color: "black",
											border: "1px solid black",
										}}
									/>
								</div>
								<div className="w-[45%]">
									<AppButton.WithLoader label="Submit" />
								</div>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</>
	);
}
