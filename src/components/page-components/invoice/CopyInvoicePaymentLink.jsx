import React, { useState } from "react";
import KebabIcon from "@/components/shared/icons/KebabIcon";
import CopyIcon from "@/components/shared/icons/CopyIcon";
import useHelpers from "@/hooks/useHelpers";

export default function CopyInvoicePaymentLink({ link }) {
	const [isOpen, setIsOpen] = useState(false);
	const { copyToClipboard } = useHelpers();

	return (
		<div className="relative">
			<button
				className="w-[3.5rem] h-[3.5rem] flex items-center justify-center"
				onClick={() => setIsOpen(!isOpen)}>
				<KebabIcon />
			</button>
			<div
				className={`absolute right-0 w-[200px] h-max bg-white shadow-xl p-5 rounded-xl transition-all duration-300 ${
					isOpen
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none"
				} `}>
				<div
					onClick={() => copyToClipboard(link, "Link copied to clipboard")}
					className="flex items-center gap-8">
					<CopyIcon />
					<span className="text-2xl">Copy payment link</span>
				</div>
			</div>
		</div>
	);
}
