"use client";
import DropdownSelect from "@/components/shared/DropdownSelect/DropdownSelect";
import React, { useState } from "react";
import Chevron from "@/components/shared/icons/Chevron";

export default function SelectGender() {
	const [selectedGender, setSelectedGender] = useState("");

	return (
		<DropdownSelect
			dropdownWidth={"100%"}
			items={["Male", "Female"]}
			renderItem={({ item, index, setOpen }) => (
				<button
					onClick={() => {
						setSelectedGender(item);
						setOpen(false);
					}}
					className="text-2xl py-5 w-full text-left hover:bg-[#f4f4f4] px-6"
					key={index}>
					{item}
				</button>
			)}
			renderButton={({ open, setOpen }) => (
				<div className="flex flex-col gap-y-3">
					<p className="text-2xl text-[#2D3748]">Gender</p>
					<button
						onClick={() => setOpen(!open)}
						className="flex items-center justify-between gap-5 text-2xl font-medium border-[1.5px] border-[#E6E6E6] bg-white rounded-xl px-5 h-[5rem]">
						{selectedGender === "" ? (
							<span className="text-2xl font-normal text-gray-400">
								{"Select Gender"}
							</span>
						) : (
							<span>{selectedGender}</span>
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
