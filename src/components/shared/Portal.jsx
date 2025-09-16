"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Portal({ elementId = "body", children }) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return mounted
		? createPortal(children, document.getElementById(elementId))
		: null;
}
