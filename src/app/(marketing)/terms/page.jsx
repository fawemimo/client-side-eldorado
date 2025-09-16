import React from "react";

export default function page() {
	return (
		<section className="bg-[#F7F7FF] pt-[90px]">
			<div className="p-5 md:p-16">
				<div className="flex flex-col items-center justify-center px-8 md:px-24 h-[300px] bg-[url('/contact.png')] bg-primary">
					<h1 className="text-white font-bold text-[3rem] md:text-[6rem]">
						Terms & Conditions
					</h1>
					<span className="text-white text-3xl">
						Effective Date: 4th, September 2025
					</span>
				</div>
			</div>
			<div className="pb-10 flex flex-col items-center">
				<div className="w-[95%] md:w-[70%] xl:w-[70%] flex flex-col gap-y-5">
					{/* 1. Introduction */}
					<div className="">
						<h2 className="text-[2rem] md:text-[3rem] font-semibold text-textBlack">
							1. Introduction
						</h2>
						<p className="text-textGray text-[1.7rem]">
							Welcome to Eldorado Smart Payment Limited (“Eldorado”, “we”,
							“our”, or “us”). These Terms &amp; Conditions (“Terms”) govern
							your access to and use of our payment platform, mobile
							applications, wallets, and related financial technology solutions
							(collectively, the “Services”).
						</p>
						<p className="text-textGray text-[1.7rem] mt-2">
							By creating an account, accessing, or using our Services, you
							confirm that you have read, understood, and accepted these Terms.
							These Terms form a legally binding agreement in line with the CBN
							Guidelines for Payment Service Providers in Nigeria.
						</p>
					</div>

					{/* 2. Eligibility & KYC Compliance */}
					<div className="mt-6">
						<h2 className="text-[2rem] md:text-[3rem] font-semibold text-textBlack">
							2. Eligibility &amp; KYC Compliance
						</h2>
						<p className="text-textGray text-[1.7rem] mb-2">
							You must be 18 years or older and legally capable of entering into
							contracts under Nigerian law.
						</p>
						<p className="text-textGray text-[1.7rem] mb-2">
							In compliance with Know Your Customer (KYC) requirements set by
							the CBN and NDIC, all users must provide accurate, complete, and
							verifiable information, including BVN, NIN, and valid
							identification documents.
						</p>
						<p className="text-textGray text-[1.7rem] mb-2">
							We reserve the right to suspend or terminate accounts that fail
							verification or are linked to suspicious activity. Accounts may
							also be restricted where required by the CBN AML/CFT Regulations,
							or directives from EFCC, NIBSS, or other regulators.
						</p>
					</div>

					{/* 3. Scope of Services */}
					<div className="mt-6">
						<h2 className="text-[2rem] md:text-[3rem] font-semibold text-textBlack">
							3. Scope of Services
						</h2>
						<p className="text-textGray text-[1.7rem] mb-2">
							Eldorado Smart Payment provides services under CBN approval,
							including:
						</p>
						<ul className="list-disc pl-5 text-textGray text-[1.7rem]">
							<li>
								Electronic Payment Processing (for individuals and businesses).
							</li>
							<li>
								Wallet Services (storing, transferring, and withdrawing funds).
							</li>
							<li>
								Merchant Payment Solutions (POS, API integrations, online
								checkout).
							</li>
							<li>Bill Payments (utilities, airtime, subscriptions).</li>
							<li>
								Cross-Platform Transfers in compliance with CBN Interoperability
								Guidelines.
							</li>
						</ul>
						<p className="text-textGray text-[1.7rem] mt-2">
							We may introduce additional services subject to regulatory
							approval.
						</p>
					</div>

					{/* 4. User Responsibilities */}
					<div className="mt-6">
						<h2 className="text-[2rem] md:text-[3rem] font-semibold text-textBlack">
							4. User Responsibilities
						</h2>
						<ul className="list-disc pl-5 text-textGray text-[1.7rem]">
							<li>
								Maintain the confidentiality of your login credentials and PINs.
							</li>
							<li>
								Use the Services only for lawful transactions in line with CBN’s
								Consumer Protection Framework.
							</li>
							<li>
								Avoid engaging in fraud, money laundering, or terrorism
								financing.
							</li>
							<li>
								Update personal data promptly when requested for regulatory
								compliance.
							</li>
							<li>
								Notify us immediately of suspicious or unauthorized account
								activity.
							</li>
						</ul>
					</div>

					{/* 5. Fees & Charges */}
					<div className="mt-6">
						<h2 className="text-[2rem] md:text-[3rem] font-semibold text-textBlack">
							5. Fees &amp; Charges
						</h2>
						<ul className="list-disc pl-5 text-textGray text-[1.7rem]">
							<li>
								Transaction and service fees shall be applied in line with the
								CBN Guide to Bank Charges.
							</li>
							<li>Fees will be disclosed before transactions are processed.</li>
							<li>
								Eldorado reserves the right to review fees periodically in
								compliance with regulatory directives.
							</li>
						</ul>
					</div>

					{/* 6. Security & Data Privacy */}
					<div className="mt-6">
						<h2 className="text-[2rem] md:text-[3rem] font-semibold text-textBlack">
							6. Security &amp; Data Privacy
						</h2>
						<p className="text-textGray text-[1.7rem] mb-2">
							Eldorado adopts industry-standard encryption and multi-factor
							authentication in line with CBN’s Risk-Based Cybersecurity
							Framework.
						</p>
						<p className="text-textGray text-[1.7rem] mb-2">
							Users’ data will be collected, stored, and processed in compliance
							with the Nigeria Data Protection Regulation (NDPR).
						</p>
						<p className="text-textGray text-[1.7rem] mb-2">
							We will never request OTPs, PINs, or passwords through unofficial
							channels. Users remain responsible for protecting their devices
							and login details.
						</p>
					</div>

					{/* 7. Prohibited Use */}
					<div className="mt-6">
						<h2 className="text-[2rem] md:text-[3rem] font-semibold text-textBlack">
							7. Prohibited Use
						</h2>
						<p className="text-textGray text-[1.7rem] mb-2">
							You may not use our Services for:
						</p>
						<ul className="list-disc pl-5 text-textGray text-[1.7rem]">
							<li>
								Money laundering, terrorism financing, or other illegal
								financial activities (per CBN AML/CFT Guidelines).
							</li>
							<li>Fraudulent or deceptive practices.</li>
							<li>Transactions violating local or international sanctions.</li>
							<li>Unauthorized third-party access to accounts.</li>
						</ul>
						<p className="text-textGray text-[1.7rem] mt-2">
							Violations may be reported to the CBN, EFCC, NFIU, and other
							authorities.
						</p>
					</div>

					{/* 8. Limitation of Liability */}
					<div className="mt-6">
						<h2 className="text-[2rem] md:text-[3rem] font-semibold text-textBlack">
							8. Limitation of Liability
						</h2>
						<ul className="list-disc pl-5 text-textGray text-[1.7rem]">
							<li>
								Eldorado shall not be liable for indirect or consequential
								damages resulting from system downtime, network failures, or
								third-party service interruptions.
							</li>
							<li>
								Our maximum liability is limited to the value of the disputed
								transaction, in line with CBN’s Consumer Protection Guidelines.
							</li>
							<li>
								Users acknowledge that while we maintain security standards, no
								online platform is immune to risks.
							</li>
						</ul>
					</div>

					{/* 9. Account Suspension & Termination */}
					<div className="mt-6">
						<h2 className="text-[2rem] md:text-[3rem] font-semibold text-textBlack">
							9. Account Suspension &amp; Termination
						</h2>
						<ul className="list-disc pl-5 text-textGray text-[1.7rem]">
							<li>
								Accounts may be suspended or closed if linked to fraud,
								non-compliance with these Terms, or by directive from regulators
								(e.g., CBN, EFCC, NDIC).
							</li>
							<li>
								Users may voluntarily close accounts by submitting a written
								request, subject to the clearance of all pending obligations.
							</li>
							<li>
								Funds in suspended accounts will remain secured until
								resolution.
							</li>
						</ul>
					</div>

					{/* 10. Dispute Resolution */}
					<div className="mt-6">
						<h2 className="text-[2rem] md:text-[3rem] font-semibold text-textBlack">
							10. Dispute Resolution
						</h2>
						<ul className="list-disc pl-5 text-textGray text-[1.7rem]">
							<li>
								Complaints must first be lodged with Eldorado’s Customer Support
								Unit.
							</li>
							<li>
								If unresolved within 30 business days, complaints may be
								escalated to the CBN Consumer Protection Department (CPD).
							</li>
							<li>
								Unresolved disputes may be referred to arbitration or Nigerian
								courts as a last resort.
							</li>
						</ul>
					</div>

					{/* 11. Regulatory Compliance */}
					<div className="mt-6">
						<h2 className="text-[2rem] md:text-[3rem] font-semibold text-textBlack">
							11. Regulatory Compliance
						</h2>
						<p className="text-textGray text-[1.7rem] mb-2">
							Eldorado Smart Payment operates under approval and supervision of
							the Central Bank of Nigeria (CBN).
						</p>
						<p className="text-textGray text-[1.7rem] mb-2">
							We comply with all relevant regulations, including:
						</p>
						<ul className="list-disc pl-5 text-textGray text-[1.7rem]">
							<li>CBN Guidelines for Payment Service Providers.</li>
							<li>AML/CFT Regulations (2013, revised 2022).</li>
							<li>NDPR (2019) for data protection.</li>
							<li>NIBSS industry fraud alerts and circulars.</li>
						</ul>
						<p className="text-textGray text-[1.7rem] mt-2">
							Users agree to cooperate with Eldorado in fulfilling regulatory
							obligations, including transaction monitoring and reporting.
						</p>
					</div>

					{/* 12. Amendments to Terms */}
					<div className="mt-6">
						<h2 className="text-[2rem] md:text-[3rem] font-semibold text-textBlack">
							12. Amendments to Terms
						</h2>
						<p className="text-textGray text-[1.7rem]">
							Eldorado reserves the right to amend these Terms to reflect
							changes in laws, regulations, or CBN directives. Updates will be
							published on our platform and take effect immediately upon
							posting. Continued use of the Services constitutes acceptance of
							revised Terms.
						</p>
					</div>

					{/* 13. Governing Law */}
					<div className="mt-6">
						<h2 className="text-[2rem] md:text-[3rem] font-semibold text-textBlack">
							13. Governing Law
						</h2>
						<p className="text-textGray text-[1.7rem]">
							These Terms are governed by the laws of the Federal Republic of
							Nigeria, with jurisdiction vested in Nigerian courts.
						</p>
					</div>

					{/* 14. Contact Information */}
					<div className="mt-6">
						<h2 className="text-[2rem] md:text-[3rem] font-semibold text-textBlack">
							14. Contact Information
						</h2>
						<p className="text-textGray text-[1.7rem] mb-2">
							For enquiries or regulatory complaints, contact:
						</p>
						<p className="text-textGray text-[1.7rem] mt-2">
							Eldorado Smart Payment Limited <br />
							Suite 303, Capital Hub, Ahmadu Bello Way, Abuja, Nigeria / 1-7
							Muri-Okunola Street, Victoria Island Lagos Nigeria. <br />
							📧 Email:{" "}
							<a
								href="mailto:eldoradosmartpayment@gmail.com"
								className="text-textBlack underline">
								eldoradosmartpayment@gmail.com
							</a>{" "}
							<br />
							📞 Customer Support: +234 8131 44 4430
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
