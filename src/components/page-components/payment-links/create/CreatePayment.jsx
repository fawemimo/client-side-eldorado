"use client";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import AppInput from "@/components/shared/forms/AppInput";
import PaymentAmount from "./PaymentAmount";
import AppButton from "@/components/shared/AppButton";
import usePayments from "@/hooks/usePayments";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import AddPaymentImages from "./AddPaymentImages";

const schema = Yup.object().shape({
	amount: Yup.string().required().label("Amount"),
	description: Yup.string().required().label("Description"),
	title: Yup.string().required().label("Title"),
});

export default function CreatePayment() {
	const { createPaymentLink } = usePayments();
	const router = useRouter();
	const [selectedImage, setSelectedImage] = useState({
		fileBlob: null,
		url: null,
		filename: "",
	});

	const [senderDetails, setSenderDetails] = useState({ name: "" });

	return (
		<Formik
			validationSchema={schema}
			onSubmit={async (values, { setSubmitting, resetForm }) => {
				try {
					const formData = new FormData();

					Object.keys(values).forEach((key) =>
						formData.append(key, values[key])
					);

					if (selectedImage.fileBlob) {
						formData.append(
							"logo",
							selectedImage.fileBlob,
							selectedImage.filename
						);
					}
					const data = await createPaymentLink(formData);

					resetForm();
					router.push("/payment-links");
				} catch (error) {
					console.log(error);
					setSubmitting(false);
				}
			}}
			initialValues={{ amount: "", description: "", title: "" }}>
			{({ isSubmitting, isValidating, setFieldValue }) => (
				<Form className="w-full flex mt-10">
					<div className="flex flex-col gap-7 w-full">
						<div className="grid md:grid-cols-2 gap-5">
							<AppInput
								style={{ background: "white" }}
								label={"Title"}
								placeholder={"Title"}
								name={"title"}
							/>
							<PaymentAmount />
						</div>
						<div className="grid md:grid-cols-2 gap-5">
							<AppInput
								style={{ background: "white" }}
								label={"Description"}
								placeholder={"Description"}
								name={"description"}
								as="textarea"
							/>
							<AddPaymentImages
								selectedImage={selectedImage.url}
								setSelectedImage={setSelectedImage}
							/>
						</div>
						<div className="w-[30%]">
							<AppButton.WithLoader
								showLoader={!isValidating && isSubmitting}
								label={"Create link"}
							/>
						</div>
					</div>
				</Form>
			)}
		</Formik>
	);
}
