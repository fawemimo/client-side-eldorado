"use client";
import { Formik, Form } from "formik";
import React from "react";
import AppInput from "@/components/shared/forms/AppInput";
import AppButton from "@/components/shared/AppButton";
import Link from "next/link";
import SelectCountry from "./SelectCountry";
import * as Yup from "yup";
import PhoneNumberInput from "./PhoneNumberInput";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const schema = Yup.object().shape({
	business_name: Yup.string().required("Business Name is required"),
	country: Yup.string().required("Country is required"),
	first_name: Yup.string().required("First Name is required"),
	last_name: Yup.string().required("Last Name is required"),
	email: Yup.string()
		.required("Email is required")
		.email("Please enter a valid email address"),
	phone_number: Yup.string().required("Phone Number is required"),
	password: Yup.string().required("Password is required"),
	confirm_password: Yup.string().required("password is required"),
	account_type: Yup.string().required("Account type is required"),
});

export default function BusinessAccountForm() {
	const { signup } = useAuth();
	const router = useRouter();

	const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
		try {
			await signup({
				email: values.email,
				first_name: values.first_name,
				last_name: values.last_name,
				phone_number: values.country_code + values.phone_number,
				password: values.password,
				re_password: values.confirm_password,
			});
			setSubmitting(false);
			router.replace("/auth/linksent");
		} catch (error) {
			console.error("Signup error:", error);
			if (error.errorList) {
				error.errorList.forEach((err) => {
					setFieldError(err.key, err.msg);
				});
			}
			setSubmitting(false);
		}
	};

	return (
		<Formik
			initialValues={{
				business_name: "",
				country: "Nigeria",
				first_name: "",
				last_name: "",
				email: "",
				country_code: "+234",
				phone_number: "",
				password: "",
				confirm_password: "",
				account_type: "starter",
			}}
			validationSchema={schema}
			onSubmit={handleSubmit}>
			{({ values, setFieldValue, isSubmitting, isValidating }) => (
				<Form className="w-full">
					<div className="grid md:grid-cols-2 w-full gap-5 mb-8 last:mb-0">
						<AppInput
							name={"business_name"}
							label={"Business Name"}
							placeholder={"Business Name"}
						/>
						<SelectCountry
							selectedCountry={values.country}
							onCountrySelect={(item) =>
								setFieldValue("country", item.name.common)
							}
						/>
					</div>
					<div className="grid md:grid-cols-2 w-full gap-5 mb-8 last:mb-0">
						<AppInput
							name={"first_name"}
							label={"First Name"}
							placeholder={"First Name"}
						/>
						<AppInput
							name={"last_name"}
							label={"Last Name"}
							placeholder={"Last Name"}
						/>
					</div>
					<div className="grid md:grid-cols-2 w-full gap-5 mb-8 last:mb-0">
						<AppInput
							name={"email"}
							type="email"
							label={"Email Address"}
							placeholder={"Email Address"}
						/>
						<PhoneNumberInput
							setCountryCode={(val) => setFieldValue("country_code", val)}
							selectedCountryCode={values.country_code}
							setPhoneNumber={(val) => setFieldValue("phone_number", val)}
						/>
					</div>
					<div className="grid md:grid-cols-2 w-full gap-5 mb-8 last:mb-0">
						<AppInput
							name={"password"}
							type="password"
							forPassword={true}
							label={"Password"}
							placeholder={"Password"}
							forReset={true}
						/>
						<AppInput
							name={"confirm_password"}
							type="password"
							forPassword={true}
							label={"Confirm Password"}
							placeholder={"Confirm Password"}
							forReset={true}
						/>
					</div>
					<div className="flex flex-col gap-y-5 w-full gap-5 mb-8 last:mb-0">
						<p className="text-2xl font-semibold">
							What type of business do you own ?
						</p>
						<label className="flex items-center gap-3 mt-3">
							<input
								type="checkbox"
								name=""
								id="starter"
								className="accent-primary w-[20px] h-[20px]"
								checked={values.account_type === "starter"}
								onChange={(e) =>
									e.target.checked
										? setFieldValue("account_type", "starter")
										: null
								}
							/>
							<div className="flex flex-col gap-y-1">
								<p className="font-medium text-2xl">Starter Business</p>
								<p className="text-xl">
									{`Potential for future growth and the possibility of registering a formal business later on.`}
								</p>
							</div>
						</label>
						<label className="flex items-center gap-3 mt-3">
							<input
								type="checkbox"
								name=""
								id="starter"
								className="accent-primary w-[20px] h-[20px]"
								checked={values.account_type === "registered"}
								onChange={(e) =>
									e.target.checked
										? setFieldValue("account_type", "registered")
										: null
								}
							/>
							<div className="flex flex-col gap-y-1">
								<p className="font-medium text-2xl">Registered Business</p>
								<p className="text-xl">
									{`Compliant and operational, having the necessary approvals and licenses for legal business operation.`}
								</p>
							</div>
						</label>
					</div>
					<div className="mt-12">
						<label className="flex items-center gap-3">
							<input
								type="checkbox"
								name=""
								id="starter"
								className="accent-primary w-[20px] h-[20px]"
							/>
							<div className="flex flex-col gap-y-1">
								<p className="text-xl">
									I agree to all the{" "}
									<Link href={"/"} className="text-primary">
										Terms
									</Link>{" "}
									and{" "}
									<Link href={"/"} className="text-primary">
										Privacy Policy
									</Link>
								</p>
							</div>
						</label>
					</div>
					<div className="flex items-center justify-center w-full mt-5">
						<div className="w-full md:w-[80%]">
							<AppButton.WithLoader
								showLoader={!isValidating && isSubmitting}
								label={"Create account"}
							/>
						</div>
					</div>
				</Form>
			)}
		</Formik>
	);
}
