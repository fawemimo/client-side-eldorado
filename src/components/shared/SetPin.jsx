"use client";
import Modal from "./Modal";
import React, { useRef } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import PinInput from "./forms/PinInput";
import AppButton from "./AppButton";
import useAuth from "@/hooks/useAuth";
import { useRootState } from "../providers/RootProvider";

export default function SetPin() {
	const isMobile = useMediaQuery("(max-width:600px)");
	const [rootState, rootActions] = useRootState();

	const refOne = useRef(null);
	const refTwo = useRef(null);
	const refThree = useRef(null);
	const refFour = useRef(null);

	const { set_pin } = useAuth();

	return !rootState.userDetails?.has_pin ? (
		<Modal
			width={isMobile ? "100%" : "493px"}
			minHeight={isMobile ? "100%" : "337px"}
			maxHeight={isMobile ? "100%" : "470px"}
			additionalStyles={{
				boxShadow: " 6px 4px 30.4px 0px rgba(0, 0, 0, 0.10)",
			}}
			bgColor={"white"}>
			<div className="w-full h-full">
				<div className="w-full flex items-center justify-center py-8">
					<p className="text-[2.4rem] font-semibold text-black">
						Set Pin to continue
					</p>
				</div>
				<Formik
					initialValues={{ pin: "" }}
					validationSchema={Yup.object().shape({
						pin: Yup.string().length(4).required(),
					})}
					onSubmit={async (values, { setSubmitting }) => {
						try {
							await set_pin({ pin: values.pin });
							setSubmitting(false);
							rootActions.userDetails({
								...rootState.userDetails,
								has_pin: true,
							});
						} catch (error) {
							console.log(error);
						}
					}}>
					{({
						isValidating,
						isSubmitting,
						errors,
						values,
						setFieldValue,
						handleBlur,
					}) => (
						<Form className="w-full flex flex-col gap-y-8">
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
							<div className="flex items-center justify-center gap-5 mt-12">
								<AppButton.WithLoader
									showLoader={!isValidating && isSubmitting}
									style={{ background: "#DBB42C", width: "50%" }}
									label={"Confirm"}
								/>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</Modal>
	) : null;
}
