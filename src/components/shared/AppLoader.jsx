import React from "react";

export default function AppLoader({
	width = "5rem",
	height = "5rem",
	border = "0.5rem",
}) {
	return (
		<div
			style={{ width, height, borderWidth: border }}
			className="rounded-full  border-accent2 border-t-primary   animate-loaderspin"></div>
	);
}
