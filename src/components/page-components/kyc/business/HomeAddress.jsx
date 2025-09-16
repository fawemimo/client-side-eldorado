import PlusIconB from "@/components/shared/icons/PlusIconB";
import Link from "next/link";
import React from "react";

export default function HomeAddress() {
	return (
		<div className="w-full bg-white rounded-xl p-5 md:p-12">
			<p className="text-3xl font-semibold">Home Address</p>
			<div className="mt-7 bg-white p-5 flex items-center gap-5 shadow-md rounded-xl">
				<input
					type="checkbox"
					className="w-[20px] h-[20px] rounded-lg accent-primary"
				/>
				<span className="text-2xl">Same as business address</span>
			</div>
			<div className="mt-12 flex flex-col gap-y-5">
				<p className="text-2xl">Proof of address</p>
				<div className="mt-7 bg-white p-5 flex items-center justify-center gap-5 shadow-md rounded-xl">
					<PlusIconB />
					<span className="text-2xl text-gray-400">Choose files</span>
				</div>
			</div>
			<div className="mt-10">
				<p className="text-2xl mb-5">
					Proof of address can be any of these documents, not more than 6 months
					old:
				</p>
				<div className="pl-5 text-2xl mb-5">
					<ul className="list-decimal">
						<li>Utility bill for services to the address.</li>
						<li>Bank statement showing current address.</li>
						<li>Tax assessment.</li>
						<li>Cable TV bill such as DSTV bill.</li>
						<li>Letter from a public authority.</li>
					</ul>
				</div>
				<Link href="#" className="text-2xl text-red-500">
					Learn more about what documents can be used as proof of address
				</Link>
			</div>
		</div>
	);
}
