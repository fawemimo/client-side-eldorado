import { WalletContext } from "@/components/providers/WalletProvider";
import { useContext } from "react";
import useAPIinstance from "./useAPIinstance";
import useHelpers from "./useHelpers";
import useAlert from "./useAlert";

export default function useWallet() {
	const { multipartApiInstance: apiInstance } = useAPIinstance();
	const alert = useAlert();
	const { handleError } = useHelpers();
	const [state, actions] = useContext(WalletContext);
	const isFunding = state.activity === "Fund Wallet";
	const isWithdrawing = state.activity === "Withdraw";
	const fundingByTransfer = state.fundOption === "Bank Transfer";
	const fundingByCard = state.fundOption === "Card";

	const generateAccountNumber = async (value) => {
		try {
			const response = await apiInstance.post(
				"funding/generate-bank-details/",
				{
					amount: value.amount,
				}
			);
			alert("success", response.data.message);
			console.log(response.data.message, response.data);
			return response.data.data;
		} catch (error) {
			handleError(error);
			throw error;
		}
	};

	const generateInvoicePaymentAccountNumber = async (invoice_id) => {
		try {
			const response = await apiInstance.post(
				`funding/generate-bank-details/invoice-payments/?invoice-id=${invoice_id}`
			);
			alert("success", response.data.message);
			console.log(response.data.message, response.data);
			return response.data.data;
		} catch (error) {
			// handleError(error);
			throw error;
		}
	};

	const withdraw = async (value) => {
		try {
			const response = await apiInstance.post("funding/withdraw/", {
				amount: value.amount,
				withdrawal_account_id: value.withdrawal_account_id,
				pin: value.pin,
			});
			return response.data;
		} catch (error) {
			handleError(error);
			throw error;
		}
	};

	const getwithdrawhistory = async () => {
		apiInstance
			.get("funding/withdraw")
			.then((response) => {
				console.log(response.data.results);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const getfundhistory = async () => {
		apiInstance
			.get("funding/funding")
			.then((response) => {
				console.log(response.data.results);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const addWithdrawalBankAccount = async (value) => {
		try {
			const response = await apiInstance.post("funding/withdrawal-account/", {
				account_name: value.account_name,
				account_number: value.account_number,
				bank_code: String(value.bank),
			});
			alert("success", "Bank account added");
			return response.data;
		} catch (error) {
			handleError(error);
			throw error;
		}
	};

	const deleteWithdrawalBankAccount = async (account_id) => {
		try {
			const response = await apiInstance.delete(
				"funding/withdrawal-account/" + account_id + "/"
			);
			alert("success", "Bank account deleted");
			return response.data;
		} catch (error) {
			handleError(error);
			throw error;
		}
	};

	return {
		state,
		actions,
		isFunding,
		isWithdrawing,
		fundingByTransfer,
		fundingByCard,
		generateAccountNumber,
		withdraw,
		getwithdrawhistory,
		getfundhistory,
		addWithdrawalBankAccount,
		deleteWithdrawalBankAccount,
		generateInvoicePaymentAccountNumber,
	};
}
