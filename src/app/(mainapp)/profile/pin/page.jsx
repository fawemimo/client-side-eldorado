import ChangePinForm from "@/components/page-components/profile/pin/ChangePinForm";
import React from "react";

export default function page() {
	return (
		<>
			<div>
				<h1 className="text-[2rem] md:text-[3rem] font-bold">
					TRANSACTION PIN
				</h1>
			</div>
			<div className="w-full bg-white rounded-xl mt-10">
				<div className="p-6 border-b">
					<p className="text-2xl font-medium">CHANGE PIN</p>
				</div>
				<div className="p-6">
					<ChangePinForm />
				</div>
			</div>
		</>
	);
}
