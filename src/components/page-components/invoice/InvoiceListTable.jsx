"use client";
import React from "react";
import useHelpers from "@/hooks/useHelpers";
import KebabIcon from "@/components/shared/icons/KebabIcon";
import Chevron from "@/components/shared/icons/Chevron";
import { useQuery } from "@tanstack/react-query";
import useInvoice from "@/hooks/useInvoice";
import InvoiceListPlaceholder from "./InvoiceListPlaceholder";
import CopyIcon from "@/components/shared/icons/CopyIcon";
import CopyInvoicePaymentLink from "./CopyInvoicePaymentLink";

export default function InvoiceListTable() {
	const { formatDate } = useHelpers();
	const { getInvoices } = useInvoice();

	const { data, isLoading, error } = useQuery({
		queryKey: ["invoiceslist"],
		queryFn: async () => {
			const response = await getInvoices();
			return response.results;
		},
		gcTime: 0,
	});

	console.log(data, error);

	return (
		<div className="rounded-xl bg-white mt-12">
			<div className="flex items-center justify-between p-5 py-10">
				<h2 className="text-3xl font-bold">Latest Invoices</h2>
				<div className="flex items-center gap-10">
					<div className="flex items-center gap-5">
						<span className="text-2xl">Newest</span>
						<Chevron />
					</div>
					<KebabIcon />
				</div>
			</div>
			<div className="w-full h-full overflow-auto">
				<div className="w-max md:w-full mt-10">
					{isLoading ? (
						<InvoiceListPlaceholder />
					) : (
						<table cellPadding={20} className="w-full bg-white">
							<thead className="border-b">
								<tr>
									<th className="text-left">
										<span className="text-2xl text-gray-500 font-normal">
											<input
												type="checkbox"
												className="w-[20px] h-[20px] border-customGray border rounded-lg accent-primary"
											/>
										</span>
									</th>
									<th className="text-left">
										<span className="text-2xl text-gray-500 font-normal">
											ID
										</span>
									</th>
									<th className="text-left">
										<span className="text-2xl text-gray-500 font-normal">
											Date
										</span>
									</th>
									<th className="text-left">
										<span className="text-2xl text-gray-500 font-normal">
											Recipent
										</span>
									</th>
									<th className="text-left">
										<span className="text-2xl text-gray-500 font-normal">
											Email
										</span>
									</th>
									<th className="text-left">
										<span className="text-2xl text-gray-500 font-normal">
											Service Type
										</span>
									</th>
									<th className="text-left">
										<span className="text-2xl text-gray-500 font-normal">
											Status
										</span>
									</th>
									<th className="text-left"></th>
								</tr>
							</thead>
							<tbody>
								{data?.map((d) => (
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
											<div className="w-[100px]">
												<span
													style={{ whiteSpace: "nowrap" }}
													className="text-2xl block w-full overflow-hidden relative text-ellipsis">
													{d.invoice_id}
												</span>
											</div>
										</td>
										<td>
											<span className="text-2xl">
												{formatDate(new Date(d.due_date))}
											</span>
										</td>
										<td>
											<span className="text-2xl">Adams</span>
										</td>
										<td>
											<span
												style={{ whiteSpace: "nowrap" }}
												className="text-2xl block w-full overflow-hidden relative text-ellipsis">
												{d.email}
											</span>
										</td>
										<td>
											<span className="text-2xl">{d.description}</span>
										</td>
										<td>
											<span
												className={`p-3 rounded-lg text-2xl flex items-center justify-center  ${
													d.status === "Pending"
														? "bg-[#F0434330] text-[#F04343]"
														: "bg-[#007EFF30] text-[#007EFF]"
												} `}>
												{d.status}
											</span>
										</td>
										<td>
											<CopyInvoicePaymentLink link={d.pay_link} />
										</td>
									</tr>
								))}
							</tbody>
						</table>
					)}
				</div>
			</div>
		</div>
	);
}
