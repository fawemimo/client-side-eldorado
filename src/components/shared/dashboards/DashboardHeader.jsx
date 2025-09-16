"use client";
import React from "react";
import LanguageDropdown from "./LanguageDropdown";
import NotificationIcon from "../icons/NotificationIcon";
import Avatar from "../Avatar";
import Image from "next/image";
import dynamic from "next/dynamic";
import ProfileDropdown from "./ProfileDropdown";
import { useRootState } from "@/components/providers/RootProvider";

const HamburgerMenuContent = dynamic(
	() => import("../HamburgerMenu/HamburgerMenuContent"),
	{ ssr: false }
);

export default function DashboardHeader() {
	const [rootState] = useRootState();

	return (
		<header className="z-[999] sticky top-0 bg-white w-full h-[76px] flex items-center justify-between px-5 md:px-16 border-b border-b-[#E6E6E6]">
			<Image
				className="xl:opacity-0"
				src={"/logo.svg"}
				width={158}
				height={51}
				alt="El dorado"
			/>
			<div className="flex items-center gap-16">
				<div className="hidden lg:block">
					<LanguageDropdown />
				</div>
				<div className="hidden md:block relative">
					<span className="w-[5px] h-[5px] block bg-red-500 rounded-full absolute top-0 right-[-2px]"></span>
					<NotificationIcon />
				</div>
				<ProfileDropdown />
				<div className="xl:hidden">
					<HamburgerMenuContent />
				</div>
			</div>
		</header>
	);
}
