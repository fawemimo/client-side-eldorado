"use client";
import React, { useEffect, useState } from "react";
import Portal from "../Portal";
import { motion } from "framer-motion";
import HamburgerMenu from "../icons/HamburgerMenu";
import DashboardSidebar from "../dashboards/DashboardSidebar";

export default function HamburgerMenuContent() {
	const [open, setOpen] = useState(false);

	const variants = {
		open: {
			translateX: 0,
		},
		close: {
			translateX: 2000,
		},
	};

	useEffect(() => {
		if (open) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [open]);

	return (
		<>
			<button onClick={() => setOpen(!open)}>
				<HamburgerMenu />
			</button>
			<Portal elementId={"body"}>
				{open && (
					<>
						<div
							onClick={() => setOpen(!open)}
							style={{ pointerEvents: open ? "auto" : "none" }}
							className="w-full h-full fixed top-0 bg-[#007EFF70] z-[3] xl:hidden"></div>
					</>
				)}

				<motion.div
					animate={open ? "open" : "close"}
					initial="close"
					variants={variants}
					transition={{ type: "spring", bounce: 0.15, duration: 0.5, delay: 0 }}
					className="fixed top-0 right-0 w-full md:w-[350px] min-h-screen h-full bg-white z-[9999] overflow-auto xl:hidden border-r-[1.5px] border-r-secondary">
					<DashboardSidebar
						showCloseButton={true}
						onClose={() => setOpen(false)}
					/>
				</motion.div>
			</Portal>
		</>
	);
}
