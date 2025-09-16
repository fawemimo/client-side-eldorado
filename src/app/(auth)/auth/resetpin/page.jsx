import React from "react";
import Image from "next/image";
import ResetPinForm from "@/components/page-components/auth/resetpin/ResetPinForm";

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
					src={"/reset-pin.svg"}
					width={193}
					height={59}
					alt="Eldorado"
				/>
			</div>
			<ResetPinForm />
		</div>
	);
}
