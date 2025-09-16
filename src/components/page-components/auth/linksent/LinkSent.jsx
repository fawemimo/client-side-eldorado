"use client";
import React from "react";
import AppButton from "@/components/shared/AppButton";
import Image from "next/image";

export default function LinkSent() {
	return (
		<>
			<div className="lg:mt-8">
				<div>
					<p className="text-[1.9rem] text-customBlackB  text-center lg:text-start">
						A Link has been sent to your email to activate your account
					</p>
				</div>
			</div>
			<div className="mt-10 md:mt-16">
				<div className="w-full shadow-lg p-10 md:p-12 rounded-lg">
					<div className="flex flex-col gap-12 items-center justify-center">
						<Image
							src={"/send-success.png"}
							width={100}
							height={100}
							alt="Eldorado"
						/>
						<div className="w-[60%]">
							<AppButton.WithLoader label="Resend Link" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
