"use client";
import React, { useState } from "react";

export default function Accordion() {
	const [open, setOpen] = useState(false);

	return (
		<div className={`flex flex-col w-full ${open ? "h-max" : "h-[50px]"}`}>
			<div
				onClick={() => setOpen(!open)}
				className={`p-5 h-[50px]  rounded-lg flex items-center justify-between ${
					!open ? "border bg-white " : "bg-primary text-white"
				}`}>
				<p className="text-2xl">Lorem ipsum dolor sit amet.</p>
				{!open && (
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M1.125 8H14.875M8 1.125V14.875"
							stroke="#77878F"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				)}
				{open && (
					<svg
						width="16"
						height="2"
						viewBox="0 0 16 2"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M1 1H14.75"
							stroke="white"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				)}
			</div>
			<div
				className={` p-5 bg-white transition-all duration-300 overflow-hidden ${
					open ? "scale-y-100 origin-top" : "scale-y-0 origin-bottom"
				} `}>
				<span className="text-2xl">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ut ab
					fugit laborum animi at corrupti exercitationem officia quo dolorum
					inventore aut quia esse necessitatibus, numquam officiis velit
					doloribus minus! Lorem, ipsum dolor sit amet consectetur adipisicing
					elit. Amet, ad nostrum quidem repellendus soluta deserunt consectetur
					hic! Delectus sunt sit esse fuga tempore accusantium quisquam
					perferendis, velit nisi inventore quod modi veritatis vero molestias,
					incidunt tempora magnam optio quis molestiae.
				</span>
			</div>
		</div>
	);
}
