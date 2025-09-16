import React from "react";
import WalletProvider from "@/components/providers/WalletProvider";

export default function layout({ children }) {
	return <WalletProvider>{children}</WalletProvider>;
}
