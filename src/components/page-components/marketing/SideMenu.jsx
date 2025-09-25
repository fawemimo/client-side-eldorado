"use client";

import React, { useState } from "react";
import HamburgerMenu from "@/components/shared/icons/HamburgerMenu";
import Portal from "@/components/shared/Portal";
import Xicon from "@/components/shared/icons/XIcon";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const itemVariants = {
	open: {
		opacity: 1,
		y: 0,
		transition: { type: "spring", stiffness: 300, damping: 24 },
	},
	closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function SideMenu() {
	const [open, setOpen] = useState(false);

	const pathname = usePathname();

	const isHome = pathname === "/";
	const isServices = pathname === "/services";
	const isFAQ = pathname === "/faq";
	const isContact = pathname === "/contact";

	return (
		<>
			<button onClick={() => setOpen(!open)} className="lg:hidden">
				{!open && <HamburgerMenu fill="white" />}
				{open && <Xicon />}
			</button>
			<Portal>
				<motion.div
					initial={false}
					animate={open ? "open" : "closed"}
					variants={{
						open: {
							scale: 1,
							opacity: 1,
						},
						closed: {
							scale: 0.5,
							opacity: 0,
						},
					}}
					style={{ pointerEvents: open ? "auto" : "none" }}
					className="fixed top-[9rem] w-full h-screen bg-[#112247] z-[999999] lg:hidden">
					<div className="py-12 px-8">
						<motion.nav
							variants={{
								open: {
									transition: {
										type: "spring",
										bounce: 0,
										duration: 0.7,
										staggerChildren: 0.05,
										delayChildren: 0.3,
									},
								},
								closed: {
									transition: {
										type: "spring",
										bounce: 0,
										duration: 0.3,
									},
								},
							}}
							className="flex flex-col  gap-y-7 gap-14 md:gap-x-24 flex-wrap">
							<motion.li
								className="list-none"
								onClick={() => setOpen(false)}
								variants={itemVariants}>
								<Link
									className={`text-[3.5rem] font-bold ${
										isHome ? "text-accent" : "text-white"
									}`}
									href={"/"}>
									Home
								</Link>
							</motion.li>
							<motion.li
								className="list-none"
								onClick={() => setOpen(false)}
								variants={itemVariants}>
								<Link
									className={`text-[3.5rem] font-bold ${
										isFAQ ? "text-accent" : "text-white"
									}`}
									href={"/faq"}>
									FAQs
								</Link>
							</motion.li>
							<motion.li
								className="list-none"
								onClick={() => setOpen(false)}
								variants={itemVariants}>
								<Link
									className={`text-[3.5rem] font-bold ${
										isContact ? "text-accent" : "text-white"
									}`}
									href={"/contact"}>
									Contact us
								</Link>
							</motion.li>
						</motion.nav>
					</div>
				</motion.div>
			</Portal>
		</>
	);
}
