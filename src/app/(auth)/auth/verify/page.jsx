import React from "react";
import Image from "next/image";
import VerifyOTPForm from "@/components/page-components/auth/verify/VerifyOTPForm";

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
			<VerifyOTPForm />
		</div>
	);
}
