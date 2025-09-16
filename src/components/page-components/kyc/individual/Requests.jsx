"use client";
import React from "react";
import { Formik, Form } from "formik";
import AppButton from "@/components/shared/AppButton";
import UploadImage from "./UploadImage";

export default function Requests() {
	return (
		<Formik initialValues={{ country_code: "+234" }}>
			{({ setFieldValue, values }) => (
				<Form className="md:px-24 md:mt-10 w-full">
					<div>
						<h3 className="font-bold text-[2.8rem] text-[#0D1D54]">Requests</h3>
						<p className="text-2xl w-[75%] mt-4 text-[#404B7C]">
							Your KYC is pending on below.
						</p>
					</div>
					<div className="mt-10 w-full flex flex-col gap-y-16">
						<div className="w-full">
							<UploadImage title={"Proof of Address"} />
						</div>
						<div className="w-full">
							<UploadImage title={"Utility Bill"} />
						</div>
						<div className="w-full">
							<UploadImage title={"Bank Statement"} />
						</div>
						<div className="w-full">
							<UploadImage title={"Identity Document"} />
						</div>
						<div className="w-1/2 md:w-[30%] mt-10">
							<AppButton.WithLoader label={"Save and Continue"} />
						</div>
					</div>
				</Form>
			)}
		</Formik>
	);
}
