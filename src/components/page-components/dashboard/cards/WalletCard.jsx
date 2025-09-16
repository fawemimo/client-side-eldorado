"use client";
import React from "react";
import Image from "next/image";
import EyeIcon from "@/components/shared/icons/EyeIcon";
import { useRootState } from "@/components/providers/RootProvider";

export default function WalletCard({ accountName }) {
	const [rootState] = useRootState();

	console.log(rootState?.userDetails);

	return (
		<div className="shrink-0 w-full h-full rounded-[20px] overflow-hidden relative">
			<Image
				width={334}
				height={180}
				alt="Eldorado"
				src={"/card1.png"}
				className="w-full h-full object-cover"
			/>
			<div className="absolute w-full h-full z-[2] top-0 p-8 flex flex-col justify-between">
				<div className="flex items-center justify-between w-full">
					<Image
						width={81}
						height={28}
						alt="Eldorado"
						src={"/logotrans.svg"}
						className="object-cover"
					/>
					<span className="font-black text-white text-[2.5rem]">WALLET</span>
				</div>
				{accountName && (
					<div className="flex flex-col gap-y-1 text-white">
						<span className="hidden md:inline text-2xl md:text-[2rem]">
							ACCOUNT NAME
						</span>
						<span className="text-[1.8rem] md:text-[3rem] font-bold">
							{accountName}
						</span>
					</div>
				)}
				<div>
					<span className="text-[#FAD643] text-2xl md:text-[1.8rem]">
						BALANCE
					</span>
					<div className="flex items-center gap-8">
						<span className="font-bold text-white text-[2rem] md:text-[2.4rem]">
							NGN {rootState.userDetails?.account_balance.toLocaleString()}
						</span>
						<EyeIcon.Invisible fill="white" />
					</div>
				</div>
			</div>
		</div>
	);
}
