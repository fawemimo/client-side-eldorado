import { NextResponse } from "next/server";
import {
	ACCESS_TOKEN_COOKIE_NAME,
	REFRESH_TOKEN_COOKIE_NAME,
} from "./utils/constants";
import { getUserDetails } from "./requests/auth";

export async function middleware(request) {
	const response = NextResponse;
	const isAuthRoute =
		request.nextUrl.pathname.startsWith("/auth") &&
		request.nextUrl.pathname !== "/auth/resetpin";

	const accessToken = request.cookies.get(ACCESS_TOKEN_COOKIE_NAME)?.value;
	const refreshToken = request.cookies.get(REFRESH_TOKEN_COOKIE_NAME)?.value;

	try {
		if (!accessToken && !refreshToken) {
			throw new Error("Unauthenticated");
		}

		// make a request to verify the tokens here,if it goes well then the user is authenticated
		const data = await getUserDetails(accessToken);

		// console.log(data);

		if (isAuthRoute) {
			return response.redirect(new URL("/dashboard", request.url));
		}
	} catch (error) {
		if (isAuthRoute) {
			return response.next();
		} else {
			return response.redirect(new URL("/auth/signin", request.url));
		}
	}

	return response.next();
}

export const config = {
	matcher: [
		"/auth/:path*",
		"/dashboard/:path*",
		"/transactions/:path*",
		"/wallet/:path*",
		"/profile/:path*",
		"/payment-links/:path*",
	],
};
