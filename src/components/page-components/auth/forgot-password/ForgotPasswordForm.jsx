"use client";
import AppButton from "@/components/shared/AppButton";
import AppInput from "@/components/shared/forms/AppInput";
import { Formik, Form } from "formik";
import React from "react";
import useAuth from "@/hooks/useAuth";
import * as Yup from "yup";

const schema = Yup.object().shape({
	email: Yup.string()
		.required("Email is required")
		.email("Please enter a valid email address"),
});

export default function ForgotPasswordForm() {
	const { forgot_password } = useAuth();

	const handleSubmit = async (values, { setSubmitting }) => {
		try {
			await forgot_password({ email: values.email });
			setSubmitting(false);
		} catch (error) {
			console.error("Forgot password error:", error);
			if (error.errorList) {
				error.errorList.forEach((err) => {
					setFieldError(err.key, err.msg);
				});
			}
			setSubmitting(false);
		}
	};

	return (
		<>
			<div className="lg:mt-8">
				<h1 className="text-[3rem] md:text-[3.5rem] font-semibold text-customBlackA text-center lg:text-start">
					Forgot Password
				</h1>
				<p className="text-[1.9rem] text-customBlackB  text-center lg:text-start">
					Forgot password? Enter your email we will send a link to reset
					password
				</p>
			</div>
			<div className="w-full flex items-center justify-center mt-12">
				<Formik
					validationSchema={schema}
					initialValues={{ email: "" }}
					onSubmit={handleSubmit}>
					{({ isValidating, isSubmitting }) => (
						<Form className="w-full shadow-lg p-10 md:p-12 rounded-lg">
							<div className=" w-full">
								<AppInput name={"email"} placeholder={"email"} />
							</div>
							<div className="mt-24 flex items-center justify-center">
								<div className="w-[60%]">
									<AppButton.WithLoader
										showLoader={!isValidating && isSubmitting}
										label="Submit"
									/>
								</div>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</>
	);
}
