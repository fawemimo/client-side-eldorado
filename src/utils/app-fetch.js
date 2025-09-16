export default async function AppFetch(url, options) {
	const response = await fetch(url, {
		...options,
		cache: "no-store",
	});

	const responseData = await response.json();

	if (!response.ok) {
		const error = new Error();
		if (response.status === 422) {
			error.message = responseData.message;
			error.errorList = responseData.errors;
			throw error;
		}

		error.message =
			responseData.detail || "An error occurred, please try again";

		throw error;
	}

	return responseData;
}
