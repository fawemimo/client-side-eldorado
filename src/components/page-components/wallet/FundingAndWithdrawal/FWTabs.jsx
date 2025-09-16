"use client";
import React from "react";
import useWallet from "@/hooks/useWallet";

export default function FWTabs() {
	const { state, actions, isFunding, isWithdrawing } = useWallet();

	return (
		<div className="h-[70px] md:h-[100px] w-full rounded-3xl overflow-hidden grid grid-cols-2">
			<label className="" htmlFor="fund_wallet">
				<input
					type="radio"
					className="hidden"
					name="funding_withdrawal"
					onChange={(e) => e.target.checked && actions.activity("Fund Wallet")}
					id="fund_wallet"
				/>
				<div
					className={`w-full ${
						isFunding ? "bg-gradient" : "bg-black"
					} h-full flex items-center justify-center cursor-pointer`}>
					<span className="text-3xl font-medium text-white">Fund Wallet</span>
				</div>
			</label>
			<label htmlFor="withdraw">
				<input
					type="radio"
					className="hidden"
					name="funding_withdrawal"
					onChange={(e) => e.target.checked && actions.activity("Withdraw")}
					id="withdraw"
				/>
				<div
					className={`w-full ${
						isWithdrawing ? "bg-gradient" : "bg-black"
					} h-full flex items-center justify-center cursor-pointer`}>
					<span className="text-3xl font-medium text-white">Withdraw</span>
				</div>
			</label>
		</div>
	);
}
