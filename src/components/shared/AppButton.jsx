"use client";
import React from "react";
import Link from "next/link";
import AppLoader from "./AppLoader";

function AppButton() {
	return null;
}

const WithLoader = function ({
	label,
	type = "submit",
	showLoader,
	primary = true,
	...props
}) {
	return (
		<button
			{...props}
			type={type}
			disabled={showLoader}
			className={`${
				primary
					? "bg-primary hover:bg-secondary"
					: "bg-secondary hover:bg-primary"
			} text-2xl w-full h-[50px] flex items-center justify-center rounded-lg text-white  disabled:opacity-50 disabled:cursor-not-allowed ${
				props.className
			}`}>
			{showLoader ? (
				<AppLoader width="3rem" height="3rem" border="0.2rem" />
			) : (
				label
			)}
		</button>
	);
};

const AsLink = function ({ label, primary = true, ...props }) {
	return (
		<Link
			{...props}
			className={`${
				primary
					? "bg-primary hover:bg-secondary"
					: "bg-secondary hover:bg-primary"
			} text-2xl w-full h-[50px] flex items-center justify-center rounded-lg text-white  disabled:opacity-50 disabled:cursor-not-allowed`}>
			{label}
		</Link>
	);
};

AppButton.WithLoader = WithLoader;
AppButton.AsLink = AsLink;

export default AppButton;
