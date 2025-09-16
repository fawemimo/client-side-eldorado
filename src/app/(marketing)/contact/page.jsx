import Accordion from "@/components/shared/Accordion";
import AppButton from "@/components/shared/AppButton";
import LocationIcon from "@/components/shared/icons/LocationIcon";
import Mail2 from "@/components/shared/icons/Mail2";
import MailIcon from "@/components/shared/icons/MailIcon";
import Phone2 from "@/components/shared/icons/Phone2";
import PhoneIcon from "@/components/shared/icons/PhoneIcon";
import Image from "next/image";
import React from "react";

export default function page() {
	return (
		<section className="bg-[#F7F7FF] pt-[90px]">
			<div className="p-8 md:p-16">
				<h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5.5rem] font-semibold">
					Contact us
				</h1>
			</div>
			<div className="md:mx-16 flex flex-col items-center lg:items-start lg:flex-row px-8 md:px-24 py-10 md:py-24 gap-12 bg-[url('/contact.png')] bg-primary">
				<div className="w-full md:w-[80%] lg:w-1/2">
					<div>
						<h2 className="text-[3rem] font-bold text-white">Get in touch</h2>
					</div>
					<p className="text-white text-2xl">
						Fill up the form and our team will get back to you as soon as
						possible
					</p>
					<div className="flex flex-col gap-y-7 mt-10">
						<div className="flex items-center gap-5">
							<LocationIcon />
							<span className="text-2xl text-white">Nigeria</span>
						</div>
						<div className="flex items-center gap-5">
							<PhoneIcon />
							<span className="text-2xl text-white">+23456033030305</span>
						</div>
						<div className="flex items-center gap-5">
							<MailIcon />
							<span className="text-2xl text-white">hello@eldorado.com</span>
						</div>
					</div>
				</div>
				<div className="w-full md:w-[80%] lg:w-1/2">
					<div className="p-8 bg-[#B7B7B780] rounded-xl">
						<div className="flex flex-col gap-y-7">
							<input
								type="text"
								className="h-[50px] rounded-xl bg-white border border-[#F7E99E] text-2xl p-5"
								placeholder="Name"
							/>
							<input
								type="text"
								className="h-[50px] rounded-xl bg-white border border-[#F7E99E] text-2xl p-5"
								placeholder="Email Address"
							/>

							<textarea
								className="h-[150px] resize-none rounded-xl bg-white border border-[#F7E99E] text-2xl p-5"
								placeholder="Message (Optional)"></textarea>
							<div className="flex items-center justify-center">
								<div className="w-1/2">
									<button className="rounded-full text-2xl bg-accent w-full h-[50px] flex items-center justify-center  text-white  disabled:opacity-50 disabled:cursor-not-allowed">
										Send Message
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="md:mx-16 py-12 bg-white flex items-center justify-center">
				<div className="md:w-[80%] grid xl:grid-cols-2 gap-10">
					<div className="bg-white p-6 flex flex-col md:flex-row gap-7 shadow-lg">
						<div className="shrink-0 rounded-xl w-[76px] h-[76px] bg-[#EAF6FE] flex items-center justify-center">
							<Phone2 />
						</div>
						<div>
							<p className="text-[1.8rem]">Call us now</p>
							<p className="text-2xl mt-5">
								we are available online from 9:00 AM to 5:00 PM (GMT95:45) Talk
								with us now
							</p>
							<p className="text-[2rem] md:text-[2.4rem] mt-7">+234 802-555-0126</p>
							<div className="w-1/2 mt-10">
								<button className="rounded-lg text-2xl bg-primary w-full h-[50px] flex items-center justify-center  text-white  disabled:opacity-50 disabled:cursor-not-allowed">
									Call now
								</button>
							</div>
						</div>
					</div>
					<div className="bg-white p-6 flex flex-col md:flex-row gap-7 shadow-lg">
						<div className="shrink-0 rounded-xl w-[76px] h-[76px] bg-[#EAF6FE] flex items-center justify-center">
							<Mail2 />
						</div>
						<div>
							<p className="text-[1.8rem]">Send us an email</p>

							<p className="text-[2rem] md:text-[2.4rem] mt-7">hello@eldoradosp.com</p>
							<div className="w-1/2 mt-10">
								<button className="rounded-lg text-2xl bg-accent w-full h-[50px] flex items-center justify-center  text-white  disabled:opacity-50 disabled:cursor-not-allowed">
									Email us
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
