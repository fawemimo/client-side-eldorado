import AppButton from "@/components/shared/AppButton";
import CopyIcon from "@/components/shared/icons/CopyIcon";
import React, { useState } from "react";
import useHelpers from "@/hooks/useHelpers";
import TransferAmount from "./TransferAmount";
import { useRouter } from "next/navigation";
import useAlert from "@/hooks/useAlert";

export default function BankTransfer() {
	const { copyToClipboard } = useHelpers();
	const [showBankDetails, setShowBankDetails] = useState(false);
	const [bankDetails, setBankDetails] = useState(null);
	const router = useRouter();
	const alert = useAlert();

	const confirmTransaction = function () {
		router.replace("/dashboard");
		alert(
			"success",
			"Your account will be credited once your transaction has been confirmed"
		);
	};

	return (
		<>
			{!showBankDetails && (
				<TransferAmount
					showBankDetails={() => setShowBankDetails(true)}
					setBankDetails={setBankDetails}
				/>
			)}
			{showBankDetails && (
				<div className="w-full mt-10 flex flex-col gap-y-7">
					<div className="bg-white p-5">
						<p className="text-2xl">{bankDetails?.data?.note}</p>
					</div>
					<div className="bg-white h-[70px] flex items-center w-full">
						<p className="w-[25%] h-full bg-[#263238] text-white text-2xl flex items-center justify-center">
							Name:
						</p>
						<p className="grow text-2xl px-5">{bankDetails?.data?.bankname}</p>
					</div>
					<div className="bg-white h-[70px] flex items-center w-full">
						<p className="p-3 w-[25%] h-full bg-[#263238] text-white text-2xl flex items-center justify-center">
							Account Number:
						</p>
						<div
							onClick={() =>
								copyToClipboard(
									bankDetails?.data?.accountnumber,
									"Account Number copied to clipboard"
								)
							}
							className="grow flex items-center justify-between px-5 cursor-pointer">
							<p className="text-2xl">{bankDetails?.data?.accountnumber}</p>
							<CopyIcon />
						</div>
					</div>
					<div className="w-1/2">
						<AppButton.WithLoader
							label={"Confirm Transaction"}
							onClick={() => {
								confirmTransaction();
							}}
						/>
					</div>
				</div>
			)}
		</>
	);
}
