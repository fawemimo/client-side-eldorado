"use client";
import React, { useState } from "react";
import DropdownSelect from "@/components/shared/DropdownSelect/DropdownSelect";
import { ErrorMessage } from "formik";
import Chevron from "@/components/shared/icons/Chevron";
import AppInput from "@/components/shared/forms/AppInput";

export default function AmountToWithdraw({ labelColor }) {
	const [currency, setCurrency] = useState("NGN");

	return (
		<div className="w-full flex flex-col gap-y-2">
			<label
				style={{ color: labelColor ?? "#2D3748" }}
				className="text-[1.5rem]">
				Enter amount to withdraw
			</label>
			<div
				className={`flex items-center w-full border-[1.5px] h-[5rem] rounded-lg focus-within:border-primary transition-all duration-100 bg-white`}>
				<div className="w-[20%] h-full">
					<DropdownSelect
						dropdownWidth={"100%"}
						items={["NGN", "USD"]}
						renderItem={({ item, index, setOpen }) => (
							<button
								onClick={() => {
									setCurrency(item);
									setOpen(false);
								}}
								type="button"
								className="text-2xl py-5 w-full text-left hover:bg-[#f4f4f4] px-6"
								key={index}>
								{item}
							</button>
						)}
						renderButton={({ open, setOpen }) => (
							<div className="flex flex-col gap-y-3 h-full">
								<button
									type="button"
									onClick={() => setOpen(!open)}
									className="flex items-center justify-between gap-5 text-2xl font-medium  rounded-xl h-full px-5">
									{currency === "" ? (
										<span className="text-2xl font-normal text-gray-400">
											{"NGN/USD"}
										</span>
									) : (
										<span>{currency}</span>
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
				</div>
				<div className="w-[85%]">
					<AppInput
						name={"amount"}
						placeholder={"Amount"}
						style={{ border: "0" }}
					/>
				</div>
			</div>
			<ErrorMessage
				name={"amount"}
				component={"p"}
				className="text-2xl text-red-500"
			/>
		</div>
	);
}
