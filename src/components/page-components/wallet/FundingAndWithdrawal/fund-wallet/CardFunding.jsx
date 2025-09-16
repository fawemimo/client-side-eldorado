"use client";
import React from "react";
import { Formik, Form } from "formik";
import AppInput from "@/components/shared/forms/AppInput";
import ChooseCardType from "./ChooseCardType";
import AppButton from "@/components/shared/AppButton";

export default function CardFunding() {
	return (
		<Formik
			initialValues={{
				cardHolderName: "",
				cardNumber: "",
				cardType: "",
				exp: "",
				cvv: "",
			}}>
			{() => (
				<Form className="w-full flex flex-col gap-y-6 mt-10">
					<div className="w-full">
						<AppInput
							name={"cardHolderName"}
							label={"Cardholder Name"}
							placeholder={"Cardholder Name"}
							style={{ backgroundColor: "white" }}
						/>
					</div>
					<div className="w-full">
						<AppInput
							name={"cardNumber"}
							label={"Card Number"}
							placeholder={"Card Number"}
							style={{ backgroundColor: "white" }}
						/>
					</div>
					<div className="w-full">
						<ChooseCardType />
					</div>
					<div className="w-full grid grid-cols-2 gap-5">
						<div className="w-full">
							<AppInput
								name={"exp"}
								label={"Expiry"}
								placeholder={"MM/YY"}
								style={{ backgroundColor: "white" }}
							/>
						</div>
						<div className="w-full">
							<AppInput
								name={"cvv"}
								label={"CVV"}
								placeholder={"XXX"}
								style={{ backgroundColor: "white" }}
							/>
						</div>
					</div>
					<div className="w-full grid grid-cols-2 gap-5">
						<div className="w-full">
							<AppButton.WithLoader
								label={"Use existing card"}
								style={{ backgroundColor: "#DBB42C" }}
							/>
						</div>
						<div className="w-full">
							<AppButton.WithLoader label={"Continue"} />
						</div>
					</div>
				</Form>
			)}
		</Formik>
	);
}
