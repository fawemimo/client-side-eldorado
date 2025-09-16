import React, { useEffect } from "react";
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";
import localeEn from "air-datepicker/locale/en";
import { ErrorMessage, useFormikContext } from "formik";

export default function DueDate() {
	const { setFieldValue } = useFormikContext();

	useEffect(() => {
		new AirDatepicker("#due_date", {
			locale: localeEn,
			autoClose: true,
			dateFormat: "MMMM dd, yyyy",
			onSelect: ({ date, formattedDate }) => {
				// console.log(formattedDate, "fgf", date);
				const originalDate = new Date(formattedDate);
				const year = originalDate.getFullYear();
				const month = String(originalDate.getMonth() + 1).padStart(2, "0");
				const day = String(originalDate.getDate()).padStart(2, "0");

				const convertedDate = `${year}-${month}-${day}`;
				// console.log(convertedDate);
				setFieldValue("due_date", convertedDate);
			},
			minDate: new Date(),
		});
	}, []);

	return (
		<div className="flex flex-col gap-y-3 relative">
			<label className="text-2xl" htmlFor="due_date">
				Due Date
			</label>
			<input
				id="due_date"
				placeholder={"Select date"}
				label={"Date"}
				name={"due_date"}
				readOnly
				className="rounded-lg overflow-hidden focus:border-primary transition-all duration-100 text-[1.5rem] outline-none  h-[5rem] p-5 flex items-center w-full border-[1.5px]"
			/>
			<ErrorMessage
				component={"p"}
				className="text-2xl font-medium text-red-400 w-full"
				name={"due_date"}
			/>
		</div>
	);
}
