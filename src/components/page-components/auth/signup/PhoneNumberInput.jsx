"use client";
import React from "react";
import AppSelect from "@/components/shared/forms/AppSelect";
import { useFormikContext, ErrorMessage } from "formik";
import Image from "next/image";
import { useRootState } from "@/components/providers/RootProvider";

export default function PhoneNumberInput({
	setCountryCode,
	selectedCountryCode,
	setPhoneNumber,
	backgroundColor,
}) {
	const [state, actions] = useRootState();
	const { countries } = state;

	return (
		<div>
			<AppSelect
				style={{ backgroundColor }}
				name={"phone_number"}
				label={"Phone Number"}
				type="phone"
				values={countries}
				renderItem={({ item }) => (
					<button
						onClick={() => setCountryCode(item.dialing_code)}
						className="flex items-center gap-5 text-2xl p-3 hover:bg-gray-200">
						<Image src={item.flag} width={16} height={16} alt="Eldorado" />
						{item.dialing_code} - {item.country}
					</button>
				)}
				placeholder={"Phone Number"}
				selectedItem={selectedCountryCode}
				asInput={true}
				onChange={setPhoneNumber}
			/>
			<div className="mt-2">
				<ErrorMessage
					className="text-2xl text-red-500"
					name={"phone_number"}
					component={"p"}
				/>
			</div>
		</div>
	);
}
