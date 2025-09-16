"use client";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import AppInput from "@/components/shared/forms/AppInput";
import AppButton from "@/components/shared/AppButton";
import * as Yup from "yup";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const schema = Yup.object().shape({
	email: Yup.string()
		.required("Email is required")
		.email("Please enter a valid email address"),
	password: Yup.string().required("Password is required"),
});

export default function Signin() {
	const { login } = useAuth();
	const router = useRouter();

	const handleSubmit = async (values, { setSubmitting }) => {
		try {
			await login({ email: values.email, password: values.password });
			setSubmitting(false);
			router.replace("/dashboard");
		} catch (error) {
			console.error("Login error:", error);
			setSubmitting(false);
		}
	};

	return (
		<>
			<div className="lg:mt-8">
				<h1 className="text-[3rem] md:text-[3.5rem] font-semibold text-customBlackA text-center lg:text-start">
					Log into your account
				</h1>
				<p className="text-[1.7rem] text-customBlackB  text-center lg:text-start">
					Expanding payment possibilities for businesses, individuals,
					developing markets, and startups.
				</p>
			</div>
			<div className="mt-10 md:mt-16">
				<Formik
					initialValues={{ email: "", password: "" }}
					validationSchema={schema}
					onSubmit={handleSubmit}>
					{({ isSubmitting, isValidating }) => (
						<Form className="w-full">
							<div className="w-full gap-5 mb-8 last:mb-0">
								<AppInput
									name={"email"}
									label={"Email Address"}
									placeholder={"Email Address"}
								/>
							</div>
							<div className="w-full gap-5 mb-8 last:mb-0">
								<AppInput
									name={"password"}
									type="password"
									forPassword={true}
									label={"Password"}
									placeholder={"Password"}
									forReset={false}
								/>
							</div>
							<div className="flex items-center justify-center w-full mt-5">
								<div className="w-full md:w-[80%]">
									<AppButton.WithLoader
										showLoader={!isValidating && isSubmitting}
										label={"Login to your account"}
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
