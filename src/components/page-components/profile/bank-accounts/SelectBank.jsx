"use client";
import DropdownSelect from "@/components/shared/DropdownSelect/DropdownSelect";
import React, { useEffect, useState } from "react";
import Chevron from "@/components/shared/icons/Chevron";
import { useRootState } from "@/components/providers/RootProvider";

export default function SelectBank({ onBankSelect }) {
	const [selectedBank, setSelectedBank] = useState("");
	const [rootState] = useRootState();

	useEffect(() => {
		if (selectedBank !== "") {
			const bank = rootState.banks.find((bank) => bank.name === selectedBank);
			onBankSelect(bank?.code);
		}
	}, [selectedBank]);

	return (
		<DropdownSelect
			dropdownWidth={"100%"}
			items={rootState.banks}
			renderItem={({ item, index, setOpen }) => (
				<button
					type="button"
					onClick={() => {
						setSelectedBank(item.name);
						setOpen(false);
					}}
					className="text-2xl py-5 w-full text-left hover:bg-[#f4f4f4] px-6"
					key={index}>
					{item.name}
				</button>
			)}
			renderButton={({ open, setOpen }) => (
				<div className="flex flex-col gap-y-3">
					<p className="text-2xl text-[#2D3748]">Bank</p>
					<button
						type="button"
						onClick={() => setOpen(!open)}
						className="flex items-center justify-between bg-white gap-5 text-2xl font-medium border-[1.5px] border-[#E6E6E6] rounded-xl px-5 h-[5rem]">
						{selectedBank === "" ? (
							<span className="text-2xl font-normal text-gray-400">
								{"Select Bank"}
							</span>
						) : (
							<span>{selectedBank}</span>
						)}
						<span
							className={`flex transition-all duration-200 ${
								open ? "rotate-180" : "rotate-0"
							}`}>
							<Chevron />
						</span>
					</button>
				</div>
			)}
		/>
	);
}
