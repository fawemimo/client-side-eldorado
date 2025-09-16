"use client";
import React, { useState } from "react";
import SelectAccountType from "./SelectAccountType";
import BusinessAccountForm from "./BusinessAccountForm";
import IndividualAccountForm from "./IndividualAccountForm";

export default function Signup() {
	const [accountType, setAccountType] = useState("individual");
	const [showForm, setShowForm] = useState(false);

	return (
		<>
			<div className="lg:mt-8">
				<h1 className="text-[3rem] md:text-[3.5rem] font-semibold text-customBlackA text-center lg:text-start">
					Create an account
				</h1>
				<div>
					<p className="text-[1.6rem] text-customBlackB  text-center lg:text-start">
						{showForm &&
							"Expanding payment possibilities for businesses, individuals, developing markets, and startups."}
					</p>
					{showForm && (
						<button
							onClick={() => setShowForm(false)}
							className="mt-7 flex items-center justify-center w-[100px] h-[30px] rounded-lg border border-primary hover:bg-[#eaeaea]  text-2xl">
							Go back
						</button>
					)}
				</div>
			</div>
			<div className="mt-10 md:mt-16">
				{!showForm && (
					<SelectAccountType
						setAccountType={setAccountType}
						accountType={accountType}
						setShowForm={setShowForm}
					/>
				)}

				{accountType === "business" && showForm && <BusinessAccountForm />}

				{accountType === "individual" && showForm && <IndividualAccountForm />}
			</div>
		</>
	);
}
