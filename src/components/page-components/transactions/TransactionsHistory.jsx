"use client";
import KebabIcon from "@/components/shared/icons/KebabIcon";
import React from "react";
import MoneyInIcon from "@/components/shared/icons/MoneyInIcon";
import MoneyOutIcon from "@/components/shared/icons/MoneyOutIcon";

export default function TransactionsHistory() {
	return (
		<div className="bg-white p-8 rounded-[2.4rem] md:w-[35%]">
			<div className="flex items-center justify-between w-full">
				<span className="text-[1.4rem] font-bold">Transactions History</span>
				<KebabIcon />
			</div>
			<div className="flex flex-col gap-y-5 w-full mt-10">
				<div className="flex items-center justify-between w-full">
					<div className="flex items-center gap-3">
						<div className="w-[35px] h-[35px] bg-[#007EFF20] rounded-xl flex items-center justify-center">
							<MoneyInIcon />
						</div>
						<div className="flex flex-col gap-y-1">
							<span className="text-[1.3rem] font-semibold">Deposit Waste</span>
							<span className="text-xl text-customGray">March 21, 2024</span>
						</div>
					</div>
					<span className="text-2xl font-semibold text-primary">+$45</span>
				</div>
				<div className="flex items-center justify-between w-full">
					<div className="flex items-center gap-3">
						<div className="w-[35px] h-[35px] bg-[#F0434320] rounded-xl flex items-center justify-center">
							<MoneyOutIcon />
						</div>
						<div className="flex flex-col gap-y-1">
							<span className="text-[1.3rem] font-semibold">Bank Transfer</span>
							<span className="text-xl text-customGray">March 21, 2024</span>
						</div>
					</div>
					<span className="text-2xl font-semibold text-primary">-$45</span>
				</div>
				<div className="flex items-center justify-between w-full">
					<div className="flex items-center gap-3">
						<div className="w-[35px] h-[35px] bg-[#007EFF20] rounded-xl flex items-center justify-center">
							<MoneyInIcon />
						</div>
						<div className="flex flex-col gap-y-1">
							<span className="text-[1.3rem] font-semibold">
								School Project
							</span>
							<span className="text-xl text-customGray">March 21, 2024</span>
						</div>
					</div>
					<span className="text-2xl font-semibold text-primary">+$45</span>
				</div>
				<div className="flex items-center justify-end">
					<button className="text-xl rounded-xl border-primary border-[1.5px] text-primary bg-[#E3FBF4] px-5 py-2 overflow-hidden">
						See All
					</button>
				</div>
			</div>
		</div>
	);
}
