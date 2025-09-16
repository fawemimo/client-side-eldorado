import React from "react";

export default function Overlay({ onClick }) {
	return (
		<div
			onClick={onClick}
			className="w-full h-full fixed top-0 bg-[#FFFFFF80] backdrop-blur-[2.5px] z-[3]"></div>
	);
}
