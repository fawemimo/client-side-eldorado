"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className={` bg-[#112247] w-full p-8 md:p-[5rem]`}>
			<div className="flex flex-col gap-y-8 lg:flex-row lg:items-center justify-between pb-8 border-b border-b-[#8C64A5]">
				<Image src={"/logob.svg"} width={133} height={51} alt="Gofresh Logo" />
				<nav className="flex-wrap flex items-center gap-x-16 gap-y-8">
					<Link
						href="/"
						className={`text-[1.6rem]  ${"text-white font-normal"}`}>
						Home
					</Link>
					<Link
						href="/services"
						className={`text-[1.6rem]  ${"text-white font-normal"}`}>
						Services
					</Link>
					<Link
						href="/faq"
						className={`text-[1.6rem]  ${"text-white font-normal"}`}>
						FAQs
					</Link>
					<Link
						href="/contact"
						className={`text-[1.6rem]  ${"text-white font-normal"}`}>
						Contact Us
					</Link>
					<Link href={"/privacy"} className={`text-2xl text-white`}>
						Privacy Policy
					</Link>
					<Link href={"/terms"} className={`text-2xl text-white`}>
						Terms of use
					</Link>
				</nav>
			</div>
			<div className="pt-7 flex flex-col-reverse gap-y-5 md:flex-row md:items-center justify-between">
				<span className="text-white text-xl md:text-2xl">
					Copyright &copy; 2023{" "}
					{new Date().getFullYear() !== 2023
						? `- ${new Date().getFullYear()} `
						: ""}
					Eldoradosp.com. All rights reserved
				</span>
				<div className="flex items-center gap-12">
					<Link href={"/#"} target="_blank">
						<Image
							src={"/instagram.png"}
							width={32}
							height={32}
							alt="Eldorado"
						/>
					</Link>
					<Link href={"/#"} target="_blank">
						<Image
							src={"/facebook.png"}
							width={32}
							height={32}
							alt="Eldorado"
						/>
					</Link>
					<Link href={"/#"} target="_blank">
						<Image src={"/gmail.png"} width={32} height={32} alt="Eldorado" />
					</Link>
				</div>
			</div>
		</footer>
	);
}

{
	/* <p className="text-2xl mt-5 text-white font-semibold">
	Copyright © 2023, Eldoradosp.com
</p>; */
}
