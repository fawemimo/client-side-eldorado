import React from "react";
import Image from "next/image";
import Signup from "@/components/page-components/auth/signup/Signup";
import Signin from "@/components/page-components/auth/signin/Signin";
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
			<Signin />
			<div className="flex flex-col items-center justify-center w-full">
				<div className="flex items-center justify-between w-full mt-8">
					<span className="flex w-[48%] border-dashed border-[1px] border-customBlackA"></span>
					<span className="text-2xl">OR</span>
					<span className="flex w-[48%] border-dashed border-[1px] border-customBlackA"></span>
				</div>
				<div className="flex flex-col md:flex-row items-center justify-between w-full gap-y-5 xl:w-[80%] mt-10">
					<button className="flex items-center justify-center gap-3 rounded-lg h-[50px] bg-customBlackB text-white w-full md:w-[48%] text-2xl font-semibold">
						<AppleIcon />
						<span>Continue with Apple</span>
					</button>
					<button className="flex items-center justify-center gap-3 rounded-lg h-[50px] bg-customBlackB text-white w-full md:w-[48%] text-2xl font-semibold">
						<GoogleIcon />
						<span>Continue with Google</span>
					</button>
				</div>
			</div>
			<div className="flex items-center justify-center mt-5">
				<p className="text-2xl">
					{`Don't have an account ?`}{" "}
					<Link href={"/auth/signup"} className="text-primary">
						Sign up
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
