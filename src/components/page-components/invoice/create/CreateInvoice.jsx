"use client";
import React, { useState } from "react";
import ReceiverDetails from "./ReceiverDetails";
import InvoiceDetails from "./InvoiceDetails";

export default function CreateInvoice() {
	const [invoiceType, setInvoiceType] = useState("Service");
	const [step, setStep] = useState(1);

	const [receiverDetails, setReceiverDetails] = useState(null);

	return (
		<>
			{step === 1 && (
				<ReceiverDetails
					setStep={setStep}
					setReceiverDetails={setReceiverDetails}
				/>
			)}

			{step === 2 && (
				<InvoiceDetails
					invoiceType={invoiceType}
					setInvoiceType={setInvoiceType}
					receiverDetails={receiverDetails}
				/>
			)}
		</>
	);
}
