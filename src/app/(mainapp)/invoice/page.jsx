import InvoiceListTable from "@/components/page-components/invoice/InvoiceListTable";
import InvoicesOverview from "@/components/page-components/invoice/InvoicesOverview";
import React from "react";

export default function page() {
	return (
		<section className="px-5 lg:px-5 xl:px-16 py-12 w-full bg-[#F7F7FF] min-h-screen h-full flex flex-col">
			<div className="flex flex-col gap-y-2 md:flex-row md:items-center justify-between">
				<p className="text-[2.5rem] md:text-[4rem] lg:text-[3.5rem] xl:text-[4rem] font-bold text-primary">
					Invoices
				</p>
			</div>
			<InvoicesOverview />
			<InvoiceListTable />
		</section>
	);
}
