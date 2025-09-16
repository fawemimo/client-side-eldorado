"use client";
import React from "react";
import AppButton from "@/components/shared/AppButton";
import CheckIcon from "@/components/shared/icons/CheckIcon";

export default function SelectAccountType({
	setAccountType,
	accountType,
	setShowForm,
}) {
	return (
		<div className="flex flex-col w-full items-center">
			<div className="flex flex-col gap-y-8">
				<label
					className="flex items-center gap-5 cursor-pointer"
					htmlFor="individual">
					<input
						type="radio"
						id="individual"
						className="hidden"
						name="accountType"
						value={"individual"}
						onChange={(e) => {
							if (e.target.checked) {
								setAccountType(e.target.value);
							}
						}}
					/>
					<div
						className={`shrink-0 flex items-center justify-center rounded-md h-[56px] w-[32px] border-[1.5px] ${
							accountType === "individual"
								? "border-primary bg-primary"
								: "border-customGray"
						}`}>
						{accountType === "individual" && <CheckIcon />}
					</div>
					<div>
						<h6 className="text-[2rem] md:text-[2.5rem] leading-0 m-0">
							Individual
						</h6>
						<p className="m-0 text-xl font-[300] text-customBlackB">
							{`Create an account and explore our unique offerings`}
						</p>
					</div>
				</label>
				<label
					className="cursor-pointer flex items-center gap-5"
					htmlFor="business">
					<input
						type="radio"
						id="business"
						className="hidden"
						value={"business"}
						name="accountType"
						onChange={(e) => {
							if (e.target.checked) {
								setAccountType(e.target.value);
							}
						}}
					/>
					<div
						className={`shrink-0 flex items-center justify-center rounded-md h-[56px] w-[32px] border-[1.5px] ${
							accountType === "business"
								? "border-primary bg-primary"
								: "border-customGray"
						}`}>
						{accountType === "business" && <CheckIcon />}
					</div>
					<div>
						<h6 className="text-[2rem] md:text-[2.5rem] leading-0 m-0">
							Business
						</h6>
						<p className="m-0 text-xl font-[300] text-customBlackB">
							Register as a business owner to unlock our exclusive business
							features and create a business account.
						</p>
					</div>
				</label>
			</div>
			<div className="mt-10 w-full md:w-[80%]">
				<AppButton.WithLoader
					onClick={() => setShowForm(true)}
					label={"Continue"}
				/>
			</div>
		</div>
	);
}
