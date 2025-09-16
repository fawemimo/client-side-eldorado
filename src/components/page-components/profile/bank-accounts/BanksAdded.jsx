"use client";
import AppButton from "@/components/shared/AppButton";
import React, { useState } from "react";
import { useRootState } from "@/components/providers/RootProvider";
import useWallet from "@/hooks/useWallet";

export default function BanksAdded() {
	const [rootState, rootActions] = useRootState();
	const { deleteWithdrawalBankAccount } = useWallet();
	const [isDeleting, setIsDeleting] = useState(false);

	function getBankName(bank_code) {
		const bank = rootState.banks.find(
			(bank) => String(bank.id) === String(bank_code)
		);
		return bank?.name;
	}

	return rootState.userBanks.map((bank) => (
		<div key={bank.id} className="p-6 bg-white">
			<div className="flex flex-col gap-y-5 w-full">
				<div>
					<p className="text-2xl">
						ACCOUNT NAME:{" "}
						<span className="text-red-500">{bank.account_name}</span>
					</p>
				</div>
				<div className="flex flex-col gap-y-2">
					<label className="text-2xl" htmlFor="account_name">
						ACCOUNT NUMBER
					</label>
					<input
						type="text"
						readOnly
						value={bank.account_number}
						className={`p-5 flex items-center w-full border-[1.5px] h-[5rem] rounded-lg overflow-hidden focus-within:border-primary text-2xl transition-all duration-100`}
					/>
				</div>
				<div className="flex flex-col gap-y-2">
					<label className="text-2xl" htmlFor="account_name">
						BANK NAME
					</label>
					<input
						type="text"
						readOnly
						value={getBankName(bank.bank)}
						className={`p-5 flex items-center w-full border-[1.5px] h-[5rem] rounded-lg overflow-hidden focus-within:border-primary text-2xl transition-all duration-100`}
					/>
				</div>
				<div className="flex items-center gap-5">
					<div className="w-[250px]">
						<AppButton.WithLoader
							label={"Delete Bank Account"}
							style={{ backgroundColor: "#FF5151" }}
							onClick={async () => {
								try {
									setIsDeleting(true);
									await deleteWithdrawalBankAccount(bank.id);
									setIsDeleting(false);
								} catch (error) {
									console.log(error);
									setIsDeleting(false);
								}
							}}
							showLoader={isDeleting}
						/>
					</div>
				</div>
			</div>
		</div>
	));
}
