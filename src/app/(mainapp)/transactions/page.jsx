import CreateInvoice from "@/components/page-components/transactions/CreateInvoice";
import CreatePaymentLink from "@/components/page-components/transactions/CreatePaymentLink";
import LatestInvoiceTable from "@/components/page-components/transactions/LatestInvoiceTable";
import TransactionsHistory from "@/components/page-components/transactions/TransactionsHistory";
import Transfer from "@/components/page-components/transactions/Transfer";
import WalletOverview from "@/components/page-components/transactions/WalletOverview";
import React from "react";

export default function page() {
	return (
		<section className="px-5 lg:px-5 xl:px-16 py-12 w-full bg-[#F7F7FF] min-h-screen h-full flex flex-col">
			<div>
				<h1 className="text-[2rem] md:text-[3rem] font-bold">Transactions</h1>
			</div>
			<div className="h-full w-full flex flex-col gap-y-5 lg:flex-row lg:justify-between mt-12 grow">
				<div className="w-full lg:w-[70%] md:p-3 pr-0">
					<div className="flex flex-col gap-y-5 md:flex-row md:justify-between md:h-[301px]">
						<WalletOverview />
						<TransactionsHistory />
					</div>
					<div className="mt-5 w-full overflow-auto">
						<div className="w-max md:w-full">
							<LatestInvoiceTable />
						</div>
					</div>
				</div>
				<div className="grow w-full lg:w-[29%] flex flex-col md:flex-row lg:flex-col gap-5">
					<Transfer />
					<CreateInvoice />
					<CreatePaymentLink />
				</div>
			</div>
		</section>
	);
}
