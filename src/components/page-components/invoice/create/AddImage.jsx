"use client";
import React, { useState } from "react";
import ImageIcon from "@/components/shared/icons/ImageIcon";
import useHelpers from "@/hooks/useHelpers";
import Image from "next/image";

export default function AddImage({ setSelectedImage, selectedImage }) {
	const { selectImage } = useHelpers();

	return (
		<label
			htmlFor="image-upload"
			className="flex flex-col gap-y-2 cursor-pointer h-full">
			<input
				type="file"
				name="image-upload"
				id="image-upload"
				className="hidden"
				onChange={(e) => {
					const image = selectImage(e);
					setSelectedImage(image);
					e.target.value = "";
				}}
			/>
			<span className="text-[1.5rem]">Image</span>
			<div className="h-full border bg-white p-5 rounded-lg flex flex-col items-center justify-center">
				{!selectedImage && (
					<>
						<ImageIcon />
						<p className="text-primary text-[1.5rem]">
							Drop Image here or click to upload
						</p>
					</>
				)}
				{selectedImage && (
					<Image
						src={selectedImage}
						width={120}
						height={120}
						className="w-[100px] h-[100px]"
						alt="Eldorado"
					/>
				)}
			</div>
		</label>
	);
}
