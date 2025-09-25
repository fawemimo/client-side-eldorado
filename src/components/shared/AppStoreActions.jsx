"use client";
import React from "react";
import AppButton from "./AppButton";
import AppleIcon from "./icons/AppleIcon";
import GooglePlayIcon from "./icons/GooglePlayIcon";
import Link from "next/link";

export default function AppStoreActions() {
	return (
		<div className="w-full flex flex-col md:flex-row md:items-center gap-[16px] mt-5">
			<Link className="w-full md:w-max" href={"#"} target="_blank">
				<AppButton.WithLoader
					label={
						<>
							<GooglePlayIcon />
							<span>Download on Google Play</span>
						</>
					}
					className="!bg-[#f5c94522] px-[20px] w-full md:!w-max !h-[60px] gap-3 relative overflow-hidden"></AppButton.WithLoader>
			</Link>

			<Link className="w-full md:w-max" href={"#"} target="_blank">
				<AppButton.WithLoader
					label={
						<>
							<AppleIcon />
							<span>Download on App Store</span>
						</>
					}
					className="!bg-[#f5c94522] px-[20px] w-full md:!w-max !h-[60px] gap-3 relative overflow-hidden"></AppButton.WithLoader>
			</Link>
		</div>
	);
}
