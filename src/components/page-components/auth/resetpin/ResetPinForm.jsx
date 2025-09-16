"use client";
import AppButton from "@/components/shared/AppButton";
import AppInput from "@/components/shared/forms/AppInput";
import { Formik, Form } from "formik";
import React from "react";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import * as Yup from "yup";

const schema = Yup.object().shape({
	transaction_pin: Yup.string().required().label("PIN"),
});

export default function ResetPinForm() {
	const { reset_pin_update } = useAuth();
	const router = useRouter();
	const searchParams = useSearchParams();

	const handleSubmit = async (
		values,
		{ setSubmitting, setFieldError, resetForm }
	) => {
		try {
			await reset_pin_update({
				transaction_pin: values.transaction_pin,
				uid: searchParams.get("uid"),
				token: searchParams.get("token"),
			});
			resetForm();
			setSubmitting(false);
			router.replace("/auth/signin");
		} catch (error) {
			console.error("Forgot password error:", error);
			setSubmitting(false);
			if (error.errorList) {
				if (error.errorList) {
					error.errorList.forEach((err) => {
						setFieldError(err.key, err.msg);
					});
				}
			}
		}
	};

	return (
		<>
			<div className="lg:mt-8">
				<p className="text-[1.9rem] text-customBlackB  text-center lg:text-start">
					Enter a new transaction pin for your account
				</p>
			</div>
			<div className="w-full flex items-center justify-center mt-12">
				<Formik
					initialValues={{ transaction_pin: "" }}
					validationSchema={schema}
					onSubmit={handleSubmit}>
					{({ isValidating, isSubmitting }) => (
						<Form className="w-full shadow-lg p-10 md:p-12 rounded-lg">
							<div className=" w-full mb-8">
								<AppInput
									forPassword={true}
									forReset={true}
									name={"transaction_pin"}
									placeholder={"New PIN"}
								/>
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
