import React from "react";
import FundOptions from "./FundOptions";
import useWallet from "@/hooks/useWallet";
import BankTransfer from "./BankTransfer";
import CardFunding from "./CardFunding";

export default function FundWallet() {
	const { fundingByTransfer, fundingByCard } = useWallet();

	return (
		<div className="w-full">
			<FundOptions />
			{fundingByTransfer && <BankTransfer />}
			{fundingByCard && <CardFunding />}
		</div>
	);
}
