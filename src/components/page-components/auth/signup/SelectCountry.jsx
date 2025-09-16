"use client";
import React from "react";
import AppSelect from "@/components/shared/forms/AppSelect";
import { useFormikContext, ErrorMessage } from "formik";
import Image from "next/image";
import { useRootState } from "@/components/providers/RootProvider";

export default function SelectCountry({
	onCountrySelect,
	selectedCountry,
	backgroundColor = "transparent",
}) {
	const [state, actions] = useRootState();
	const { countries } = state;

	console.log(countries);

	return (
		<div>
			<AppSelect
				style={{ backgroundColor }}
				name={"country"}
				label={"Country"}
				values={countries}
				renderItem={({ item }) => (
					<button
						onClick={() => onCountrySelect(item)}
						type="button"
						className="flex items-center gap-5 text-2xl p-3 hover:bg-gray-200">
						<Image src={item.flag} width={16} height={16} alt="Eldorado" />
						{item.country}
					</button>
				)}
				placeholder={"Select a country"}
				selectedItem={selectedCountry}
			/>
			<div className="mt-2">
				<ErrorMessage
					className="text-2xl text-red-500"
					name={"country"}
					component={"p"}
				/>
			</div>
		</div>
	);
}
