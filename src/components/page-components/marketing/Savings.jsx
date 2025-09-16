"use client";
import React, { useEffect, useState } from "react";

export default function Savings() {
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		setLoaded(true);
		if (loaded) {
			window.bodymovin?.loadAnimation({
				container: document.getElementById("savings"), // the dom element that will contain the animation
				renderer: "svg",
				loop: true,
				autoplay: true,
				path: "/lotties/savings.json",
			});
		}
	}, [loaded]);

	return (
		<div className="flex items-center justify-center">
			<div id="savings" className="w-full md:w-[80%] mb-12 md:mb-0"></div>;
		</div>
	);
}
