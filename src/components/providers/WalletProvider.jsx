"use client";
import { createContext, useReducer } from "react";

export const WalletContext = createContext(null);

const initialState = {
	activity: "Fund Wallet", // Fund Wallet | Withdraw
	fundOption: "Bank Transfer", // Bank Transfer | Card
};

const reducer = (state, action) => {
	if (action.type === "activity") {
		state = { ...state, activity: action.payload };
	}

	if (action.type === "fundOption") {
		state = { ...state, fundOption: action.payload };
	}

	return state;
};

const initActions = (dispatch) => ({
	activity: (payload) => dispatch({ type: "activity", payload }),
	fundOption: (payload) => dispatch({ type: "fundOption", payload }),
});

const WalletProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const actions = initActions(dispatch);

	return (
		<WalletContext.Provider value={[state, actions]}>
			{children}
		</WalletContext.Provider>
	);
};

export default WalletProvider;
