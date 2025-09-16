import useAPIinstance from "./useAPIinstance";
import useHelpers from "./useHelpers";
import useAlert from "./useAlert";

export default function useInvoice() {
	const { multipartApiInstance: apiInstance, jsonApiInstance } =
		useAPIinstance();
	const alert = useAlert();
	const { handleError } = useHelpers();

	async function createInvoice(value) {
		try {
			const response = await jsonApiInstance.post("invoice/invoices/", value);
			alert("success", "Invoice created");
			return response.data;
		} catch (error) {
			handleError(error);
			throw error;
		}
	}

	async function getInvoices() {
		try {
			const response = await apiInstance.get("invoice/invoices/");
			return response.data;
		} catch (error) {
			console.log(error);
			handleError(error);
			throw error;
		}
	}

	return { createInvoice, getInvoices };
}
