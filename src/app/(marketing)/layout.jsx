import { Poppins, Montserrat } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import Script from "next/script";
import "@/app/globals.css";
import Footer from "@/components/page-components/marketing/Footer";
import Header from "@/components/page-components/marketing/Header";

const poppins = Poppins({
	subsets: ["latin"],
	display: "swap",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
});

const montserrat = Montserrat({
	subsets: ["latin"],
	display: "swap",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-montserrat",
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
				className={` ${poppins.variable} ${montserrat.variable}  font-poppins text-customBlackB`}>
				<Script src="/bodymovin.js" defer />
				<NextTopLoader
					color="#0F70DA"
					shadow="0 0 10px #0F70DA,0 0 5px #0F70DA"
				/>
				<main>
					<Header />
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
