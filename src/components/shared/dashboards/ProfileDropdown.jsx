"use client";
import React from "react";
import DropdownSelect from "../DropdownSelect/DropdownSelect";
import Avatar from "../Avatar";
import Link from "next/link";
import { useRootState } from "@/components/providers/RootProvider";

export default function ProfileDropdown() {
	const [rootState] = useRootState();
	
	return (
		<DropdownSelect
			items={[
				{ title: "Account Settings", href: "/profile/account-settings" },
				{ title: "Change Password", href: "/profile/change-password" },
				{ title: "Bank Accounts", href: "/profile/bank-accounts" },
				{ title: "Transaction PIN", href: "/profile/pin" },
				{ title: "KYC Verification", href: "/kyc/individual" },
			]}
			renderButton={({ setOpen, open }) => (
				<button
					onClick={() => setOpen(!open)}
					className="hidden md:flex items-center gap-5">
					<Avatar
						imageSrc={
							"https://images.pexels.com/photos/3746254/pexels-photo-3746254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						}
						size={50}
						halfRounded={true}
						alt={"Eldorado"}
					/>
					<div className="flex flex-col gap-y-1 items-start">
						<span className="block text-2xl font-bold">
							{rootState.userDetails?.first_name}.{" "}
							{rootState.userDetails?.last_name.charAt(0).toUpperCase()}
						</span>
						<span className="block text-xl text-customGray">
							{rootState.userDetails?.email}
						</span>
					</div>
				</button>
			)}
			renderItem={({ item, index, setOpen, open }) => (
				<Link
					href={item.href}
					onClick={() => setOpen(false)}
					className="text-2xl py-5 w-full text-left hover:bg-[#f4f4f4] px-6"
					key={index}>
					{item.title}
				</Link>
			)}
		/>
	);
}
