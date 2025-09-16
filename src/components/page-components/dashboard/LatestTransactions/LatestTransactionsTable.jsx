"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import useTransactions from "@/hooks/useTransactions";
import useHelpers from "@/hooks/useHelpers";
import TransactionsTablePlaceholder from "./TransactionsTablePlaceholder";

export default function LatestTransactionsTable() {
	const { getTransactionHistory } = useTransactions();
	const { formatDate } = useHelpers();

	const { data, isLoading } = useQuery({
		queryKey: ["latest-transactions"],
		queryFn: async () => {
			const response = await getTransactionHistory();
			return response;
		},
		gcTime: 0,
	});

	if (isLoading) {
		return <TransactionsTablePlaceholder />;
	}

	console.log(data);

	return (
		<>
			<table cellPadding={20} className="w-full">
				<thead className="bg-primary">
					<tr>
						<th className="text-left">
							<span className="text-2xl text-white font-semibold">S/N</span>
						</th>
						<th className="text-left">
							<span className="text-2xl text-white font-semibold">
								Transaction
							</span>
						</th>
						<th className="text-left">
							<span className="text-2xl text-white font-semibold">Amount</span>
						</th>
						<th className="text-left">
							<span className="text-2xl text-white font-semibold">Type</span>
						</th>
						<th className="text-left">
							<span className="text-2xl text-white font-semibold">Status</span>
						</th>
						<th className="text-left">
							<span className="text-2xl text-white font-semibold">Date</span>
						</th>
					</tr>
				</thead>
				<tbody>
					{data?.results.map((d) => (
						<tr key={d.id}>
							<td>
								<span className="text-2xl">{d.id}</span>
							</td>
							<td>
								<div className="w-[200px]">
									<span
										style={{ whiteSpace: "nowrap" }}
										className="text-2xl block w-full overflow-hidden relative text-ellipsis">
										{d.transaction_id}
									</span>
								</div>
							</td>
							<td>
								<span className="text-2xl">N {d.amount.toLocaleString()}</span>
							</td>
							<td>
								<span className="text-2xl">{d.transaction_type}</span>
							</td>
							<td>
								<span
									className={`text-xl flex items-center justify-center px-6 py-2  rounded-full text-white ${
										d.status === "completed" ? "bg-green-400" : "bg-[#F4B232]"
									}`}>
									{d.status}
								</span>
							</td>
							<td>
								<span className="text-2xl">{formatDate(d.created_at)}</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className="flex items-center justify-end">
				<button className="text-2xl rounded-xl border-primary border-[1.5px] text-primary bg-[#E3FBF4] px-5 py-3 overflow-hidden">
					See All
				</button>
			</div>
		</>
	);
}
