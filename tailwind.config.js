/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#0F70DA",
				secondary: "#007AFF",
				customBlackA: "#1D1D1D",
				customBlackB: "#2D3748",
				customGray: "#929292",
				accent: "#E8BB2E",
			},
			backgroundImage: {
				gradient:
					"linear-gradient(180deg, #5CC609 0%, #72A749 0%, #2A4F0D 100%)",
				gradientB: "linear-gradient(325deg, #000 0.74%, #0E335B 100%)",
			},
			fontFamily: {
				poppins: ["var(--font-poppins)"],
				montserrat: ["var(--font-montserrat)"],
			},
			keyframes: {
				loaderspin: {
					"100%": { transform: "rotate(360deg)" },
				},
				progress: {
					"100%": { right: "100%" },
				},
			},
			animation: {
				loaderspin: "loaderspin 0.3s linear infinite",
				progress: "progress 5s linear forwards",
			},
		},
	},
	plugins: [],
};
