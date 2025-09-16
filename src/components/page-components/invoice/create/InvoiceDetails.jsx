import AppInput from "@/components/shared/forms/AppInput";
import { Formik, Form } from "formik";
import React from "react";
import AddImage from "./AddImage";
import AppButton from "@/components/shared/AppButton";
import * as Yup from "yup";
import DueDate from "./DueDate";
import InvoiceAmount from "./InvoiceAmount";
import InvoiceItems from "./InvoiceItems";
import useInvoice from "@/hooks/useInvoice";
import { useRouter } from "next/navigation";

export default function InvoiceDetails({
	setInvoiceType,
	invoiceType,
	receiverDetails,
}) {
	const schema = Yup.object().shape({
		invoice_title: Yup.string().optional().label("Invoice Title"),
		items: Yup.array().optional().label("Items"),
		due_date: Yup.date().required().label("Due Date"),
		description: Yup.string().required().label("description"),
		amount: Yup.number().required().label("Amount"),
		currency: Yup.string().required().label("Currency"),
	});

	const { createInvoice } = useInvoice();
	const router = useRouter();

	async function handleSubmit(
		values,
		{ setSubmitting, setFieldError, errors }
	) {
		try {
			if (invoiceType === "Product" && values.items.length === 0) {
				setFieldError("items", "Please add at least one item");
			}

			const data = {
				email: receiverDetails.email,
				currency: values.currency,
				description: values.description,
				due_date: values.due_date,
				amount: values.amount,
				invoice_type: invoiceType,
				items: {
					item: values.items,
				},
			};

			if (receiverDetails.name !== "") {
				data.receiver_name = receiverDetails.name;
			}

			if (receiverDetails.address !== "") {
				data.receiver_address = receiverDetails.address;
			}

			if (receiverDetails.phone !== "") {
				data.receiver_phone_number = receiverDetails.phone;
			}

			if (values.invoice_title !== "") {
				data.data = {
					invoice_title: values.invoice_title,
				};
			}

			await createInvoice(data);
			setSubmitting(false);
			router.push("/invoice");
		} catch (error) {
			setSubmitting(false);
			console.log(error);
		}
	}

	return (
		<>
			<div className="flex flex-col gap-y-2">
				<p className="text-[2.5rem] md:text-[4rem] lg:text-[3.5rem] xl:text-[4rem] font-bold text-primary">
					Invoice Details
				</p>
				<p className="text-2xl">
					Enter the following details to start creating your invoice
				</p>
			</div>
			<div className="flex items-center gap-5 mt-12">
				<p className="text-2xl font-medium">Invoice type:</p>
				<div className="flex items-center gap-8 cursor-pointer">
					<label
						className="flex items-center gap-5  cursor-pointer"
						htmlFor="service_inv">
						<input
							className="accent-primary"
							type="radio"
							name="invoice_type"
							id="service_inv"
							defaultChecked={invoiceType === "Service" ? true : false}
							onChange={(e) => e.target.checked && setInvoiceType("Service")}
						/>
						<span className="text-2xl">Service</span>
					</label>
					<label
						className="flex items-center gap-5  cursor-pointer"
						htmlFor="product_inv">
						<input
							className="accent-primary"
							type="radio"
							name="invoice_type"
							id="product_inv"
							defaultChecked={invoiceType === "Product" ? true : false}
							onChange={(e) => e.target.checked && setInvoiceType("Product")}
						/>
						<span className="text-2xl">Product</span>
					</label>
				</div>
			</div>
			<div className="w-full mt-20">
				<Formik
					validationSchema={schema}
					initialValues={{
						invoice_title: "",
						due_date: "",
						items: [],
						description: "",
						currency: "NGN",
						amount: "",
					}}
					onSubmit={handleSubmit}>
					{({ isSubmitting, isValidating, setFieldValue, values, errors }) => (
						<Form>
							<div className="grid md:grid-cols-2 gap-5 mb-8">
								<AppInput
									style={{ backgroundColor: "white" }}
									label={"Invoice Title"}
									placeholder={"Invoice Title"}
									name={"invoice_title"}
								/>
								<InvoiceAmount
									setValue={(val) => setFieldValue("currency", val)}
								/>
							</div>
							<div className="grid md:grid-cols-2 gap-5 mb-8">
								<DueDate />
								<AppInput
									style={{ backgroundColor: "white" }}
									label={"Description"}
									placeholder={"Description"}
									name={"description"}
									as="textarea"
								/>
							</div>
							{invoiceType === "Product" && (
								<InvoiceItems
									setFieldValue={setFieldValue}
									currentValue={values.items}
								/>
							)}
							<div className="mt-12 w-[35%]">
								<AppButton.WithLoader
									showLoader={!isValidating && isSubmitting}
									label={"Continue"}
								/>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</>
	);
}
