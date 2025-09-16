"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SideMenu from "./SideMenu";
import { usePathname } from "next/navigation";

export default function Header() {
	const pathname = usePathname();

	const isHome = pathname === "/";
	const isServices = pathname === "/services";
	const isFAQ = pathname === "/faq";
	const isContact = pathname === "/contact";

	return (
		<header className="w-full h-[90px] bg-[#112247] flex items-center justify-between px-5 md:px-10 lg:px-12 xl:px-20 fixed top-0 z-[999]">
			<Link className="" href={"/"}>
				<Image
					src={"/logob.svg"}
					width={216}
					height={63}
					alt="Eldorado Smart Payment"
					priority={true}
					className="w-[150px] md:max-w-full "
				/>
			</Link>
			<nav className="hidden lg:flex items-center gap-[4rem]">
				<Link
					href="/"
					className={`text-[1.6rem]  ${
						isHome ? "text-accent font-semibold" : "text-white font-normal"
					}`}>
					Home
				</Link>
				<Link
					href="/services"
					className={`text-[1.6rem]  ${
						isServices ? "text-accent font-semibold" : "text-white font-normal"
					}`}>
					Services
				</Link>
				<Link
					href="/faq"
					className={`text-[1.6rem]  ${
						isFAQ ? "text-accent font-semibold" : "text-white font-normal"
					}`}>
					FAQs
				</Link>
				<Link
					href="/contact"
					className={`text-[1.6rem]  ${
						isContact ? "text-accent font-semibold" : "text-white font-normal"
					}`}>
					Contact Us
				</Link>
				{/* <Link
					href="/auth/signin"
					className="text-[1.6rem] font-semibold text-secondary">
					Login
				</Link>
				<Link
					href="/auth/signup"
					className="text-[1.6rem] font-semibold text-white w-[165px] h-[50px] bg-accent flex items-center justify-center rounded-lg">
					Sign up
				</Link> */}
			</nav>
			<SideMenu />
		</header>
	);
}
