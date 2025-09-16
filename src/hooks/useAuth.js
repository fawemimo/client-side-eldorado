import useCredentials from "./useCredentials";
import { useRootState } from "@/components/providers/RootProvider";
import useAlert from "./useAlert";
import useHelpers from "./useHelpers";
import useAPIinstance from "./useAPIinstance";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function useAuth() {
	const alert = useAlert();
	const { handleError } = useHelpers();
	const { multipartApiInstance: apiInstance } = useAPIinstance();
	const { setCredentials, clearAllCredentials } = useCredentials();
	const [rootState, rootActions] = useRootState();
	const accessToken = rootState.accessToken;
	const refreshToken = rootState.refreshToken;
	const isAuthenticated = rootState.isAuthenticated;

	const login = async function ({ email, password }) {
		try {
			const response = await axios.post(`${BASE_URL}auth/jwt/create/`, {
				email,
				password,
			});

			console.log(response, "ddd");

			const { access, refresh } = response.data;

			setCredentials({ accessToken: access, refreshToken: refresh });
			rootActions.setCredentials({
				accessToken: access,
				refreshToken: refresh,
			});
			rootActions.isAuthenticated(true);

			alert("success", "Logged in successfully");

			return response;
		} catch (error) {
			// Handle error
			console.log(error);
			handleError(error);
			console.log("Login error:", error);
			throw error; // Re-throw the error to propagate it to the caller
		}
	};

	const signup = async function ({
		first_name,
		last_name,
		email,
		password,
		re_password,
		phone_number,
	}) {
		try {
			const response = await axios.post(`${BASE_URL}auth/users/`, {
				first_name,
				last_name,
				email,
				password,
				re_password,
				phone_number,
			});

			alert("success", "Signed up successfully");

			console.log(response);

			return response;
		} catch (error) {
			handleError(error);

			throw error;
		}
	};

	const logout = function () {
		clearAllCredentials();
		rootActions.setCredentials({ accessToken: null, refreshToken: null });
		rootActions.isAuthenticated(false);
	};

	const forgot_password = async function ({ email }) {
		try {
			const response = await axios.post(
				`${BASE_URL}auth/users/reset_password/`,
				{ email }
			);

			alert("success", "Email sent");
			return response;
		} catch (error) {
			// Handle error
			console.log("Password reset error:", error.response.data);

			handleError(error);

			throw error; // Re-throw the error to propagate it to the caller
		}
	};

	const password_reset = async function ({
		uid,
		token,
		new_password,
		re_new_password,
	}) {
		try {
			const response = await axios.post(
				`${BASE_URL}auth/users/reset_password_confirm/`,
				{
					uid,
					token,
					new_password,
					re_new_password,
				}
			);

			alert("success", "Password reset success");
			return response;
		} catch (error) {
			// Handle error
			console.log("Password reset error:", error.response.data);

			handleError(error);

			throw error; // Re-throw the error to propagate it to the caller
		}
	};

	const set_pin = async function (value) {
		try {
			const response = await apiInstance.post("auth/pin/", {
				transaction_pin: value.pin,
			});
			alert("success", "PIN set successfully");
			return response.data;
		} catch (error) {
			handleError(error);
			throw error;
		}
	};

	const change_pin = async function (value) {
		try {
			const response = await apiInstance.patch("auth/pin/change-pin/", {
				old_pin: value.current_pin,
				new_pin: value.new_pin,
			});
			alert("success", "PIN changed successfully");
			return response.data;
		} catch (error) {
			handleError(error);
			throw error;
		}
	};

	const reset_pin = async function () {
		try {
			const response = await apiInstance.patch(`auth/pin/reset-pin/`, {
				email: rootState.userDetails.email,
			});
			alert("success", "A link has been sent to reset your PIN");
			return response.data;
		} catch (error) {
			handleError(error);
			throw error;
		}
	};

	const reset_pin_update = async function ({ uid, token, transaction_pin }) {
		try {
			const response = await apiInstance.put(
				`auth/pin/set-pin/?token=${token}&uid=${uid}`,
				{
					transaction_pin,
				}
			);
			alert("success", "Your PIN has been updated");
			return response.data;
		} catch (error) {
			handleError(error);
			throw error;
		}
	};

	const changePassword = async function (value) {
		try {
			const response = await apiInstance.post("auth/users/set_password/", {
				current_password: value.current_password,
				new_password: value.new_password,
				re_new_password: value.re_new_password,
			});
			alert("success", "Your password has been changed");
			return response.data;
		} catch (error) {
			handleError(error);
			throw error;
		}
	};

	return {
		login,
		logout,
		signup,
		forgot_password,
		password_reset,
		refreshToken,
		accessToken,
		isAuthenticated,
		set_pin,
		changePassword,
		change_pin,
		reset_pin,
		reset_pin_update,
	};
}
