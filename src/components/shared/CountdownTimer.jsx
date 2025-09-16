"use client";
import { useEffect, useState } from "react";

function getTimeLeft(expiryDate) {
	const total = new Date(expiryDate) - new Date();
	const seconds = Math.floor((total / 1000) % 60);
	const minutes = Math.floor((total / 1000 / 60) % 60);
	const hours = Math.floor(total / 1000 / 60 / 60);

	return {
		total,
		hours,
		minutes,
		seconds,
	};
}

export default function CountdownTimer({ expiryDate, onExpire }) {
	const [timeLeft, setTimeLeft] = useState(getTimeLeft(expiryDate));

	useEffect(() => {
		let interval;

		if (timeLeft.total <= 0) {
			onExpire?.(); // Call onExpire if provided
			clearInterval(interval);
			return;
		}

		interval = setInterval(() => {
			const updated = getTimeLeft(expiryDate);

			if (updated.total <= 0) {
				clearInterval(interval);
				onExpire?.();

				return;
			}

			setTimeLeft(updated);
		}, 1000);

		return () => clearInterval(interval);
	}, [expiryDate]);

	const formatTime = (num) => num.toString().padStart(2, "0");

	return (
		<span className="font-semibold text-primary">
			{timeLeft.hours > 0 && `${timeLeft.hours}h:`}
			{formatTime(timeLeft.minutes)}m:
			{formatTime(timeLeft.seconds)}s
		</span>
	);
}
