"use client";
import React, { useEffect, useState } from "react";

export default function CrossBorderTution() {
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		setLoaded(true);
		if (loaded) {
			window.bodymovin?.loadAnimation({
				container: document.getElementById("cross-border"), // the dom element that will contain the animation
				renderer: "svg",
				loop: true,
				autoplay: true,
				path: "/lotties/cross-border.json",
			});
		}
	}, [loaded]);

	return (
		<div className="flex items-center justify-center">
			<div id="cross-border" className="w-[80%] xl:w-[65%]"></div>;
		</div>
	);
}
