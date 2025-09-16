"use client";
import Image from "next/image";
import React from "react";

export default function Avatar({ imageSrc, alt, halfRounded, size }) {
	return (
		<div
			style={{
				width: size + "px",
				height: size + "px",
				borderRadius: halfRounded ? "10px" : "1000px",
				overflow: "hidden",
			}}>
			<Image
				src={imageSrc}
				width={size}
				height={size}
				alt={alt}
				className="w-full h-full object-cover object-top"
			/>
		</div>
	);
}
