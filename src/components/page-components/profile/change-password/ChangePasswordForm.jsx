"use client";
import React from "react";
import { Formik, Form } from "formik";
import AppInput from "@/components/shared/forms/AppInput";
import AppButton from "@/components/shared/AppButton";
import useAuth from "@/hooks/useAuth";
import * as Yup from "yup";

const schema = Yup.object().shape({
	current_password: Yup.string().required(),
	new_password: Yup.string().required(),
	re_new_password: Yup.string().required(),
});

export default function ChangePasswordForm() {
	const { changePassword } = useAuth();

	return (
		<Formik
			initialValues={{
				current_password: "",
				new_password: "",
				re_new_password: "",
			}}
			validationSchema={schema}
			onSubmit={async (values, { setSubmitting, resetForm }) => {
				try {
					const response = await changePassword(values);
					console.log(response);
					resetForm();
				} catch (error) {
					console.error(error);
					setSubmitting(false);
				}
			}}>
			{({ isSubmitting, isValidating }) => (
				<Form className="w-full md:w-[90%] lg:w-[75%] flex flex-col gap-y-8">
					<div>
						<AppInput
							name="current_password"
							label={"Current Password"}
							placeholder={"Current Password"}
							forPassword={true}
							forReset={true}
						/>
					</div>
					<div>
						<AppInput
							name="new_password"
							label={"New Password"}
							placeholder={"New Password"}
							forPassword={true}
							forReset={true}
						/>
					</div>
					<div>
						<AppInput
							name="re_new_password"
							label={"Confirm Password"}
							placeholder={"Confirm Password"}
							forPassword={true}
							forReset={true}
						/>
					</div>
					<div className="w-[50%] md:w-[30%]">
						<AppButton.WithLoader
							showLoader={!isValidating && isSubmitting}
							label={"Change Password"}
						/>
					</div>
				</Form>
			)}
		</Formik>
	);
}
