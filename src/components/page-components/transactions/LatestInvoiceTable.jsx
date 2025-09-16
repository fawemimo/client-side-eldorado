"use client";

import KebabIcon from "@/components/shared/icons/KebabIcon";
import ShoppingIcon from "@/components/shared/icons/ShoppingIcon";
import React from "react";

export default function LatestInvoiceTable() {
	return (
		<div className="w-full bg-white overflow-hidden rounded-[24px] pb-7">
			<div className="flex items-center justify-between p-8">
				<p className="text-[2.4rem] font-bold">Latest Invoice</p>
				<button className="text-xl rounded-xl border-primary border-[1.5px] text-primary bg-[#E3FBF4] px-5 py-2 overflow-hidden">
					See All
				</button>
			</div>
			<table cellPadding={20} className="mt-5 bg-white w-full">
				<thead>
					<tr className="border-b">
						<th className="text-left">
							<div className="w-[20px] h-[20px] border-customGray border rounded-lg"></div>
						</th>
						<th className="text-left">
							<span className="text-2xl text-customGray font-normal">
								Transaction
							</span>
						</th>
						<th className="text-left">
							<span className="text-2xl text-customGray font-normal">Date</span>
						</th>
						<th className="text-left">
							<span className="text-2xl text-customGray font-normal">
								Total
							</span>
						</th>
						<th className="text-left"></th>
					</tr>
				</thead>
				<tbody>
					<tr className="border-b">
						<td className="text-left">
							<div className="w-[20px] h-[20px] border-customGray border rounded-lg"></div>
						</td>
						<td className="text-left">
							<div className="flex items-center gap-5">
								<div className="w-[50px] h-[50px] bg-[#007EFF20] rounded-xl flex items-center justify-center">
									<ShoppingIcon />
								</div>
								<span className="text-2xl">Shopping</span>
							</div>
						</td>
						<td className="text-left">
							<span className="text-2xl text-customGray font-normal">
								28/2/2021
							</span>
						</td>
						<td className="text-left">
							<span className="text-2xl text-primary font-bold">$300</span>
						</td>
						<td className="text-left">
							<KebabIcon fill="#999999" />
						</td>
					</tr>
					<tr className="border-b">
						<td className="text-left">
							<div className="w-[20px] h-[20px] border-customGray border rounded-lg"></div>
						</td>
						<td className="text-left">
							<div className="flex items-center gap-5">
								<div className="w-[50px] h-[50px] bg-[#007EFF20] rounded-xl flex items-center justify-center">
									<ShoppingIcon />
								</div>
								<span className="text-2xl">Shopping</span>
							</div>
						</td>
						<td className="text-left">
							<span className="text-2xl text-customGray font-normal">
								28/2/2021
							</span>
						</td>
						<td className="text-left">
							<span className="text-2xl text-primary font-bold">$300</span>
						</td>
						<td className="text-left">
							<KebabIcon fill="#999999" />
						</td>
					</tr>
					<tr className="border-b">
						<td className="text-left">
							<div className="w-[20px] h-[20px] border-customGray border rounded-lg"></div>
						</td>
						<td className="text-left">
							<div className="flex items-center gap-5">
								<div className="w-[50px] h-[50px] bg-[#007EFF20] rounded-xl flex items-center justify-center">
									<ShoppingIcon />
								</div>
								<span className="text-2xl">Shopping</span>
							</div>
						</td>
						<td className="text-left">
							<span className="text-2xl text-customGray font-normal">
								28/2/2021
							</span>
						</td>
						<td className="text-left">
							<span className="text-2xl text-primary font-bold">$300</span>
						</td>
						<td className="text-left">
							<KebabIcon fill="#999999" />
						</td>
					</tr>
					<tr className="border-b">
						<td className="text-left">
							<div className="w-[20px] h-[20px] border-customGray border rounded-lg"></div>
						</td>
						<td className="text-left">
							<div className="flex items-center gap-5">
								<div className="w-[50px] h-[50px] bg-[#007EFF20] rounded-xl flex items-center justify-center">
									<ShoppingIcon />
								</div>
								<span className="text-2xl">Shopping</span>
							</div>
						</td>
						<td className="text-left">
							<span className="text-2xl text-customGray font-normal">
								28/2/2021
							</span>
						</td>
						<td className="text-left">
							<span className="text-2xl text-primary font-bold">$300</span>
						</td>
						<td className="text-left">
							<KebabIcon fill="#999999" />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
