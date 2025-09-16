import { Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "@/app/globals.css";
import { RootProvider } from "@/components/providers/RootProvider";
import { cookies } from "next/headers";
import { fetchCountries } from "@/requests/auth";
import {
	ACCESS_TOKEN_COOKIE_NAME,
	REFRESH_TOKEN_COOKIE_NAME,
} from "@/utils/constants";

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
	let isAuthenticated = false;
	let countries = [];

	try {
		countries = await fetchCountries();
		// make a request to verify the tokens here,if it goes well then the user is authenticated
		isAuthenticated = true;
	} catch (error) {
		isAuthenticated = false;
	}

	return (
		<html lang="en">
			<body
				id="body"
				className={` ${poppins.variable} font-poppins text-customBlackB`}>
				<NextTopLoader
					color="#0F70DA"
					shadow="0 0 10px #0F70DA,0 0 5px #0F70DA"
				/>
				<RootProvider
					defaultState={{
						countries: countries,
						accessToken: accessToken?.value || null,
						refreshToken: refreshToken?.value || null,
						isAuthenticated: isAuthenticated,
					}}>
					{children}
				</RootProvider>
			</body>
		</html>
	);
}
