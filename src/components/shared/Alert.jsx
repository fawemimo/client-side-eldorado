"use client";
import Portal from "./Portal";
import React from "react";

export default function Alert({ show, type, message }) {
	return (
		<Portal>
			<div className="flex items-center justify-center fixed w-full h-48 top-[5%] z-[999999] pointer-events-none overflow-x-hidden">
				<div
					className={`shadow-md overflow-hidden md:absolute md:top-[20%] md:right-11 bg-white px-10 py-10 max-w-[85%] md:w-max shadow-3xl rounded-lg transition-all duration-500 ease-slide-in ${
						!show ? "translate-x-[1550%]" : "translate-x-[0%]"
					}`}>
					<p className="text-xl leading-[2rem] font-medium text-[#333333]">
						{message}
					</p>
					<div
						className={`absolute bottom-0 left-0 w-full overflow-hidden h-[4px] before:absolute before:bottom-0 before:right-0 ${
							type === "error" ? "before:bg-red-400" : ""
						} ${
							type === "success" ? "before:bg-green-400" : ""
						} before:w-full before:h-full ${
							show ? "before:animate-progress" : undefined
						}`}></div>
				</div>
			</div>
		</Portal>
	);
}
