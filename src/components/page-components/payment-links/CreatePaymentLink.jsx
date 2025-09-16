"use client";
import React from "react";
import PlusIcon from "@/components/shared/icons/PlusIcon";
import Link from "next/link";

export default function CreatePaymentLink() {
	return (
		<Link href={"/payment-links/create"} className="flex items-center gap-3">
			<PlusIcon />
			<span className="text-2xl">Create payment link</span>
		</Link>
	);
}
