"use client";
import React from "react";
import Image from "next/image";
import EyeIcon from "@/components/shared/icons/EyeIcon";

export default function TotalSavingsCard() {
	return (
		<div className="shrink-0 w-full h-full  rounded-[20px] overflow-hidden relative">
			<Image
				width={334}
				height={180}
				alt="Eldorado"
				src={"/card3.png"}
				className="w-full h-full object-cover"
			/>
			<div className="absolute w-full h-full z-[2] top-0 p-8 flex flex-col justify-between">
				<div className="flex items-center justify-between w-full">
					<span className="font-black text-white text-[2.5rem]">
						TOTAL SAVINGS
					</span>
				</div>
				<div>
					<span className="text-[#FAD643] text-[1.8rem]">BALANCE</span>
					<div className="flex items-center gap-8">
						<span className="font-bold text-white text-[2.4rem]">
							NGN 200,000
						</span>
						<EyeIcon.Invisible fill="white" />
					</div>
				</div>
			</div>
		</div>
	);
}
