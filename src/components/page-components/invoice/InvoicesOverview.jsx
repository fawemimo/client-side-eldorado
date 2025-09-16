"use client";
import CheckmarkIcon from "@/components/shared/icons/CheckmarkIcon";
import CreateInvoiceIcon from "@/components/shared/icons/CreateInvoiceIcon";
import Xicon from "@/components/shared/icons/XIcon";
import React from "react";
import AppButton from "@/components/shared/AppButton";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function InvoicesOverview() {
	const router = useRouter();

	return (
		<div className="mt-10 flex flex-col md:flex-row items-center justify-between w-full gap-y-6">
			<div className="w-full flex flex-col md:flex-row items-center gap-5">
				<div className="gap-5 flex items-center p-5 rounded-2xl bg-white w-full md:w-[230px]">
					<div className="bg-[#F0CA43] w-[50px] h-[50px] rounded-lg flex items-center justify-center">
						<CreateInvoiceIcon />
					</div>
					<div>
						<p className="text-2xl text-gray-400">Total Invoice</p>
						<p className="text-3xl font-semibold">520</p>
					</div>
				</div>
				<div className="gap-5 flex items-center p-5 rounded-2xl bg-white w-full md:w-[230px]">
					<div className="bg-secondary w-[50px] h-[50px] rounded-lg flex items-center justify-center">
						<CheckmarkIcon />
					</div>
					<div>
						<p className="text-2xl text-gray-400">Paid Invoices</p>
						<p className="text-3xl font-semibold">210</p>
					</div>
				</div>
				<div className="gap-5 flex items-center p-5 rounded-2xl bg-white w-full md:w-[230px]">
					<div className="bg-red-500 w-[50px] h-[50px] rounded-lg flex items-center justify-center">
						<Xicon />
					</div>
					<div>
						<p className="text-2xl text-gray-400">Unpaid Invoices</p>
						<p className="text-3xl font-semibold">20</p>
					</div>
				</div>
			</div>
			<div className="w-[250px]">
				<Link href={"/invoice/create"}>
					<AppButton.WithLoader label={"Create invoice"} primary={false} />
				</Link>
			</div>
		</div>
	);
}
