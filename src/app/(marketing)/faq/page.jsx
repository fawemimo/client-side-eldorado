import Accordion from "@/components/shared/Accordion";
import AppButton from "@/components/shared/AppButton";
import Image from "next/image";
import React from "react";

export default function page() {
	return (
		<section className="bg-[#F7F7FF] pt-[90px]">
			<div className="p-8 md:p-16">
				<h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5.5rem] font-semibold">
					FAQs
				</h1>
				<h2 className="text-[3rem]">Frequently Asked Questions</h2>
			</div>
			<div className="flex flex-col items-center lg:items-start lg:flex-row px-8 md:px-24 py-10 md:py-24 gap-12">
				<div className="w-full md:w-[80%] lg:w-1/2">
					<div className="flex flex-col gap-y-7 mt-12">
						<Accordion
							title={"How do I create an account?"}
							description={
								"You can sign up directly through our website or mobile app by providing your basic details and completing a quick verification process."
							}
						/>
						<Accordion
							title={"Is my money safe on the platform?"}
							description={
								"Yes. We use industry-standard encryption and security protocols to ensure that your funds and personal information remain protected at all times."
							}
						/>
						<Accordion
							title={"How do I create an account?"}
							description={
								"You can sign up directly through our website or mobile app by providing your basic details and completing a quick verification process."
							}
						/>
						<Accordion
							title={"How do I create an account?"}
							description={
								"You can sign up directly through our website or mobile app by providing your basic details and completing a quick verification process."
							}
						/>
					</div>
				</div>
				<div className="w-full md:w-[80%] lg:w-1/2">
					<div className="p-8 bg-[#FBF4CE]">
						<p className="text-[2rem] font-medium mb-10">
							Don’t find your answer, Ask for support.
						</p>
						<div className="flex flex-col gap-y-7">
							<input
								type="text"
								className="h-[50px] rounded-xl bg-white border border-[#F7E99E] text-2xl p-5"
								placeholder="Email Address"
							/>
							<input
								type="text"
								className="h-[50px] rounded-xl bg-white border border-[#F7E99E] text-2xl p-5"
								placeholder="Subject"
							/>
							<textarea
								className="h-[150px] resize-none rounded-xl bg-white border border-[#F7E99E] text-2xl p-5"
								placeholder="Message (Optional)"></textarea>
							<div className="w-1/2">
								<button className="text-2xl bg-primary w-full h-[50px] flex items-center justify-center rounded-lg text-white  disabled:opacity-50 disabled:cursor-not-allowed">
									Send Message
								</button>
							</div>
						</div>
					</div>
					<div className="mt-10">
						<button className="text-2xl bg-primary w-full h-[50px] flex items-center justify-center rounded-lg text-white  disabled:opacity-50 disabled:cursor-not-allowed">
							Go to support page
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
