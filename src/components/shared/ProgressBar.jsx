import React from "react";

export default function ProgressBar() {
	return (
		<div className="w-full h-[8px] rounded-full bg-gray-300 flex items-center mt-5 overflow-hidden">
			<div className="bg-primary w-[60%] h-full"></div>
		</div>
	);
}
