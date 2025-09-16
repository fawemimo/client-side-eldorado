"use client";
import React, { useEffect, useState } from "react";

export default function P2PTransfers() {
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		setLoaded(true);
		if (loaded) {
			window.bodymovin?.loadAnimation({
				container: document.getElementById("p2p"), // the dom element that will contain the animation
				renderer: "svg",
				loop: true,
				autoplay: true,
				path: "/lotties/p2p.json",
			});
		}
	}, [loaded]);

	return (
		<div className="flex items-center justify-center">
			<div id="p2p" className="w-full md:w-[80%]"></div>;
		</div>
	);
}
