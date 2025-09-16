import AppFetch from "@/utils/app-fetch";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchCountries = async () => {
	const response = await AppFetch(`${BASE_URL}auth/countries/`);

	return response;
};

export const getUserDetails = async (accessToken) => {
	const response = await AppFetch(`${BASE_URL}auth/users/me/`, {
		headers: {
			Authorization: "Bearer " + accessToken,
		},
	});

	return response;
};

export const getBankList = async (accessToken) => {
	const response = await AppFetch(`${BASE_URL}funding/bank/`, {
		headers: {
			Authorization: "Bearer " + accessToken,
		},
	});

	return response;
};

export const getUserBankAccounts = async (accessToken) => {
	const response = await AppFetch(`${BASE_URL}funding/withdrawal-account/`, {
		headers: {
			Authorization: "Bearer " + accessToken,
		},
	});

	return response;
};
