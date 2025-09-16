import CreateInvoice from "@/components/page-components/invoice/create/CreateInvoice";
import React from "react";

export default function page() {
	return (
		<section className="px-5 lg:px-5 xl:px-24 py-12 w-full bg-[#F7F7FF] min-h-screen h-full flex flex-col">
			<CreateInvoice />
		</section>
	);
}
