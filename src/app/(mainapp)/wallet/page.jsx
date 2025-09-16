import FundingAndWithdrawal from "@/components/page-components/wallet/FundingAndWithdrawal/FundingAndWithdrawal";
import WalletBalance from "@/components/page-components/wallet/WalletBalance";
import React from "react";

export default function page() {
	return (
		<section className="px-5 lg:px-5 xl:px-16 py-12 w-full bg-[#F4F4F4] min-h-screen h-full flex flex-col items-center lg:items-start lg:flex-row gap-y-8">
			<div className="w-full md:w-[90%] lg:w-[60%] lg:border-r border-r-customGray">
				<WalletBalance />
			</div>
			<div className="w-full md:w-[90%] lg:w-[40%]">
				<FundingAndWithdrawal />
			</div>
		</section>
	);
}
