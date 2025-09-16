"use client";
import React, { useState } from "react";
import DropdownSelect from "../DropdownSelect/DropdownSelect";
import EnglishIcon from "../icons/EnglishIcon";
import Chevron from "../icons/Chevron";

export default function LanguageDropdown() {
	const [selectedItem, setSelectedItem] = useState("English");

	return (
		<DropdownSelect
			items={["English", "French", "German"]}
			renderItem={({ item, index, setOpen }) => (
				<button
					onClick={() => {
						setSelectedItem(item);
						setOpen(false);
					}}
					className="text-2xl py-5 w-full text-left hover:bg-[#f4f4f4] px-6"
					key={index}>
					{item}
				</button>
			)}
			renderButton={({ open, setOpen }) => (
				<button
					onClick={() => setOpen(!open)}
					className="flex items-center gap-5 text-2xl font-medium border-[1.5px] border-[#E6E6E6] rounded-xl px-5 py-3">
					<EnglishIcon />
					<span>{selectedItem}</span>
					<span
						className={`flex transition-all duration-200 ${
							open ? "rotate-180" : "rotate-0"
						}`}>
						<Chevron />
					</span>
				</button>
			)}
		/>
	);
}
