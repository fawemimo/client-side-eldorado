"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import DashboardIcon from "../icons/DashboardIcon";
import WalletIcon from "../icons/WalletIcon";
import SavingsIcon from "../icons/SavingsIcon";
import TransactionsIcon from "../icons/TransactionsIcon";
import InvoicesIcon from "../icons/InvoicesIcon";
import PaymentsIcon from "../icons/PaymentsIcon";
import CardIcon from "../icons/CardIcon";
import CurrencyIcon from "../icons/CurrencyIcon";
import VirtualCardIcon from "../icons/VirtualCardIcon";
import Xicon from "../icons/XIcon";
import { usePathname } from "next/navigation";
import SettingsIcon from "../icons/SettingsIcon";
import SupportIcon from "../icons/SupportIcon";
import LogoutIcon from "../icons/LogoutIcon";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function DashboardSidebar({ showCloseButton = false, onClose }) {
	const pathname = usePathname();
	const { logout } = useAuth();
	const router = useRouter();

	return (
		<div className="w-full h-full">
			<div className="h-[76px] border-b border-b-[#E6E6E6] px-8 flex items-center justify-between">
				<Image src={"/logo.svg"} width={158} height={51} alt="El dorado" />
				{showCloseButton && (
					<button onClick={onClose}>
						<Xicon fill="black" />
					</button>
				)}
			</div>
			<div className="flex flex-col gap-y-[2.4rem] px-8 py-12">
				<Link
					onClick={onClose}
					href={"/dashboard"}
					className={`flex items-center gap-6 pl-5 py-3  border-l-[2px] text-2xl  ${
						pathname === "/dashboard"
							? "text-primary border-l-primary font-semibold"
							: "text-[#736E6E] border-l-transparent "
					}`}>
					<DashboardIcon
						fill={pathname === "/dashboard" ? "#2571F0" : "#736E6E"}
					/>
					<span>Dashboard</span>
				</Link>
				<Link
					onClick={onClose}
					href={"/wallet"}
					className={`flex items-center gap-6 pl-5 py-3  border-l-[2px] text-2xl  ${
						pathname === "/wallet"
							? "text-primary border-l-primary font-semibold"
							: "text-[#736E6E] border-l-transparent "
					}`}>
					<WalletIcon fill={pathname === "/wallet" ? "#2571F0" : "#736E6E"} />
					<span>Wallet </span>
				</Link>
				<Link
					onClick={onClose}
					href={"/transactions"}
					className="flex items-center gap-6 pl-5 py-3 border-l-transparent border-l-[2px] text-2xl text-[#736E6E]">
					<SavingsIcon fill={"#736E6E"} />
					<span>Savings</span>
				</Link>
				<Link
					onClick={onClose}
					href={"/transactions"}
					className={`flex items-center gap-6 pl-5 py-3  border-l-[2px] text-2xl  ${
						pathname === "/transactions"
							? "text-primary border-l-primary font-semibold"
							: "text-[#736E6E] border-l-transparent "
					}`}>
					<TransactionsIcon
						fill={pathname === "/transactions" ? "#2571F0" : "#736E6E"}
					/>
					<span>Transactions</span>
				</Link>
				<Link
					onClick={onClose}
					href={"/invoice"}
					className="flex items-center gap-6 pl-5 py-3 border-l-transparent border-l-[2px] text-2xl text-[#736E6E]">
					<InvoicesIcon fill={"#736E6E"} />
					<span>Invoices</span>
				</Link>
				<Link
					onClick={onClose}
					href={"/payment-links"}
					className="flex items-center gap-6 pl-5 py-3 border-l-transparent border-l-[2px] text-2xl text-[#736E6E]">
					<PaymentsIcon fill={"#736E6E"} />
					<span>Payment Links</span>
				</Link>
				{/* <Link
					onClick={onClose}
					href={"/dashboard"}
					className="flex items-center gap-6 pl-5 py-3 border-l-transparent border-l-[2px] text-2xl text-[#736E6E]">
					<CurrencyIcon fill={"#736E6E"} />
					<span>Currency Exchange</span>
				</Link> */}
				<Link
					onClick={onClose}
					href={"/dashboard"}
					className="flex items-center gap-6 pl-5 py-3 border-l-transparent border-l-[2px] text-2xl text-[#736E6E]">
					<VirtualCardIcon fill={"#736E6E"} />
					<span>Virtual Card</span>
				</Link>
			</div>
			<div className="mt-12 px-8">
				<h5 className="text-[1.8rem] font-bold">Preferences</h5>
			</div>
			<div className="flex flex-col gap-y-[2.4rem] px-8 py-12">
				<Link
					onClick={onClose}
					href={"/dashboard"}
					className="flex items-center gap-6 pl-5 py-3 border-l-transparent border-l-[2px] text-2xl text-[#736E6E]">
					<SettingsIcon fill={"#736E6E"} />
					<span>Settings</span>
				</Link>
				<Link
					onClick={onClose}
					href={"/dashboard"}
					className="flex items-center gap-6 pl-5 py-3 border-l-transparent border-l-[2px] text-2xl text-[#736E6E]">
					<SupportIcon fill={"#736E6E"} />
					<span>Support</span>
				</Link>
				<button
					onClick={() => {
						logout();
						router.replace("/auth/signin");
					}}
					className="flex items-center gap-6 pl-5 py-3 border-l-transparent border-l-[2px] text-2xl text-[#736E6E]">
					<LogoutIcon fill={"#736E6E"} />
					<span>Logout</span>
				</button>
			</div>
		</div>
	);
}
