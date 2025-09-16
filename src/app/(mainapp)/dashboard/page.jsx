import TotalSavingsCard from "@/components/page-components/dashboard/cards/TotalSavingsCard";
import TotalSpentCard from "@/components/page-components/dashboard/cards/TotalSpentCard";
import WalletCard from "@/components/page-components/dashboard/cards/WalletCard";
import LatestTransactionsTable from "@/components/page-components/dashboard/LatestTransactions/LatestTransactionsTable";
import React from "react";
import { getUserDetails } from "@/requests/auth";
import { cookies } from "next/headers";
import { ACCESS_TOKEN_COOKIE_NAME } from "@/utils/constants";

export default async function Dashboard() {
	const accessToken = cookies().get(ACCESS_TOKEN_COOKIE_NAME);

	let userDetails;
	userDetails = await getUserDetails(accessToken.value);

	return (
		<section className="px-5 md:px-16 py-12">
			<div>
				<h1 className="text-[2rem] md:text-[3rem] font-bold">
					Welcome, {userDetails.first_name} {userDetails.last_name}
				</h1>
			</div>
			<div className="mt-12 bg-[#fafafa] border-[#e6e6e6] md:border md:rounded-[45px] md:p-10 flex items-center gap-10 overflow-auto">
				<div className="shrink-0 w-[300px] md:w-[334px] h-[180px] ">
					<WalletCard />
				</div>
				<div className="shrink-0 w-[300px] md:w-[334px] h-[180px] ">
					<TotalSpentCard />
				</div>
				<div className="shrink-0 w-[300px] md:w-[334px] h-[180px] ">
					<TotalSavingsCard />
				</div>
			</div>
			<div className="mt-12">
				<h2 className="text-[1.8rem] md:text-[2rem] font-semibold">
					Latest Transactions
				</h2>
				<div className="w-full overflow-auto">
					<div className="w-max md:w-full mt-10 rounded-xl overflow-hidden">
						<LatestTransactionsTable />
					</div>
				</div>
			</div>
		</section>
	);
}
