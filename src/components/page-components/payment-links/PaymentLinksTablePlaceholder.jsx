import React from "react";

export default function PaymentLinksTablePlaceholder() {
	return (
		<table cellPadding={20} className="w-max min-w-full">
			<thead>
				<tr className="bg-[#d3d3d3] animate-pulse">
					<th className="text-left">
						<div className="flex items-center">
							<span className="flex w-[20px] text-2xl"></span>
						</div>
					</th>
					<th className="text-left">
						<span className="flex w-[200px] text-2xl"></span>
					</th>
					<th className="text-left">
						<span className="flex w-[80px] text-2xl"></span>
					</th>
					<th className="text-left">
						<span className="flex w-[80px] text-2xl"></span>
					</th>
					<th className="text-left">
						<span className="flex w-[80px] text-2xl"></span>
					</th>
					<th className="text-left">
						<span className="flex w-[80px] text-2xl"></span>
					</th>
					<th className="text-left">
						<span className="flex w-[80px] text-2xl"></span>
					</th>
				</tr>
			</thead>
			<tbody>
				{Array.from({ length: 6 }).map((item, i) => (
					<tr
						key={i}
						className="bg-white border-t-[7px] border-[#ebebeb] animate-pulse">
						<td>
							<div className="flex items-center gap-x-[16px]">
								<div className="flex flex-col gap-y-1 max-w-[20px] w-[20px]">
									<span className="w-1/2 block overflow-hidden text-ellipsis font-helvetica text-2xl font-medium h-[7px] bg-[#d3d3d3]"></span>
								</div>
							</div>
						</td>
						<td>
							<span className="flex text-2xl h-[7px] bg-[#d3d3d3]"></span>
						</td>
						<td>
							<span className="flex text-2xl h-[7px] bg-[#d3d3d3]"></span>
						</td>
						<td>
							<span className="flex text-2xl h-[7px] bg-[#d3d3d3]"></span>
						</td>
						<td>
							<span className="flex items-center justify-center text-[#00AE00] w-[80px] h-[7px] text-2xl  bg-[#d3d3d3]"></span>
						</td>
						<td>
							<span className="flex text-2xl h-[7px] bg-[#d3d3d3]"></span>
						</td>
						<td>
							<span className="flex text-2xl h-[7px] bg-[#d3d3d3]"></span>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
