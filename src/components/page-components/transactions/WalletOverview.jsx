"use client";
import React from "react";
import WalletCard from "../dashboard/cards/WalletCard";
import { useRootState } from "@/components/providers/RootProvider";

export default function WalletOverview() {
	const [rootState, rootActions] = useRootState();
	return (
		<div className="md:w-[63.5%] overflow-hidden rounded-[20px]">
			<WalletCard
				accountName={
					rootState.userDetails.first_name +
					" " +
					rootState.userDetails.last_name
				}
			/>
		</div>
	);
}
