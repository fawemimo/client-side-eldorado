import AccountSettingForm from "@/components/page-components/profile/account-settings/AccountSettingForm";
import BanksAdded from "@/components/page-components/profile/bank-accounts/BanksAdded";
import Avatar from "@/components/shared/Avatar";
import AddBankAccount from "@/components/page-components/profile/bank-accounts/AddBankAccount";
import React from "react";
import WalletProvider from "@/components/providers/WalletProvider";

export default function page() {
	return (
		<WalletProvider>
			<div className="flex items-center justify-between">
				<h1 className="text-[2rem] md:text-[3rem] font-bold">
					USER BANK ACCOUNT
				</h1>
				<div className="w-[250px]">
					<AddBankAccount />
				</div>
			</div>
			<div className="w-full bg-white rounded-xl mt-10">
				<div className="p-6 border-b">
					<p className="text-2xl font-medium">BANKS ADDED</p>
				</div>
				<div className="flex flex-col gap-y-8 w-full">
					<BanksAdded />
				</div>
			</div>
		</WalletProvider>
	);
}
