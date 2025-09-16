"use client";
import { useContext, createContext, useReducer } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Alert from "../shared/Alert";

const queryClient = new QueryClient();

const RootContext = createContext(null);

const initialState = {
	countries: [],
	accessToken: null,
	refreshToken: null,
	isAuthenticated: false,
	alert: {
		type: "success",
		message: "",
		show: false,
	},
	userDetails: null, // currently logged in user details
	banks: [], // list of banks
	userBanks: [], // list of banks the current user has added
};

const reducer = (state, action) => {
	if (action.type === "countries") {
		state = { ...state, countries: action.payload };
	}

	if (action.type === "setCredentials") {
		state = {
			...state,
			accessToken: action.payload.accessToken,
			refreshToken: action.payload.refreshToken,
		};
	}

	if (action.type === "isAuthenticated") {
		state = {
			...state,
			isAuthenticated: action.payload,
		};
	}

	if (action.type === "setAlert") {
		state = { ...state, alert: action.payload };
	}

	if (action.type === "userDetails") {
		state = { ...state, userDetails: action.payload };
	}

	if (action.type === "userBanks") {
		state = { ...state, userBanks: action.payload };
	}

	return state;
};

const initActions = (dispatch) => ({
	countries: (payload) => dispatch({ type: "countries", payload }),
	setCredentials: (payload) => dispatch({ type: "setCredentials", payload }),
	isAuthenticated: (payload) => dispatch({ type: "isAuthenticated", payload }),
	setAlert: (payload) => dispatch({ type: "setAlert", payload }),
	userDetails: (payload) => dispatch({ type: "userDetails", payload }),
	userBanks: (payload) => dispatch({ type: "userBanks", payload }),
});

export const useRootState = () => useContext(RootContext);

export const RootProvider = ({ children, defaultState }) => {
	const [state, dispatch] = useReducer(reducer, {
		...initialState,
		...defaultState,
		queryClient,
	});

	const actions = initActions(dispatch);

	return (
		<QueryClientProvider client={queryClient}>
			<RootContext.Provider value={[state, actions]}>
				<Alert
					show={state.alert.show}
					type={state.alert.type}
					message={state.alert.message}
				/>
				{children}
			</RootContext.Provider>
		</QueryClientProvider>
	);
};
