import React from "react";
import Image from "next/image";
import Signup from "@/components/page-components/auth/signup/Signup";
import AppButton from "@/components/shared/AppButton";
import AppleIcon from "@/components/shared/icons/AppleIcon";
import GoogleIcon from "@/components/shared/icons/GoogleIcon";
import Link from "next/link";
import GooglePlayDL from "@/components/shared/icons/GooglePlayDL";
import AppleStoreDL from "@/components/shared/icons/AppleStoreDL";

export default function page() {
	return (
		<div className="w-full p-8 md:px-24 md:pb-24 lg:p-12 xl:p-24">
			<div>
				<Image
					className="hidden lg:block"
					src={"/logo.svg"}
					width={193}
					height={59}
					alt="Eldorado"
				/>
			</div>
			<Signup />
			<div className="flex items-center justify-center w-full">
				<div className="flex flex-col md:flex-row items-center justify-between w-full gap-y-5 xl:w-[80%] mt-10">
					<button className="flex items-center justify-center gap-3 rounded-lg h-[50px] bg-customBlackB text-white w-full md:w-[48%] text-2xl font-semibold">
						<AppleIcon />
						<span>Sign up with Apple</span>
					</button>
					<button className="flex items-center justify-center gap-3 rounded-lg h-[50px] bg-customBlackB text-white w-full md:w-[48%] text-2xl font-semibold">
						<GoogleIcon />
						<span>Sign up with Google</span>
					</button>
				</div>
			</div>
			<div className="flex items-center justify-center mt-5">
				<p className="text-2xl">
					Already have an account ?{" "}
					<Link href={"/auth/signin"} className="text-primary">
						Log in
					</Link>
				</p>
			</div>
			<div className="mt-20 flex items-center justify-center gap-5">
				<GooglePlayDL />
				<AppleStoreDL />
			</div>
		</div>
	);
}
