"use client";
import PlusIcon from "@/components/shared/icons/PlusIcon";
import ProgressBar from "@/components/shared/ProgressBar";
import React from "react";

export default function WalletDetails() {
	return (
		<div className="w-full grid md:grid-cols-2 gap-3">
			<div className="flex flex-col gap-y-6">
				<div className="border border-customGray rounded-xl p-5">
					<p className="text-2xl font-medium">Account Limit</p>
					<ProgressBar />
					<p className="text-2xl font-medium mt-5">
						<span>NGN 500,000</span> -{" "}
						<span className="text-primary">NGN 500,000</span>
					</p>
				</div>
				<div className="rounded-xl p-5 text-2xl bg-white flex items-center">
					<p>
						Total Withdrawals: <span>NGN 200,000</span>
					</p>
				</div>
				<div className="rounded-xl p-5 text-2xl bg-white flex items-center">
					<p>
						Total Deposits: <span>NGN 200,000</span>
					</p>
				</div>
			</div>
			<div className="flex flex-col gap-y-6">
				<div className="rounded-xl p-5 text-2xl bg-white flex items-center justify-between">
					<p>View statement</p>
					<span className="flex items-center justify-center w-[15px] h-[15px] rounded-full border-[1.5px] border-primary">
						<span className="w-[5px] h-[5px] bg-primary rounded-full"></span>
					</span>
				</div>
				<div className="rounded-xl p-5 text-2xl bg-white flex items-center">
					<p>
						Account Type: <span>Wallet</span>
					</p>
				</div>
				<div className="rounded-xl p-5 text-2xl bg-white flex items-center">
					<p>
						Date of creation: <span>24/2/2024</span>
					</p>
				</div>
				<button className="flex items-center gap-3">
					<PlusIcon />
					<span className="text-2xl">Create new account</span>
				</button>
			</div>
		</div>
	);
}
