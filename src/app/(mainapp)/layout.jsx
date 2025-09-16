import { Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "../globals.css";
import { RootProvider } from "@/components/providers/RootProvider";
import { cookies } from "next/headers";
import {
	ACCESS_TOKEN_COOKIE_NAME,
	REFRESH_TOKEN_COOKIE_NAME,
} from "@/utils/constants";
import DashboardSidebar from "@/components/shared/dashboards/DashboardSidebar";
import DashboardHeader from "@/components/shared/dashboards/DashboardHeader";
import {
	getUserDetails,
	fetchCountries,
	getBankList,
	getUserBankAccounts,
} from "@/requests/auth";
import KYCBanner from "@/components/shared/KYCBanner";
import SetPin from "@/components/shared/SetPin";
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
	const accessToken = cookies().get(ACCESS_TOKEN_COOKIE_NAME);
	const refreshToken = cookies().get(REFRESH_TOKEN_COOKIE_NAME);

	let userDetails = null;
	let isAuthenticated = false;
	let countries = [];
	let banks = [];
	let currentUserBankAccounts = [];

	try {
		// make a request with tokens here,if it goes well then the user is authenticated
		countries = await fetchCountries(accessToken.value);
		banks = await getBankList(accessToken.value);
		currentUserBankAccounts = await getUserBankAccounts(accessToken.value);
		const response = await getUserDetails(accessToken.value); // get the user details with the access token

		userDetails = response;
		isAuthenticated = true;
		banks = banks.results;
		currentUserBankAccounts = currentUserBankAccounts.results;
	} catch (error) {
		console.log(error.message, "error:init");
		isAuthenticated = false;
	}

	// console.log(countries);

	return (
		<html lang="en">
			<body
				id="body"
				className={`${poppins.variable} font-poppins  text-customBlackB`}>
				<Script src="/bodymovin.js" defer strategy="beforeInteractive" />
				<NextTopLoader
					color="#0F70DA"
					shadow="0 0 10px #0F70DA,0 0 5px #0F70DA"
				/>
				<RootProvider
					defaultState={{
						countries: countries,
						accessToken: accessToken.value,
						refreshToken: refreshToken.value,
						isAuthenticated: isAuthenticated,
						userDetails: userDetails,
						banks: banks,
						userBanks: currentUserBankAccounts,
					}}>
					<main className="flex relative min-h-screen">
						{<SetPin />}

						<aside className="hidden xl:block w-[20%] bg-white border-r border-r-[#E6E6E6] h-screen sticky overflow-auto top-[0]">
							<DashboardSidebar />
						</aside>

						<section className="w-full xl:w-[80%]">
							<DashboardHeader />
							{!userDetails?.has_kyc && <KYCBanner />}
							{children}
						</section>
					</main>
				</RootProvider>
			</body>
		</html>
	);
}
