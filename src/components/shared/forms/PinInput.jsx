"use client";
import React from "react";

export default function PinInput({
	inputRef,
	nextRef,
	value,
	handleChange,
	handleBlur,
	hasError,
	onPaste,
}) {
	return (
		<input
			ref={inputRef}
			type="password"
			onBlur={handleBlur}
			onChange={(e) => {
				if (nextRef.current && e.target.value.length === 1) {
					nextRef.current.focus();
				}

				handleChange(e.target.value);
			}}
			value={value}
			className={`${
				!hasError
					? "focus:border-primary border-[#79747e]"
					: "focus:border-red-500 border-red-500"
			}  outline-none`}
			style={{
				height: "100%",
				width: "100%",
				borderWidth: 1.5,
				padding: 10,
				fontSize: 15,
				borderRadius: 8,
				textAlign: "center",
				color: "black",
			}}
			onPaste={(e) => {
				e.preventDefault();
				onPaste(e);
			}}
		/>
	);
}
