"use client";
import React from "react";
import { Formik, Form } from "formik";
import AppInput from "@/components/shared/forms/AppInput";
import AppButton from "@/components/shared/AppButton";
import useAuth from "@/hooks/useAuth";
import * as Yup from "yup";

const schema = Yup.object().shape({
	current_pin: Yup.string().required(),
	new_pin: Yup.string().required(),
});

export default function ChangePinForm() {
	const { change_pin } = useAuth();

	return (
		<Formik
			initialValues={{
				current_pin: "",
				new_pin: "",
			}}
			validationSchema={schema}
			onSubmit={async (values, { setSubmitting, resetForm }) => {
				try {
					await change_pin(values);
					resetForm();
				} catch (error) {
					setSubmitting(false);
					console.error(error);
				}
			}}>
			{({ isSubmitting, isValidating }) => (
				<Form className="w-full md:w-[90%] lg:w-[75%] flex flex-col gap-y-8">
					<div>
						<AppInput
							name="current_pin"
							label={"Current Pin"}
							placeholder={"Current Pin"}
						/>
					</div>

					<div>
						<AppInput
							name="new_pin"
							label={"New Pin"}
							placeholder={"New Pin"}
						/>
					</div>

					<div className="w-[50%] md:w-[30%]">
						<AppButton.WithLoader
							showLoader={!isValidating && isSubmitting}
							label={"Save Changes"}
						/>
					</div>
				</Form>
			)}
		</Formik>
	);
}
