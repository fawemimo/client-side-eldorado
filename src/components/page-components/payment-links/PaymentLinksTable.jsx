"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import useTransactions from "@/hooks/useTransactions";
import useHelpers from "@/hooks/useHelpers";
import usePayments from "@/hooks/usePayments";
import PaymentLinksTablePlaceholder from "./PaymentLinksTablePlaceholder";
import Image from "next/image";

export default function PaymentLinksTable() {
	// const { getTransactionHistory } = useTransactions();
	const { getPaymentLinks } = usePayments();
	const { formatDate } = useHelpers();

	const { data, isLoading } = useQuery({
		queryKey: ["payment-links"],
		queryFn: async () => {
			const response = await getPaymentLinks();
			return response;
		},
		gcTime: 0,
	});

	if (isLoading) {
		return <PaymentLinksTablePlaceholder />;
	}

	console.log(data);

	return (
		<>
			<table cellPadding={20} className="w-full bg-white">
				<thead className="border-b">
					<tr>
						<th className="text-left">
							<span className="text-2xl text-customBlackB font-semibold">
								<input
									type="checkbox"
									className="w-[20px] h-[20px] border-customGray border rounded-lg accent-primary"
								/>
							</span>
						</th>
						<th className="text-left">
							<span className="text-2xl text-customBlackB font-semibold">
								Page Name
							</span>
						</th>
						<th className="text-left">
							<span className="text-2xl text-customBlackB font-semibold">
								Amount
							</span>
						</th>
						<th className="text-left">
							<span className="text-2xl text-customBlackB font-semibold">
								Link/QR
							</span>
						</th>
						<th className="text-left">
							<span className="text-2xl text-customBlackB font-semibold">
								Service Type
							</span>
						</th>
						<th className="text-left">
							<span className="text-2xl text-customBlackB font-semibold">
								Date Created
							</span>
						</th>
						<th className="text-left">
							<span className="text-2xl text-customBlackB font-semibold">
								Date Due
							</span>
						</th>
					</tr>
				</thead>
				<tbody>
					{data.results.map((d) => (
						<tr className="border-b last:border-none" key={d.id}>
							<td>
								<span className="text-2xl text-white font-semibold">
									<input
										type="checkbox"
										className="w-[20px] h-[20px] border-customGray border rounded-lg accent-primary"
									/>
								</span>
							</td>
							<td>
								<div className="w-[200px]">
									<span
										style={{ whiteSpace: "nowrap" }}
										className="text-2xl block w-full overflow-hidden relative text-ellipsis">
										Graphics Design Class
									</span>
								</div>
							</td>
							<td>
								<span className="text-2xl">N 10,000</span>
							</td>
							<td>
								<span className="text-2xl">
									<Image
										src={d.qr_code}
										width={50}
										height={50}
										alt="Eldorado"
									/>
								</span>
							</td>
							<td>
								<span
									style={{ whiteSpace: "nowrap" }}
									className="text-2xl block w-full overflow-hidden relative text-ellipsis">
									Graphics Design
								</span>
							</td>
							<td>
								<span className="text-2xl">{formatDate(Date.now())}</span>
							</td>
							<td>
								<span className="text-2xl">{formatDate(Date.now())}</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}
