import React from "react";
import { Formik, Form } from "formik";
import AmountToWithdraw from "./AmountToWithdraw";
import AppInput from "@/components/shared/forms/AppInput";
import AppButton from "@/components/shared/AppButton";
import SelectBankAccount from "./SelectBankAccount";
import useWallet from "@/hooks/useWallet";
import * as Yup from "yup";

const schema = Yup.object().shape({
	amount: Yup.string().required(),
	withdrawal_account_id: Yup.string().required(),
	pin: Yup.string().required(),
});

export default function Withdrawal() {
	const { withdraw } = useWallet();

	return (
		<div className="w-full">
			<p className="text-3xl font-semibold">WITHDRAWAL</p>
			<Formik
				validationSchema={schema}
				initialValues={{ amount: "", withdrawal_account_id: "", pin: "" }}
				onSubmit={async (values, { setSubmitting, resetForm }) => {
					try {
						await withdraw(values);
						setSubmitting(false);
						resetForm();
					} catch (error) {
						setSubmitting(false);
						console.log(error);
					}
				}}>
				{({ isSubmitting, isValidating, setFieldValue }) => (
					<Form className="w-full flex flex-col gap-y-8 mt-10">
						<AmountToWithdraw />
						<SelectBankAccount
							onBankSelect={(val) =>
								setFieldValue("withdrawal_account_id", val)
							}
						/>
						<div className="w-full">
							<AppInput
								label={"Enter Pin"}
								placeholder={"PIN"}
								name={"pin"}
								style={{ background: "white" }}
							/>
						</div>
						<div className="w-1/2">
							<AppButton.WithLoader
								showLoader={!isValidating && isSubmitting}
								label={"Withdraw"}
							/>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}
