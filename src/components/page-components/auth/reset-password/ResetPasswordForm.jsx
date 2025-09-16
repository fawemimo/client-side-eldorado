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
	password: Yup.string().required().label("Password"),
	re_password: Yup.string().required().label("Password"),
});

export default function ResetPasswordForm() {
	const { password_reset } = useAuth();
	const router = useRouter();
	const searchParams = useSearchParams();

	const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
		try {
			await password_reset({
				new_password: values.password,
				re_new_password: values.re_password,
				uid: searchParams.get("uid"),
				token: searchParams.get("token"),
			});
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
				<h1 className="text-[3rem] md:text-[3.5rem] font-semibold text-customBlackA text-center lg:text-start">
					Reset Password
				</h1>
				<p className="text-[1.9rem] text-customBlackB  text-center lg:text-start">
					Enter a new password for your account
				</p>
			</div>
			<div className="w-full flex items-center justify-center mt-12">
				<Formik
					initialValues={{ password: "", re_password: "" }}
					onSubmit={handleSubmit}
					validationSchema={schema}>
					{({ values, isValidating, isSubmitting }) => (
						<Form className="w-full shadow-lg p-10 md:p-12 rounded-lg">
							<div className=" w-full mb-8">
								<AppInput name={"password"} placeholder={"New Password"} />
							</div>
							<div className=" w-full">
								<AppInput
									name={"re_password"}
									placeholder={"Re enter password"}
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
