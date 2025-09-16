"use client";
import React, { useState } from "react";
import Image from "next/image";
import CopyIcon from "@/components/shared/icons/CopyIcon";
import { useQuery } from "@tanstack/react-query";
import useWallet from "@/hooks/useWallet";
import { useSearchParams } from "next/navigation";
import AppLoader from "@/components/shared/AppLoader";
import axios from "axios";
// import CountdownTimer from "@/components/shared/CountdownTimer";
import AppButton from "@/components/shared/AppButton";
import useHelpers from "@/hooks/useHelpers";
import { TransactionSuccessB } from "@/components/page-components/transactions/TransferConfirmationModal";
import dynamic from "next/dynamic";

const CountdownTimer = dynamic(
	() => import("@/components/shared/CountdownTimer"),
	{
		ssr: false,
	}
);

// https://www.eldoradosp.com/payments/payment-links?u=paycheck-nigeria&id=e591d2b2-5399-44dd-bc89-592eec9b936e

// {
//     account_name: "Adam Coding Hub";
// 		account_number: "5032410243";
// 		amount_to_be_paid: "1200";
// 		bank_name: "9PSB";
// 		expiry_date: "2025-07-02T08:54:05.7979571+01:00";
// }

export default function PaymentLinkScreen({ accountDetails }) {
	const [paymentOption, setPaymentOption] = useState("transfer");
	const searchParams = useSearchParams();
	const username = searchParams.get("u");
	const id = searchParams.get("id");

	const [expired, setExpired] = useState(false);
	const [confirmed, setConfirmed] = useState(false);
	const { handleError, copyToClipboard } = useHelpers();
	const [verifying, setVerifying] = useState(false);

	const { data, error, isLoading, refetch, isFetching } = useQuery({
		queryKey: ["payment-link", username, id],
		queryFn: async () => {
			const response = await axios.post(
				`https://backend-c33q.onrender.com/transaction/transfer/payment-links/?username=${username}&payment-link-id=${id}`
			);

			return response.data;
		},
		gcTime: 0,
	});

	console.log(data, error);

	async function verifyPayment() {
		try {
			setVerifying(true);
			const response = await axios.post(
				`https://backend-c33q.onrender.com/transaction/transfer/verify-payment-link/?payment-link-id=${id}`
			);
			console.log(response.data);
			setVerifying(false);
			setConfirmed(true);
		} catch (error) {
			handleError(error);
			setVerifying(false);
		}
	}

	return (
		<>
			<section className="w-full lg:w-[60%] bg-gradientB order-last lg:order-none">
				{!isLoading && !isFetching && data && (
					<div className="flex flex-col gap-y-6 md:flex-row md:items-center justify-between border-b-[1.5px] border-b-white p-5 md:p-12">
						<h1 className="text-white font-bold text-[2rem] md:text-[3.5rem]">
							Complete Your Payment
						</h1>
						<div>
							<p className="text-[2rem] md:text-[2.8rem] font-bold text-white">
								NGN {Number(data?.data.amount_to_be_paid).toLocaleString()}
							</p>
							<p className="text-2xl md:text-[1.8rem] text-white">
								{data?.data.account_name}
							</p>
						</div>
					</div>
				)}

				{(isLoading || isFetching) && (
					<div className="w-full h-[500px] flex items-center justify-center">
						<AppLoader />
					</div>
				)}

				{/* {paymentOption === "card" && !isLoading && (
					<div className="p-5 md:p-12">
						<h2 className="font-bold text-[2rem] md:text-[3.5rem] text-white">
							Enter card details to pay
						</h2>
						<div className="mt-12 flex flex-col gap-y-14 w-full">
							<div className="relative h-[5rem] bg-white rounded-lg">
								<span className="absolute bg-[#09223E] text-xl p-2 text-white top-[-20px] left-[15px]">
									Card Number
								</span>
								<input
									type="text"
									placeholder="Enter card number"
									className="border-0 outline-none bg-transparent text-2xl w-full h-full p-5"
								/>
							</div>
							<div className="grid grid-cols-2 gap-10">
								<div className="relative h-[5rem] bg-white rounded-lg">
									<span className="absolute bg-[#09223E] text-xl p-2 text-white top-[-20px] left-[15px]">
										Exp.Date
									</span>
									<input
										type="text"
										placeholder="MM/YY"
										className="border-0 outline-none bg-transparent text-2xl w-full h-full p-5"
									/>
								</div>
								<div className="relative h-[5rem] bg-white rounded-lg">
									<span className="absolute bg-[#09223E] text-xl p-2 text-white top-[-20px] left-[15px]">
										CVC
									</span>
									<input
										type="password"
										placeholder="***"
										className="border-0 outline-none bg-transparent text-2xl w-full h-full p-5"
									/>
								</div>
							</div>
							<div className="relative h-[5rem] bg-white rounded-lg">
								<span className="absolute bg-[#09223E] text-xl p-2 text-white top-[-20px] left-[15px]">
									Name on Card
								</span>
								<input
									type="text"
									placeholder="Name on Card"
									className="border-0 outline-none bg-transparent text-2xl w-full h-full p-5"
								/>
							</div>
						</div>
					</div>
				)} */}

				{!isLoading && !isFetching && data && (
					<div className="p-5 md:p-12">
						<div className="mt-12 flex flex-col gap-y-14 w-full">
							<div className="flex flex-col gap-y-5">
								<span className="text-2xl text-white">Account Number</span>
								<div className="rounded-lg overflow-hidden h-[5rem] flex">
									<div
										onClick={() => {
											copyToClipboard(
												data?.data.account_number,
												"Account Number Copied"
											);
										}}
										className="w-[10%] bg-accent h-full flex items-center justify-center">
										<CopyIcon />
									</div>
									<div className="px-8 w-[90%] h-full bg-white flex items-center">
										<span className="text-2xl font-medium">
											{data?.data.account_number}
										</span>
									</div>
								</div>
							</div>
							<div className="flex flex-col gap-y-5">
								<span className="text-2xl text-white">Account Name</span>
								<div className="rounded-lg overflow-hidden h-[5rem] flex">
									<div
										onClick={() => {
											copyToClipboard(
												data?.data.account_name,
												"Account Name Copied"
											);
										}}
										className="w-[10%] bg-accent h-full flex items-center justify-center">
										<CopyIcon />
									</div>
									<div className="px-8 w-[90%] h-full bg-white flex items-center">
										<span className="text-2xl font-medium">
											{data?.data.account_name}
										</span>
									</div>
								</div>
							</div>
							<div className="flex flex-col gap-y-5">
								<span className="text-2xl text-white">Bank Name</span>
								<div className="rounded-lg overflow-hidden h-[5rem] flex">
									<div
										onClick={() => {
											copyToClipboard(data?.data.bank_name, "Bank Name Copied");
										}}
										className="w-[10%] bg-accent h-full flex items-center justify-center">
										<CopyIcon />
									</div>
									<div className="px-8 w-[90%] h-full bg-white flex items-center">
										<span className="text-2xl font-medium">
											{data?.data.bank_name}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}

				<div className="flex items-center justify-center mb-12">
					<div className="bg-white rounded-xl p-8 flex items-center gap-5">
						<Image
							src={"/security.png"}
							width={22}
							height={20}
							alt="Eldorado"
						/>
						<span className="text-2xl">Secured by Eldorado</span>
					</div>
				</div>
			</section>
			<section className="w-full lg:w-[40%] mb-12 lg:mb-0">
				{!isLoading && !isFetching && data && !confirmed && (
					<div className="md:p-12 flex flex-col items-center justify-center gap-y-10">
						<div className="w-full fixed p-8 lg:p-0 lg:static top-0 z-[999] bg-white flex items-center justify-center">
							<Image src={"/logo.svg"} width={193} height={59} alt="Eldorado" />
						</div>
						<h1 className="font-bold text-[2rem] md:text-[3.5rem]">
							Payment Instructions
						</h1>
						<p className="text-2xl text-center text-[#787878]">
							Kindly send the exact amount to the account number provided.{" "}
							<br /> Note: This account is unique to this transaction and will
							expire in{" "}
							{!isLoading && !isFetching && data && (
								<CountdownTimer
									onExpire={() => {
										setExpired(true);
									}}
									expiryDate={data?.data.expiry_date}
								/>
							)}
						</p>
						<p className="text-2xl text-center text-[#787878]">
							Click the button below to verify when you have made the payment.
						</p>
					</div>
				)}
				{confirmed && <TransactionSuccessB />}
				{!isLoading && !isFetching && data && !confirmed && (
					<div className="mt-12 px-[20px] flex flex-col items-center gap-5 justify-center">
						{expired && (
							<AppButton.WithLoader
								onClick={() => {
									setExpired(false);
									refetch();
								}}
								className="!w-[60%] !bg-[#f5f5f5] !text-primary"
								label={"Expired, Try Again"}></AppButton.WithLoader>
						)}
						<AppButton.WithLoader
							showLoader={verifying}
							onClick={() => {
								verifyPayment();
							}}
							className="!w-[60%]"
							label={"I have sent the money"}></AppButton.WithLoader>
					</div>
				)}
			</section>
		</>
	);
}
