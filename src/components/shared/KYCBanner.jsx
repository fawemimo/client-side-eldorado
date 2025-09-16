import React from "react";

export default function KYCBanner() {
	return (
		<div className="w-full bottom-0 md:top-0 px-2 h-[40px] md:h-[30px] bg-[#FFCBCB] border-b-[#FF5151] border-b flex items-center justify-center text-center">
			<p className="text-xl md:text-2xl text-[#FF5151] font-medium">
				You have not completed your KYC verification! Click here to complete
			</p>
		</div>
	);
}
