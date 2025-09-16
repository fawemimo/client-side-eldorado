import CameraIcon from "@/components/shared/icons/CameraIcon";
import React from "react";

export default function ImageVerification() {
	return (
		<div className="w-full h-full">
			<div>
				<p className="text-2xl mb-5">Image Verification</p>
			</div>
			<div className="cursor-pointer w-full h-full rounded-lg bg-[#f4f4f4] border border-customGray border-dashed p-5">
				<div className="flex items-center justify-center h-full">
					<CameraIcon />
				</div>
			</div>
		</div>
	);
}
