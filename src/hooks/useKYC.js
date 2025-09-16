import { apiInstance } from "@/service/api";

export default function useProfile() {
	const getKyc = async () => {
		apiInstance
			.get("kyc/kyc/")
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const createKyc = async (value) => {
		apiInstance
			.post("kyc/kyc/", value)
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const getKycStatus = async () => {
		apiInstance
			.get("kyc/kyc-status/")
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return { getKyc, getKycStatus, createKyc };
}
