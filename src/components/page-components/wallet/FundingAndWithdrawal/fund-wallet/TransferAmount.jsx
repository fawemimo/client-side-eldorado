import React from "react";
import { Formik, Form } from "formik";
import AppInput from "@/components/shared/forms/AppInput";
import AppButton from "@/components/shared/AppButton";
import useWallet from "@/hooks/useWallet";
import * as Yup from "yup";

export default function TransferAmount({ showBankDetails, setBankDetails }) {
	const { generateAccountNumber } = useWallet();

	return (
		<div className="w-full">
			<Formik
				initialValues={{ amount: "" }}
				validationSchema={Yup.object().shape({
					amount: Yup.number().required("Amount is required"),
				})}
				onSubmit={async (values, { setSubmitting }) => {
					try {
						const data = await generateAccountNumber(values);
						console.log(data);
						setBankDetails(data.account_details);
						showBankDetails();
					} catch (error) {
						console.log(error);
					}
				}}>
				{({ isSubmitting, isValidating, values }) => (
					<Form className="w-full flex flex-col gap-y-8 mt-10">
						<div className="w-full">
							<AppInput
								label={"Enter Amount"}
								placeholder={"Enter Amount"}
								name={"amount"}
								style={{ background: "white" }}
							/>
						</div>
						<div className="w-1/2">
							<AppButton.WithLoader
								showLoader={!isValidating && isSubmitting}
								label={"Continue"}
							/>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}
