import useAPIinstance from "./useAPIinstance";
import useHelpers from "./useHelpers";
import useAlert from "./useAlert";

export default function usePayments() {
	const { multipartApiInstance: apiInstance } = useAPIinstance();
	const alert = useAlert();
	const { handleError } = useHelpers();

	async function createPaymentLink(value) {
		try {
			const response = await apiInstance.post("merchant/payment-links/", value);
			alert("success", "Payment link created");
		} catch (error) {
			handleError(error);
			throw error;
		}
	}

	async function getPaymentLinks() {
		try {
			const response = await apiInstance.get("merchant/payment-links");
			return response.data;
		} catch (error) {
			handleError(error);
			throw error;
		}
	}

	return { createPaymentLink, getPaymentLinks };
}
