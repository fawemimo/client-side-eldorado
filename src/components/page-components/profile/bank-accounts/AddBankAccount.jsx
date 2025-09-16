"use client";
import React, { useState } from "react";
import Portal from "@/components/shared/Portal";
import Modal from "@/components/shared/Modal";
import { AnimatePresence } from "framer-motion";
import AppButton from "@/components/shared/AppButton";
import { Form, Formik } from "formik";
import AppInput from "@/components/shared/forms/AppInput";
import SelectBank from "./SelectBank";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import useWallet from "@/hooks/useWallet";
import * as Yup from "yup";
import { useRootState } from "@/components/providers/RootProvider";

const schema = Yup.object().shape({
	account_name: Yup.string().required(),
	account_number: Yup.string().required(),
	bank: Yup.string().required(),
});

export default function AddBankAccount() {
	const [open, setOpen] = useState(false);
	const isMobile = useMediaQuery("(max-width:600px)");
	const { addWithdrawalBankAccount } = useWallet();
	const [rootState, rootActions] = useRootState();

	return (
		<>
			<AppButton.WithLoader
				onClick={() => setOpen(!open)}
				label={"Add Bank Account"}
				style={{ backgroundColor: "#25C348" }}
			/>
			{open && (
				<Portal>
					<AnimatePresence>
						<Modal
							overlayClickHandler={() => setOpen(false)}
							additionalStyles={{
								boxShadow: " 6px 4px 30.4px 0px rgba(0, 0, 0, 0.10)",
							}}
							width={isMobile ? "100%" : "673px"}
							minHeight={isMobile ? "100%" : "496px"}
							maxHeight={isMobile ? "100%" : "470px"}
							bgColor={"#FFFFFF"}>
							<div className="w-full h-full p-12">
								<Formik
									initialValues={{
										account_name: "",
										bank: "",
										account_number: "",
									}}
									onSubmit={async (values, { setSubmitting, resetForm }) => {
										try {
											const response = await addWithdrawalBankAccount(values);

											// add newly added bank to list of user banks in state
											rootActions.userBanks([
												response.data,
												...rootState.userBanks,
											]);

											resetForm();
										} catch (error) {
											console.log(error);
											setSubmitting(false);
										}
									}}
									validationSchema={schema}>
									{({ isSubmitting, isValidating, setFieldValue }) => (
										<Form className="w-full flex flex-col gap-y-6">
											<div className="border-b border-b-customGray pb-7">
												<h6 className="text-2xl font-bold">Add Bank Account</h6>
											</div>
											<AppInput
												name={"account_name"}
												placeholder={"Account Name"}
												label={"Account Name"}
											/>
											<SelectBank
												onBankSelect={(val) => setFieldValue("bank", val)}
											/>
											<AppInput
												name={"account_number"}
												placeholder={"Account Number"}
												label={"Account Number"}
											/>
											<div className="w-[50%] md:w-[30%]">
												<AppButton.WithLoader
													showLoader={!isValidating && isSubmitting}
													label={"Add Bank"}
												/>
											</div>
										</Form>
									)}
								</Formik>
							</div>
						</Modal>
					</AnimatePresence>
				</Portal>
			)}
		</>
	);
}
