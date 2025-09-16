"use client";
import React, { useState } from "react";
import KebabIcon from "@/components/shared/icons/KebabIcon";
import { Formik, Form } from "formik";
import AppInput from "@/components/shared/forms/AppInput";
import AppButton from "@/components/shared/AppButton";
import Portal from "@/components/shared/Portal";
import { AnimatePresence } from "framer-motion";
import TransferConfirmationModal from "./TransferConfirmationModal";
import * as Yup from "yup";
import useTransactions from "@/hooks/useTransactions";
import ResetPIN from "./ResetPIN";

const schema = Yup.object().shape({
	email: Yup.string()
		.required("Email is required")
		.email("Please enter a valid email address"),
	amount: Yup.number().min(1).required("Amount is required"),
});

export default function Transfer() {
	const [isConfirming, setIsConfirming] = useState(false);
	const [currentStep, setCurrentStep] = useState("confirm-account");
	const [success, setSuccess] = useState(false);
	const { verifyTransferEmail } = useTransactions();

	const [transferEmailData, setTransferEmailData] = useState({
		userData: null,
		amount: 0,
	});

	return (
		<>
			<div className="bg-white p-8 rounded-[2.4rem] w-full">
				<div className="flex items-center justify-between w-full">
					<span className="text-[1.4rem] font-bold">Transfer</span>
					<KebabIcon />
				</div>
				<div className="mt-6">
					<Formik
						initialValues={{ email: "", amount: 0 }}
						validationSchema={schema}
						onSubmit={async (values) => {
							try {
								const data = await verifyTransferEmail({ email: values.email });
								setTransferEmailData({ userData: data, amount: values.amount });
								setIsConfirming(true);
							} catch (error) {
								console.log(error);
							}
						}}>
						{({ isSubmitting, isValidating }) => (
							<Form className="w-full flex flex-col gap-y-5">
								<AppInput
									name={"email"}
									style={{ backgroundColor: "#F7F7FF" }}
									label={"Transfer to Eldorado user"}
									placeholder={"email@mail.com"}
								/>
								<AppInput
									name={"amount"}
									style={{ backgroundColor: "#F7F7FF" }}
									label={"Amount"}
									placeholder={"0.00"}
								/>
								<div className="flex items-center gap-5">
									<AppButton.WithLoader
										showLoader={!isValidating && isSubmitting}
										label={"Transfer"}
									/>
								</div>
								<div className="text-2xl flex justify-end">
									<ResetPIN />
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>

			{isConfirming && (
				<Portal elementId="body">
					<AnimatePresence>
						<TransferConfirmationModal
							currentStep={currentStep}
							setCurrentStep={setCurrentStep}
							setIsConfirming={setIsConfirming}
							success={success}
							setSuccess={setSuccess}
							transferDetails={transferEmailData}
						/>
					</AnimatePresence>
				</Portal>
			)}
		</>
	);
}
