"use client";

import React from "react";
import { motion } from "framer-motion";
import Overlay from "./Overlay";

export default function Modal({
	width,
	height,
	minHeight,
	maxHeight,
	bgColor,
	additionalStyles,
	children,
	overlayClickHandler = () => null,
}) {
	return (
		<>
			<Overlay onClick={overlayClickHandler} />
			<motion.div
				initial={{ scale: 0.7, opacity: 0.5 }}
				animate={{ scale: 1, opacity: 1 }}
				exit={{ scale: 0.7, opacity: 0 }}
				style={{
					width,
					height,
					backgroundColor: bgColor,
					minHeight,
					maxHeight,
					...additionalStyles,
				}}
				className="fixed top-0 bottom-0 left-0 right-0 m-auto  z-[5] rounded-[24px]">
				{children}
			</motion.div>
		</>
	);
}
