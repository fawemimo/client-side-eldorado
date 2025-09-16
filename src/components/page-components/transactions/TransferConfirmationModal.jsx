"use client";
import React, { useRef, useEffect } from "react";
import Modal from "@/components/shared/Modal";
import AppButton from "@/components/shared/AppButton";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import PinInput from "@/components/shared/forms/PinInput";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import useTransactions from "@/hooks/useTransactions";
import { useRootState } from "@/components/providers/RootProvider";
import CountdownTimer from "@/components/shared/CountdownTimer";

export default function TransferConfirmationModal({
	currentStep,
	setCurrentStep,
	setIsConfirming,
	success,
	setSuccess,
	transferDetails,
}) {
	const isMobile = useMediaQuery("(max-width:600px)");

	return (
		<Modal
			width={isMobile ? "100%" : "493px"}
			minHeight={isMobile ? "100%" : "337px"}
			maxHeight={isMobile ? "100%" : "470px"}
			additionalStyles={{
				boxShadow: " 6px 4px 30.4px 0px rgba(0, 0, 0, 0.10)",
			}}
			bgColor={"white"}>
			{currentStep === "confirm-account" && !success && (
				<ConfirmAccountName
					cancel={() => setIsConfirming(false)}
					confirm={() => setCurrentStep("enter-pin")}
					username={
						transferDetails.userData.first_name +
						" " +
						transferDetails.userData.last_name
					}
					amount={transferDetails.amount}
				/>
			)}

			{currentStep === "enter-pin" && !success && (
				<EnterPin
					cancel={() => setIsConfirming(false)}
					confirm={() => {
						setSuccess(true);
					}}
					transferDetails={transferDetails}
				/>
			)}

			{success && (
				<TransactionSuccess
					complete={() => {
						setIsConfirming(false);
						setSuccess(false);
						setCurrentStep("confirm-account");
					}}
					transferDetails={transferDetails}
				/>
			)}
		</Modal>
	);
}

const ConfirmAccountName = function ({ cancel, confirm, username, amount }) {
	return (
		<div className="w-full h-full p-10">
			<div className="flex items-center justify-center">
				<p className="text-[2.4rem] font-semibold text-primary">
					Confirm Transaction
				</p>
			</div>
			<p className="mt-12 text-3xl leading-[3rem] text-black font-normal text-center">
				Confirm transaction of amount{" "}
				<span className="font-bold">N{amount}</span> to{" "}
				<span className="font-bold">{username}</span>?
			</p>
			<div className="flex items-center gap-5 mt-12">
				<AppButton.WithLoader
					style={{ background: "#DBB42C", width: "50%" }}
					label={"Cancel"}
					onClick={cancel}
				/>
				<AppButton.WithLoader
					style={{ background: "#DBB42C", width: "50%" }}
					label={"Confirm"}
					onClick={confirm}
				/>
			</div>
		</div>
	);
};

const EnterPin = function ({ cancel, confirm, transferDetails }) {
	const refOne = useRef(null);
	const refTwo = useRef(null);
	const refThree = useRef(null);
	const refFour = useRef(null);

	const [rootState, rootActions] = useRootState();
	const { p2ptransfer } = useTransactions();

	return (
		<Formik
			validationSchema={Yup.object().shape({
				pin: Yup.string().length(4).required(),
			})}
			initialValues={{ pin: "" }}
			onSubmit={async (values, { setSubmitting }) => {
				try {
					await p2ptransfer({
						pin: values.pin,
						email: transferDetails.userData.email,
						amount: transferDetails.amount,
					});

					rootActions.userDetails({
						...rootState.userDetails,
						account_balance:
							rootState.userDetails.account_balance - transferDetails.amount,
					});

					confirm();
				} catch (error) {
					console.log(error);
					setSubmitting(false);
				}
			}}>
			{({
				isSubmitting,
				isValidating,
				values,
				errors,
				handleBlur,
				setFieldValue,
			}) => (
				<Form>
					<div className="w-full h-full p-10">
						<div className="flex items-center">
							<p className="text-[2.4rem] font-semibold text-black">
								Enter Pin to continue
							</p>
						</div>
						<div className="w-full mt-12 px-16">
							<div className="flex flex-row justify-between">
								{Array.from({ length: 4 }).map((obj, i, arr) => {
									const position = i + 1;
									let reference;
									let nextRef;
									reference =
										position === 1
											? refOne
											: position === 2
											? refTwo
											: position === 3
											? refThree
											: refFour;

									nextRef =
										position === 1
											? refTwo
											: position === 2
											? refThree
											: position === 3
											? refFour
											: refFour;

									return (
										<div key={i} className="w-[60px] h-[56px]">
											<PinInput
												inputRef={reference}
												handleBlur={() => handleBlur("pin")}
												name="pin"
												nextRef={nextRef}
												hasError={errors.pin !== undefined}
												value={values.pin.toString().substring(i, i + 1)}
												handleChange={(text) => {
													let value = text;

													if (text.length > 1) {
														value = value.slice(0, 1);
													}

													const code =
														`${values.pin.toString().slice(0, i)}` +
														`${value}` +
														`${values.pin.toString().slice(i + 1)}`;

													setFieldValue("pin", code);
												}}
												onPaste={(e) => {
													const pasteData = e.clipboardData.getData("text");
													const code = pasteData.slice(0, 4);
													setFieldValue("pin", code);
												}}
											/>
										</div>
									);
								})}
							</div>
							<ErrorMessage
								className="text-2xl text-red-500 mt-3"
								name="pin"
								component={"p"}
							/>
						</div>
						<div className="flex items-center gap-5 mt-12">
							<AppButton.WithLoader
								style={{ background: "#DBB42C", width: "50%" }}
								label={"Cancel"}
								onClick={cancel}
								type="button"
							/>
							<AppButton.WithLoader
								showLoader={!isValidating && isSubmitting}
								style={{ background: "#DBB42C", width: "50%" }}
								label={"Confirm"}
							/>
						</div>
					</div>
				</Form>
			)}
		</Formik>
	);
};

const TransactionSuccess = function ({ complete, transferDetails }) {
	useEffect(() => {
		window.bodymovin?.loadAnimation({
			container: document.getElementById("t-success"), // the dom element that will contain the animation
			renderer: "svg",
			loop: true,
			autoplay: true,
			path: "/lotties/success.json",
		});
	}, []);

	return (
		<div className="w-full h-full p-10 flex flex-col items-center justify-center">
			<div className="flex items-center justify-center">
				<p className="text-[2.4rem] font-semibold text-primary">
					Transaction Successful
				</p>
			</div>
			<p className="mt-12 text-3xl leading-[3rem] text-black font-normal text-center">
				Your transfer of{" "}
				<span className="font-bold">N{transferDetails.amount}</span> to{" "}
				<span className="font-bold">
					{transferDetails.userData.first_name +
						" " +
						transferDetails.userData.last_name}
				</span>{" "}
				has been confirmed
			</p>
			<div
				id="t-success"
				className="w-[205px] h-[205px] flex items-center justify-center"></div>
			<div className="flex items-center justify-center gap-5 mt-12 w-full">
				<AppButton.WithLoader
					style={{ background: "#DBB42C", width: "50%" }}
					label={"Continue"}
					onClick={complete}
				/>
			</div>
		</div>
	);
};

export const TransactionSuccessB = function ({ complete }) {
	useEffect(() => {
		window.bodymovin?.loadAnimation({
			container: document.getElementById("t-success-b"), // the dom element that will contain the animation
			renderer: "svg",
			loop: true,
			autoplay: true,
			path: "/lotties/success.json",
		});
	}, []);

	return (
		<div className="w-full h-full p-10 flex flex-col items-center justify-center">
			<div className="flex items-center justify-center">
				<p className="text-[2.4rem] font-semibold text-primary">
					Transaction Successful
				</p>
			</div>
			<p className="mt-5 text-2xl text-center text-[#787878]">
				Your payment has been verified. You will be redirected in{" "}
				<CountdownTimer expiryDate={new Date(Date.now() + 10000)} />
			</p>
			<div
				id="t-success-b"
				className="w-[205px] h-[205px] flex items-center justify-center"></div>
			<div className="flex items-center justify-center gap-5 mt-12 w-full">
				<AppButton.WithLoader
					style={{ background: "#DBB42C", width: "50%" }}
					label={"Back to Eldorado"}
					onClick={complete}
				/>
			</div>
		</div>
	);
};
