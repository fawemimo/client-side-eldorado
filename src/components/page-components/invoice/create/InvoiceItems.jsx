import React, { useState } from "react";
import PlusIcon from "@/components/shared/icons/PlusIcon";
import { ErrorMessage } from "formik";

export default function InvoiceItems({ setFieldValue, currentValue }) {
	const [numItems, setNumItems] = useState(1);

	return (
		<div className="flex flex-col gap-y-5">
			{Array.from({ length: numItems }).map((item, index) => (
				<div key={index} className="grid md:grid-cols-4 gap-5">
					<div className="flex flex-col gap-y-2">
						<label className="text-2xl">Item name</label>
						<input
							placeholder={"Item description"}
							className="rounded-lg overflow-hidden focus:border-primary transition-all duration-100 text-[1.5rem] outline-none  h-[5rem] p-5 flex items-center w-full border-[1.5px]"
							onChange={(e) => {
								const value = e.target.value;
								if (currentValue[index]) {
									const newVal = [...currentValue];
									newVal[index].name = value;
									setFieldValue("items", newVal);
								} else {
									const newVal = [...currentValue];
									newVal[index] = {
										...currentValue[index],
										name: value,
									};
									setFieldValue("items", newVal);
								}
							}}
						/>
					</div>
					<div className="flex flex-col gap-y-2">
						<label className="text-2xl">Item description</label>
						<input
							placeholder={"Item description"}
							className="rounded-lg overflow-hidden focus:border-primary transition-all duration-100 text-[1.5rem] outline-none  h-[5rem] p-5 flex items-center w-full border-[1.5px]"
							onChange={(e) => {
								const value = e.target.value;
								if (currentValue[index]) {
									const newVal = [...currentValue];
									newVal[index].description = value;
									setFieldValue("items", newVal);
								} else {
									const newVal = [...currentValue];
									newVal[index] = {
										...currentValue[index],
										description: value,
									};
									setFieldValue("items", newVal);
								}
							}}
						/>
					</div>
					<div className="flex flex-col gap-y-2">
						<label className="text-2xl">Quantity</label>
						<input
							placeholder={"Quantity"}
							label={"Quantity"}
							className="rounded-lg overflow-hidden focus:border-primary transition-all duration-100 text-[1.5rem] outline-none  h-[5rem] p-5 flex items-center w-full border-[1.5px]"
							onChange={(e) => {
								const value = e.target.value;
								if (currentValue[index]) {
									const newVal = [...currentValue];
									newVal[index].quantity = value;
									setFieldValue("items", newVal);
								} else {
									const newVal = [...currentValue];
									newVal[index] = {
										...currentValue[index],
										quantity: value,
									};
									setFieldValue("items", newVal);
								}
							}}
						/>
					</div>
					<div className="flex flex-col gap-y-2">
						<label className="text-2xl">Unit Price</label>
						<input
							placeholder={"Unit Price"}
							label={"Unit Price"}
							className="rounded-lg overflow-hidden focus:border-primary transition-all duration-100 text-[1.5rem] outline-none  h-[5rem] p-5 flex items-center w-full border-[1.5px]"
							onChange={(e) => {
								const value = e.target.value;
								if (currentValue[index]) {
									const newVal = [...currentValue];
									newVal[index].unit_price = value;
									setFieldValue("items", newVal);
								} else {
									const newVal = [...currentValue];
									newVal[index] = {
										...currentValue[index],
										unit_price: value,
									};
									setFieldValue("items", newVal);
								}
							}}
						/>
					</div>
				</div>
			))}
			<ErrorMessage
				name="items"
				component={"p"}
				className="text-2xl text-red-500"
			/>
			<button
				type="button"
				onClick={() => setNumItems((prev) => prev + 1)}
				className="w-[30%] flex items-center gap-5 text-2xl mt-6">
				<PlusIcon />
				<span>Add another item</span>
			</button>
		</div>
	);
}
