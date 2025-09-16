"use client";
import React from "react";
import Image from "next/image";
import AppButton from "@/components/shared/AppButton";

export default function page() {
	return (
		<div className="w-full  md:px-24 md:pb-24 lg:p-12 xl:p-24">
			<div>
				<Image
					className="hidden lg:block"
					src={"/logo.svg"}
					width={131}
					height={131}
					alt="Eldorado"
				/>
			</div>
			<div className="flex items-center justify-center">
				<Image
					className="lg:hidden"
					src={"/security.svg"}
					width={193}
					height={59}
					alt="Eldorado"
				/>
			</div>
			<div className="lg:mt-8">
				<h1 className="text-[3rem] md:text-[3.5rem] font-semibold text-customBlackA text-center lg:text-start">
					Activate Link has been sent
				</h1>
				<p className="text-[1.9rem] text-customBlackB  text-center lg:text-start">
					A Link has been sent to your email to activate your account
				</p>
				<div className="mt-24 flex items-center justify-center">
					<div className="w-[60%]">
						<AppButton.WithLoader label="Resend Activation Link" />
					</div>
				</div>
			</div>
		</div>
	);
}
