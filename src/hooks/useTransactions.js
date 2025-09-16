import useAPIinstance from "./useAPIinstance";
import useAlert from "./useAlert";
import useHelpers from "./useHelpers";

export default function useTransactions() {
	const { multipartApiInstance: apiInstance } = useAPIinstance();
	const alert = useAlert();
	const { handleError } = useHelpers();

	const verifyTransferEmail = async (value) => {
		try {
			const response = await apiInstance.post("transaction/transfer/verify/", {
				email: value.email,
			});
			return response.data;
		} catch (error) {
			handleError(error);
			throw error;
		}
	};

	const p2ptransfer = async (value) => {
		try {
			const response = await apiInstance.post("transaction/transfer/", {
				amount: value.amount,
				receiver: value.email,
				pin: value.pin,
			});
			return response.data;
		} catch (error) {
			handleError(error);
			throw error;
		}
	};

	const getTransaction = async (id) => {
		apiInstance
			.get(`transaction/histories/${id}`)
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const getTransactionHistory = async () => {
		try {
			const response = await apiInstance.get("transaction/histories/");
			return response.data;
		} catch (error) {
			handleError(error);
			throw error;
		}
	};

	return {
		p2ptransfer,
		getTransaction,
		getTransactionHistory,
		verifyTransferEmail,
	};
}
