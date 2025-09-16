"use client";
import React from "react";
import KebabIcon from "@/components/shared/icons/KebabIcon";
import AppButton from "@/components/shared/AppButton";
import CreateInvoiceIcon from "@/components/shared/icons/CreateInvoiceIcon";

export default function CreateInvoice() {
	return (
		<div className="bg-white p-8 rounded-[2.4rem] w-full">
			<div className="flex items-center justify-between w-full">
				<span className="text-[1.4rem] font-bold">Create Invoice</span>
				<KebabIcon />
			</div>
			<div className="my-10">
				<AppButton.WithLoader
					primary={true}
					label={
						<div className="flex items-center gap-5">
							<CreateInvoiceIcon />
							<span className="text-2xl text-white font-medium">
								Create Invoice
							</span>
						</div>
					}
				/>
			</div>
			<button className="text-xl rounded-xl border-primary border-[1.5px] text-primary bg-[#E3FBF4] px-5 py-2 overflow-hidden">
				View All Invoices
			</button>
		</div>
	);
}
