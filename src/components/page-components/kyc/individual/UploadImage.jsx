"use client";
import UploadIcon from "@/components/shared/icons/UploadIcon";
import React from "react";

export default function UploadImage({ title }) {
	return (
		<div className="cursor-pointer w-full h-[100px] rounded-lg bg-[#f4f4f4] border border-customGray border-dashed p-5">
			<div className="flex items-center justify-between h-full">
				<div className="max-w-[90%]">
					<p className="text-2xl font-medium mb-3">{title}</p>
					<span className="text-xl md:text-2xl text-customGray">
						On desktop, Simply drag and drop your file in this field. acceptable
						formats: JPEG, JPG or PNG.
					</span>
				</div>
				<UploadIcon />
			</div>
		</div>
	);
}
