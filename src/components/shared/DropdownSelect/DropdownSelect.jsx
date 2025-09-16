"use client";
import React, { useState, useRef } from "react";
import { useClickAway } from "ahooks";

export default function DropdownSelect({
	items,
	renderItem,
	renderButton,
	dropdownWidth,
}) {
	const [open, setOpen] = useState(false);
	const containerRef = useRef(null);

	useClickAway(() => {
		setOpen(false);
	}, containerRef);

	return (
		<div ref={containerRef} className="relative h-full">
			{renderButton({ open, setOpen })}
			<div
				style={{ width: dropdownWidth }}
				className={`absolute top-full w-[250px] max-h-[300px] overflow-auto rounded-lg bg-white shadow-lg right-0 transition-all duration-200 z-[9999] ${
					open
						? "scale-100 opacity-100 pointer-events-auto"
						: "scale-75 opacity-0 pointer-events-none"
				}`}>
				<div className="w-full flex flex-col">
					{items.map((item, index) =>
						renderItem({ item, index, setOpen, open })
					)}
				</div>
			</div>
		</div>
	);
}
