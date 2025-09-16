import Image from "next/image";
import React from "react";
import useWallet from "@/hooks/useWallet";

export default function FundOptions() {
	const { actions, fundingByTransfer, fundingByCard } = useWallet();

	return (
		<div className="w-full">
			<p className="text-2xl">Fund wallet by...</p>
			<div className="mt-10 grid grid-cols-2 gap-5">
				<button
					onClick={() => actions.fundOption("Bank Transfer")}
					className="rounded-xl bg-white p-5 flex items-center justify-between">
					<div className="flex items-center gap-3">
						<Image
							src={"/transferimg.png"}
							width={34}
							height={34}
							alt="Eldorado"
						/>
						<span className="text-2xl text-left">Bank Transfer</span>
					</div>
					<span
						className={`flex items-center justify-center w-[15px] h-[15px] rounded-full border-[1.5px] ${
							fundingByTransfer ? "border-primary" : "border-gray-400"
						}`}>
						{fundingByTransfer && (
							<span className="w-[5px] h-[5px] bg-primary rounded-full"></span>
						)}
					</span>
				</button>
				<button
					onClick={() => actions.fundOption("Card")}
					className="rounded-xl bg-white p-5 flex items-center justify-between">
					<div className="flex items-center gap-3">
						<Image src={"/cardimg.png"} width={34} height={34} alt="Eldorado" />
						<span className="text-2xl">Card</span>
					</div>
					<span
						className={`flex items-center justify-center w-[15px] h-[15px] rounded-full border-[1.5px] ${
							fundingByCard ? "border-primary" : "border-gray-400"
						}`}>
						{fundingByCard && (
							<span className="w-[5px] h-[5px] bg-primary rounded-full"></span>
						)}
					</span>
				</button>
			</div>
		</div>
	);
}
