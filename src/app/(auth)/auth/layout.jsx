import LeftSectionSlider from "@/components/page-components/auth/LeftSectionSlider";
import React from "react";

export default function layout({ children }) {
	return (
		<main className="w-full grid lg:grid-cols-2 min-h-screen">
			<section className="lg:bg-primary w-full">
				<LeftSectionSlider />
			</section>
			<section>{children}</section>
		</main>
	);
}
