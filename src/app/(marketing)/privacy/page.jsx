import React from "react";

export default function page() {
	return (
		<section className="bg-[#F7F7FF] pt-[90px]">
			<div className="p-16">
				<div className="flex flex-col items-center justify-center px-8 md:px-24 h-[300px] bg-[url('/contact.png')] bg-primary">
					<h1 className="text-white font-bold text-[6rem]">Privacy Policy</h1>
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
							Eldorado Smart Payment Limited (“Eldorado”, “we”, “our”, or “us”)
							is committed to protecting your privacy and safeguarding the
							personal information you share with us. This Privacy Policy
							outlines how we collect, use, store, share, and secure your data
							when you use our products, platforms, and services.
						</p>
						<p className="text-textGray text-[1.7rem] mt-2">
							By accessing or using our services, you acknowledge that you have
							read, understood, and agree to the terms of this Privacy Policy.
						</p>
					</div>

					{/* 2. Information We Collect */}
					<div className="mt-6">
						<h2 className="text-[2rem] md:text-[3rem] font-semibold text-textBlack">
							2. Information We Collect
						</h2>
						<p className="text-textGray text-[1.7rem] mb-2">
							We may collect the following categories of information when you
							interact with our services:
						</p>
						<ul className="list-disc pl-5 text-textGray text-[1.7rem]">
							<li>
								<span className="font-semibold">Personal Information:</span>{" "}
								Full name, date of birth, phone number, email address,
								residential address, BVN, NIN, and government-issued
								identification documents.
							</li>
							<li>
								<span className="font-semibold">Financial Information:</span>{" "}
								Bank account details, wallet activity, and transaction history.
							</li>
							<li>
								<span className="font-semibold">
									Device & Technical Information:
								</span>{" "}
								IP address, browser type, operating system, and unique device
								identifiers.
							</li>
							<li>
								<span className="font-semibold">Usage Information:</span> Log
								data relating to how you use our platform, including pages
								visited, transaction records, and activity timestamps.
							</li>
						</ul>
					</div>

					{/* 3. How We Use Your Information */}
					<div className="mt-6">
						<h2 className="text-[2rem] md:text-[3rem] font-semibold text-textBlack">
							3. How We Use Your Information
						</h2>
						<p className="text-textGray text-[1.7rem] mb-2">
							We process your personal information for the following purposes:
						</p>
						<ul className="list-disc pl-5 text-textGray text-[1.7rem]">
							<li>To provide, maintain, and enhance our payment services.</li>
							<li>
								To verify your identity and perform Know Your Customer (KYC)
								checks in compliance with applicable regulations.
							</li>
							<li>
								To process financial transactions and maintain accurate records.
							</li>
							<li>
								To prevent, detect, and investigate fraud, financial crimes, or
								suspicious activities.
							</li>
							<li>
								To communicate important updates, policy changes, security
								alerts, or promotional offers.
							</li>
							<li>To comply with regulatory and legal obligations.</li>
						</ul>
					</div>

					{/* 4. Sharing of Information */}
					<div className="mt-6">
						<h2 className="text-[2rem] md:text-[3rem] font-semibold text-textBlack">
							4. Sharing of Information
						</h2>
						<p className="text-textGray text-[1.7rem] mb-2">
							We may share your information strictly in accordance with legal
							and operational requirements with:
						</p>
						<ul className="list-disc pl-5 text-textGray text-[1.7rem]">
							<li>
								<span className="font-semibold">Regulatory Authorities:</span>{" "}
								Such as the Central Bank of Nigeria (CBN), Nigeria Deposit
								Insurance Corporation (NDIC), Economic and Financial Crimes
								Commission (EFCC), and the Nigeria Data Protection Commission
								(NDPC).
							</li>
							<li>
								<span className="font-semibold">Financial Partners:</span>{" "}
								Banks, payment processors, and settlement institutions that
								enable our services.
							</li>
							<li>
								<span className="font-semibold">
									Authorized Service Providers:
								</span>{" "}
								Vendors and technical partners who support secure operations.
							</li>
							<li>
								<span className="font-semibold">Law Enforcement Agencies:</span>{" "}
								Where disclosure is required for investigations into fraud,
								money laundering, or other criminal activities.
							</li>
						</ul>
						<p className="text-textGray text-[1.7rem] mt-2">
							We do not sell, rent, or trade your personal data to third parties
							for marketing purposes.
						</p>
					</div>

					{/* 5. Data Security */}
					<div className="mt-6">
						<h2 className="text-[2rem] md:text-[3rem] font-semibold text-textBlack">
							5. Data Security
						</h2>
						<p className="text-textGray text-[1.7rem] mb-2">
							We implement industry-standard security measures to protect your
							personal information, including:
						</p>
						<ul className="list-disc pl-5 text-textGray text-[1.7rem]">
							<li>
								Advanced encryption technologies for data storage and
								transactions.
							</li>
							<li>
								Multi-factor authentication methods (PIN, OTP, biometrics) for
								account access.
							</li>
							<li>
								Restricted access to sensitive information for authorized
								personnel only.
							</li>
							<li>
								Regular security audits, monitoring, and employee training on
								data protection.
							</li>
						</ul>
						<p className="text-textGray text-[1.7rem] mt-2">
							Users are also responsible for maintaining the confidentiality of
							their login credentials, passwords, and security answers.
						</p>
					</div>

					{/* 6. Data Retention */}
					<div className="mt-6">
						<h2 className="text-[2rem] md:text-[3rem] font-semibold text-textBlack">
							6. Data Retention
						</h2>
						<p className="text-textGray text-[1.7rem]">
							We retain personal information only for as long as necessary to
							fulfill the purposes outlined in this policy or as required by
							applicable laws and regulations. Once data is no longer required,
							it will be securely deleted, anonymized, or otherwise disposed of
							in a safe manner.
						</p>
					</div>

					{/* 7. Your Rights */}
					<div className="mt-6">
						<h2 className="text-[2rem] md:text-[3rem] font-semibold text-textBlack">
							7. Your Rights
						</h2>
						<p className="text-textGray text-[1.7rem] mb-2">
							As a user, you have the following rights under applicable data
							protection laws:
						</p>
						<ul className="list-disc pl-5 text-textGray text-[1.7rem]">
							<li>
								<span className="font-semibold">Right of Access:</span> To
								request and obtain a copy of your personal information.
							</li>
							<li>
								<span className="font-semibold">Right of Correction:</span> To
								request rectification of inaccurate or incomplete data.
							</li>
							<li>
								<span className="font-semibold">Right of Deletion:</span> To
								request deletion of your personal data, subject to legal and
								regulatory requirements.
							</li>
							<li>
								<span className="font-semibold">
									Right to Withdraw Consent:
								</span>{" "}
								To withdraw your consent to data processing at any time.
							</li>
							<li>
								<span className="font-semibold">
									Right to Lodge a Complaint:
								</span>{" "}
								To escalate concerns with the Nigeria Data Protection Commission
								(NDPC).
							</li>
						</ul>
					</div>

					{/* 8. Cookies & Tracking */}
					<div className="mt-6">
						<h2 className="text-[2rem] md:text-[3rem] font-semibold text-textBlack">
							8. Cookies & Tracking
						</h2>
						<p className="text-textGray text-[1.7rem]">
							Our platform may use cookies and related technologies to enhance
							user experience, analyze platform usage patterns, and provide
							secure and personalized services. You may disable or manage
							cookies through your browser settings; however, this may affect
							certain features of our services.
						</p>
					</div>

					{/* 9. Children’s Privacy */}
					<div className="mt-6">
						<h2 className="text-[2rem] md:text-[3rem] font-semibold text-textBlack">
							9. Children’s Privacy
						</h2>
						<p className="text-textGray text-[1.7rem]">
							Our services are not intended for individuals under the age of 18.
							We do not knowingly collect personal information from children. If
							we become aware that a child’s information has been collected, it
							will be promptly deleted.
						</p>
					</div>

					{/* 10. Changes to This Privacy Policy */}
					<div className="mt-6">
						<h2 className="text-[2rem] md:text-[3rem] font-semibold text-textBlack">
							10. Changes to This Privacy Policy
						</h2>
						<p className="text-textGray text-[1.7rem]">
							We may update this Privacy Policy from time to time to reflect
							changes in laws, regulations, or business practices. Updates will
							be published on our platform with the revised effective date.
							Continued use of our services constitutes acceptance of any
							changes.
						</p>
					</div>

					{/* 11. Contact Us */}
					<div className="mt-6">
						<h2 className="text-[2rem] md:text-[3rem] font-semibold text-textBlack">
							11. Contact Us
						</h2>
						<p className="text-textGray text-[1.7rem]">
							If you have questions, concerns, or complaints about this Privacy
							Policy or how your personal information is handled, please contact
							us at:
						</p>
						<p className="text-textGray text-[1.7rem] mt-2">
							Eldorado Smart Payment Limited <br />
							Suite 303, Capital Hub, Ahmadu Bello Way, Abuja, Nigeria <br />
							1-7 Muri-Okunola Street, Victoria Island, Lagos, Nigeria <br />
							Email:{" "}
							<a
								href="mailto:eldoradosmartpayment@gmail.com"
								className="text-textBlack underline">
								eldoradosmartpayment@gmail.com
							</a>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
