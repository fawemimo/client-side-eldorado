import AppInput from "@/components/shared/forms/AppInput";
import { Formik, Form } from "formik";
import React from "react";
import AddImage from "./AddImage";
import AppButton from "@/components/shared/AppButton";
import * as Yup from "yup";

const schema = Yup.object().shape({
	name: Yup.string().optional().label("Name"),
	email: Yup.string().required().label("Email"),
	address: Yup.string().optional().label("Address"),
	phone: Yup.string().optional().label("Phone"),
});

export default function ReceiverDetails({ setReceiverDetails, setStep }) {
	return (
		<>
			<div className="flex flex-col gap-y-2">
				<p className="text-[2rem] md:text-[4rem] lg:text-[3.5rem] xl:text-[4rem] font-bold text-primary">
					Customer/Receiver Information
				</p>
				<p className="text-2xl">
					Enter your customer/receiver information to proceed
				</p>
			</div>
			<div className="w-full mt-20">
				<Formik
					validationSchema={schema}
					initialValues={{ name: "", email: "", address: "", phone: "" }}
					onSubmit={(values) => {
						setReceiverDetails(values);
						setStep(2);
					}}>
					{({ isSubmitting, isValidating }) => (
						<Form>
							<div className="grid md:grid-cols-2 gap-5 mb-8">
								<AppInput
									style={{ backgroundColor: "white" }}
									label={"Name"}
									placeholder={"Name"}
									name={"name"}
								/>
								<AppInput
									style={{ backgroundColor: "white" }}
									label={"Email Address"}
									placeholder={"Email Address"}
									name={"email"}
								/>
							</div>
							<div className="grid md:grid-cols-2 gap-5">
								<AppInput
									style={{ backgroundColor: "white" }}
									label={"Address"}
									placeholder={"Address"}
									name={"address"}
								/>
								<AppInput
									style={{ backgroundColor: "white" }}
									label={"Phone Number"}
									placeholder={"Phone Number"}
									name={"phone"}
								/>
							</div>
							<div className="mt-12 w-[35%]">
								<AppButton.WithLoader label={"Continue"} />
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</>
	);
}
