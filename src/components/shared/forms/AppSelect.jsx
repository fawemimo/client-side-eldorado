"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SelectArrow from "../icons/SelectArrow";
import { useClickAway } from "ahooks";

export default function AppSelect({
	name,
	label,
	labelColor,
	placeholder,
	values,
	selectedItem = null,
	renderItem,
	asInput,
	onChange,
	...props
}) {
	const container = useRef(null);
	const [open, setOpen] = useState(false);

	useClickAway(() => {
		setOpen(false);
	}, container);

	useEffect(() => {
		setOpen(false);
	}, [selectedItem]);

	return (
		<div ref={container} className="w-full flex flex-col gap-y-2 relative">
			<label
				style={{ color: labelColor ?? "#2D3748" }}
				className="text-[1.5rem]"
				htmlFor={name}>
				{label}
			</label>
			<div
				onClick={() => setOpen(true)}
				{...props}
				className={`p-5 flex items-center w-full border-[1.5px] h-[5rem] rounded-lg overflow-hidden focus-within:border-primary transition-all duration-100 gap-3`}>
				<button type="button" className="flex items-center gap-4">
					<Image
						src={
							values.find((val) => {
								if (!asInput) {
									return val.country === selectedItem;
								} else {
									return val.dialing_code === selectedItem;
								}
							})?.flag
						}
						width={30}
						height={19}
						alt="Eldorado"
					/>
					<SelectArrow />
				</button>

				{!asInput && (
					<button
						type="button"
						className={` ${
							!selectedItem || selectedItem === ""
								? "text-gray-400"
								: "text-customBlackB"
						} text-left px-3 text-[1.5rem] outline-none border-0 w-[95%] grow h-full`}>
						{!selectedItem || selectedItem === "" ? placeholder : selectedItem}
					</button>
				)}

				{asInput && (
					<>
						<p className="text-2xl">
							{
								values.find((val) => val.dialing_code === selectedItem)
									?.dialing_code
							}
						</p>
						<input
							className="text-left text-[1.5rem] outline-none border-0 w-[70%] grow h-full"
							placeholder={placeholder}
							onChange={(e) => onChange(e.target.value)}
						/>
					</>
				)}
			</div>
			<div
				className={`flex flex-col absolute w-full h-[300px] overflow-auto bg-white top-full p-3 shadow-md  transition-all duration-300 z-[999] ${
					open
						? "opacity-100 pointer-events-auto "
						: "opacity-0 pointer-events-none"
				}`}>
				{values.map((value, i) => renderItem({ item: value, index: i }))}
			</div>
		</div>
	);
}
