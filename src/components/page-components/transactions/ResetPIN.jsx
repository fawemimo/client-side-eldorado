"use client";
import React from "react";
import useAuth from "@/hooks/useAuth";

export default function ResetPIN() {
	const { reset_pin } = useAuth();

	return (
		<button type="button" onClick={reset_pin} className="text-red-400">
			Reset your pin
		</button>
	);
}
