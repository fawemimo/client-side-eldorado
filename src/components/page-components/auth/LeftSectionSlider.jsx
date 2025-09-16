"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LeftSectionSlider() {
	const pathname = usePathname();

	return (
		<div className="w-full p-8 md:px-24 lg:p-24 md:pt-24 flex flex-col items-center">
			<div className="w-full fixed p-8 lg:p-0 lg:static top-0 z-[999] bg-white">
				<Link className="w-max" href={"/"}>
					<Image
						className="lg:hidden self-start w-[150px] md:max-w-full"
						src={"/logo.svg"}
						width={193}
						height={59}
						alt="Eldorado"
					/>
				</Link>
			</div>
			<h2 className="hidden lg:block lg:text-[4rem] xl:text-[4.5rem] font-bold text-white text-center">
				{pathname.startsWith("/auth/signup")
					? "Create an account with us today!!"
					: ""}

				{pathname.startsWith("/auth/signin")
					? "Create an account with us today!!"
					: ""}

				{pathname.startsWith("/auth/resetpassword")
					? "Reset your password here"
					: ""}

				{pathname.startsWith("/auth/verify") ? "Verify your O.T.P" : ""}

				{pathname.startsWith("/auth/linksent")
					? "Verification Link Sent!!!"
					: ""}

				{pathname.startsWith("/auth/resetpin") ? "Reset your PIN" : ""}
			</h2>

			{pathname.startsWith("/auth/signin") && (
				<Image
					src={"/sigin-illustration-1.png"}
					width={484}
					height={470}
					alt="Eldorado"
					priority={true}
					className="hidden md:block max-w[80%] md:max-w-full mt-24 lg:mt-12"
				/>
			)}

			{pathname.startsWith("/auth/signup") && (
				<Image
					src={"/signup-illustration-2.png"}
					width={484}
					height={470}
					priority={true}
					alt="Eldorado"
					className="max-w[80%] md:max-w-full mt-24 lg:mt-12"
				/>
			)}

			{pathname.startsWith("/auth/verify") && (
				<Image
					src={"/verify.svg"}
					width={484}
					height={470}
					priority={true}
					alt="Eldorado"
					className="max-w[80%] md:max-w-full"
				/>
			)}

			{pathname.startsWith("/auth/resetpassword") && (
				<Image
					src={"/resetpasswordill.svg"}
					width={484}
					height={470}
					priority={true}
					alt="Eldorado"
					className="max-w[80%] md:max-w-full"
				/>
			)}

			{pathname.startsWith("/auth/forgot-password") && (
				<Image
					src={"/forgotpassword.svg"}
					width={484}
					height={470}
					priority={true}
					alt="Eldorado"
					className="max-w[80%] md:max-w-full"
				/>
			)}

			{pathname.startsWith("/auth/linksent") && (
				<Image
					src={"/linksent.svg"}
					width={484}
					height={470}
					alt="Eldorado"
					priority={true}
					className="max-w[80%] md:max-w-full"
				/>
			)}

			{pathname.startsWith("/auth/resetpin") && (
				<Image
					src={"/reset-pin.svg"}
					width={484}
					height={470}
					priority={true}
					alt="Eldorado"
					className="max-w[80%] md:max-w-full"
				/>
			)}
		</div>
	);
}
