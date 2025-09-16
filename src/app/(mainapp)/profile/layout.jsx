import React from "react";

export default function layout({ children }) {
	return (
		<section className="px-5 lg:px-5 xl:px-16 py-12 w-full bg-[#F7F7FF] min-h-screen h-full flex flex-col">
			{children}
		</section>
	);
}
