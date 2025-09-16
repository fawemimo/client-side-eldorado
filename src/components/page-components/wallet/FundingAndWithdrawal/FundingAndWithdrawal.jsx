"use client";
import React from "react";
import FWTabs from "./FWTabs";
import useWallet from "@/hooks/useWallet";
import FundWallet from "./fund-wallet/FundWallet";
import Withdrawal from "./withdrawal/Withdrawal";

export default function FundingAndWithdrawal() {
	const { state, isFunding, isWithdrawing } = useWallet();

	return (
		<div className="w-full flex flex-col gap-y-8 md:pl-6">
			<FWTabs />
			{isFunding && <FundWallet />}
			{isWithdrawing && <Withdrawal />}
		</div>
	);
}
