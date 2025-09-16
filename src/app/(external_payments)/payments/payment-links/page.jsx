import PaymentLinkScreen from "@/components/page-components/external_payments/invoices/payment-links/PaymentLinkScreen";
import WalletProvider from "@/components/providers/WalletProvider";
import Image from "next/image";
import React from "react";

export default function page() {
	return (
		<WalletProvider>
			<main className="flex flex-col lg:flex-row min-h-screen pt-[100px] lg:pt-0">
				<PaymentLinkScreen />
			</main>
		</WalletProvider>
	);
}
