import { Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "@/app/globals.css";
import { RootProvider } from "@/components/providers/RootProvider";
import Script from "next/script";

const poppins = Poppins({
	subsets: ["latin"],
	display: "swap",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
});

export const metadata = {
	title: "Eldorado Smart Payment",
	description:
		"Unlocking limitless payment opportunities for Business enterprises, individuals, small businesses, emerging markets, and startups.",
	viewport: {
		width: "device-width",
		initialScale: 1,
		maximumScale: 1,
	},
};

export default async function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				id="body"
				className={` ${poppins.variable} font-poppins text-customBlackB`}>
				<Script src="/bodymovin.js" defer strategy="beforeInteractive" />
				<NextTopLoader
					color="#0F70DA"
					shadow="0 0 10px #0F70DA,0 0 5px #0F70DA"
				/>
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	);
}
