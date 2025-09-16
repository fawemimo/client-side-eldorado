"use client";
import React from "react";
import WalletCard from "../dashboard/cards/WalletCard";
import WalletDetails from "./WalletDetails";
import Arrow from "@/components/shared/icons/Arrow";
import { useRootState } from "@/components/providers/RootProvider";

export default function WalletBalance() {
	const [rootState, rootActions] = useRootState();

	return (
		<div className="w-full flex flex-col items-center justify-center">
			<div className="w-full relative flex items-center justify-center">
				<button className="left-[-10px] md:left-0 z-[3] bg-white flex items-center justify-center absolute shadow-lg md:w-[50px] md:h-[50px] w-[35px] h-[35px] rounded-full">
					<Arrow />
				</button>
				<div className="w-full md:w-[80%]">
					<WalletCard
						accountName={
							rootState.userDetails.first_name +
							" " +
							rootState.userDetails.last_name
						}
					/>
				</div>
				<button className="right-[-10px] md:right-[10px] rotate-[-180deg] z-[3] bg-white flex items-center justify-center absolute shadow-lg md:w-[50px] md:h-[50px] w-[35px] h-[35px] rounded-full">
					<Arrow />
				</button>
			</div>
			<div className="w-full md:w-[80%]">
				<div className="w-full mt-12">
					<WalletDetails />
				</div>
			</div>
		</div>
	);
}
