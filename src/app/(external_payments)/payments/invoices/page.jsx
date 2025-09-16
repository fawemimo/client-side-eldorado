import InvoicePaymentScreen from "@/components/page-components/external_payments/invoices/InvoicePaymentScreen";
import Image from "next/image";
import React from "react";
import WalletProvider from "@/components/providers/WalletProvider";

export default function page() {
	return (
		<WalletProvider>
			<main className="flex flex-col lg:flex-row min-h-screen pt-[100px] lg:pt-0">
				<InvoicePaymentScreen />
			</main>
		</WalletProvider>
	);
}
