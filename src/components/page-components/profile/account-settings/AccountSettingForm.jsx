"use client";
import React from "react";
import { Formik, Form } from "formik";
import AppInput from "@/components/shared/forms/AppInput";
import DropdownSelect from "@/components/shared/DropdownSelect/DropdownSelect";
import Chevron from "@/components/shared/icons/Chevron";
import AppButton from "@/components/shared/AppButton";

export default function AccountSettingForm() {
	return (
		<Formik
			initialValues={{
				email: "",
				first_name: "",
				last_name: "",
				phone: "",
				country: "",
				state: "",
				zip: "",
			}}>
			{() => (
				<Form className="w-full md:w-[90%] lg:w-[75%] flex flex-col gap-y-8">
					<div className="grid md:grid-cols-2 gap-5">
						<AppInput
							name="email"
							label={"First Name"}
							placeholder={"First Name"}
						/>
						<AppInput
							name="email"
							label={"Last Name"}
							placeholder={"Last Name"}
						/>
					</div>
					<div className="grid md:grid-cols-2 gap-5">
						<AppInput
							name="email"
							label={"Email"}
							placeholder={"Email Address"}
						/>
						<AppInput
							name="email"
							label={"Phone Number"}
							placeholder={"Phone Number"}
						/>
					</div>
					<div className="grid md:grid-cols-2 gap-5">
						<DropdownSelect
							items={["Nigeria", "Ghana"]}
							renderItem={({ item, index, setOpen }) => (
								<button
									onClick={() => {
										setSelectedItem(item);
										setOpen(false);
									}}
									className="text-2xl py-5 w-full text-left hover:bg-[#f4f4f4] px-6"
									key={index}>
									{item}
								</button>
							)}
							renderButton={({ open, setOpen }) => (
								<div className="flex flex-col gap-y-3">
									<p className="text-2xl text-[#2D3748]">Country</p>
									<button
										onClick={() => setOpen(!open)}
										className="flex items-center justify-between gap-5 text-2xl font-medium border-[1.5px] border-[#E6E6E6] rounded-xl px-5 h-[5rem]">
										<span>{"Nigeria"}</span>
										<span
											className={`flex transition-all duration-200 ${
												open ? "rotate-180" : "rotate-0"
											}`}>
											<Chevron />
										</span>
									</button>
								</div>
							)}
						/>
						<div className="grid md:grid-cols-2 gap-5">
							<DropdownSelect
								items={["Nigeria", "Ghana"]}
								renderItem={({ item, index, setOpen }) => (
									<button
										onClick={() => {
											setSelectedItem(item);
											setOpen(false);
										}}
										className="text-2xl py-5 w-full text-left hover:bg-[#f4f4f4] px-6"
										key={index}>
										{item}
									</button>
								)}
								renderButton={({ open, setOpen }) => (
									<div className="flex flex-col gap-y-3">
										<p className="text-2xl text-[#2D3748]">States</p>
										<button
											onClick={() => setOpen(!open)}
											className="flex items-center justify-between gap-5 text-2xl font-medium border-[1.5px] border-[#E6E6E6] rounded-xl px-5 h-[5rem]">
											<span>{"Nigeria"}</span>
											<span
												className={`flex transition-all duration-200 ${
													open ? "rotate-180" : "rotate-0"
												}`}>
												<Chevron />
											</span>
										</button>
									</div>
								)}
							/>
							<AppInput name="zip" label={"Zip Code"} />
						</div>
					</div>
					<div className="w-[50%] md:w-[30%]">
						<AppButton.WithLoader label={"Save Changes"} />
					</div>
				</Form>
			)}
		</Formik>
	);
}
