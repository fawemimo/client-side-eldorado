import KycIndividual from "@/components/page-components/kyc/individual/KycIndividual";
import KycLegal from "@/components/page-components/kyc/legal/KycLegal";
import React from "react";

export default function page() {
	return (
		<section className="px-5 md:px-16 py-12 w-full">
			<KycLegal />
		</section>
	);
}
