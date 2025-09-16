import AppButton from "@/components/shared/AppButton";
import React from "react";

export default function Documents({ goToNextStep, completeStep }) {
	return (
		<div className="lg:px-12 xl:px-24 mt-10 w-full">
			<div>
				<h3 className="font-bold text-[2rem] md:text-[2.8rem] text-[#0D1D54]">
					Activate your business
				</h3>
				<p className="text-2xl mt-3 md:w-[85%]  text-[#404B7C]">
					Based on your business type, you will be required to submit the
					documents below during the business activation process.
				</p>
			</div>
			<div className="flex flex-col gap-y-5 mt-12">
				<div className="flex items-center gap-5">
					<div className="w-[20px] h-[20px] border-primary border rounded-lg"></div>
					<span className="text-2xl text-[#2D3748]">
						Certificate of Business Name
					</span>
				</div>
				<div className="flex items-center gap-5">
					<div className="w-[20px] h-[20px] border-primary border rounded-lg"></div>
					<span className="text-2xl text-[#2D3748]">Business Number (BN)</span>
				</div>
				<div className="flex items-center gap-5">
					<div className="w-[20px] h-[20px] border-primary border rounded-lg"></div>
					<span className="text-2xl text-[#2D3748]">
						Form CAC Business Number 1
					</span>
				</div>
				<div className="flex items-center gap-5">
					<div className="w-[20px] h-[20px] border-primary border rounded-lg"></div>
					<span className="text-2xl text-[#2D3748]">
						Proof of Business Address
					</span>
				</div>
			</div>
			<div className="mt-10">
				<p className="text-red-500 text-2xl">
					You can edit your industry/category and registration type to view
					updated document requirements.
				</p>
			</div>
			<div className="mt-10 w-1/2 md:w-[30%]">
				<AppButton.WithLoader
					onClick={() => {
						goToNextStep();
						completeStep();
					}}
					label={"Save and Continue"}
				/>
			</div>
		</div>
	);
}
