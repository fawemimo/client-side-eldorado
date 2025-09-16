import React, { useRef, useState } from "react";
import { Field, ErrorMessage } from "formik";
import Link from "next/link";
import EyeIcon from "../icons/EyeIcon";

export default function AppInput({
	name,
	label,
	labelColor,
	forPassword,
	placeholder,
	forReset,
	...props
}) {
	const [showPassword, setShowPassword] = useState(false);
	const inputRef = useRef(null);

	return (
		<div className="w-full flex flex-col gap-y-2">
			<label
				style={{ color: labelColor ?? "#2D3748" }}
				className="text-[1.5rem]"
				htmlFor={name}>
				{label}
			</label>
			<div
				{...props}
				className={`p-5 flex items-center w-full border-[1.5px] ${
					props?.as === "textarea" ? "h-max" : "h-[5rem]"
				} rounded-lg overflow-hidden focus-within:border-primary transition-all duration-100`}>
				{!forPassword && (
					<Field
						name={name}
						placeholder={placeholder}
						{...props}
						className={`text-[1.5rem] outline-none border-0 w-full ${
							props?.as === "textarea" ? "h-[120px] resize-none" : "h-full"
						}`}
					/>
				)}
				{forPassword && (
					<>
						<Field {...props} name={name}>
							{(props) => (
								<input
									{...props.field}
									ref={inputRef}
									placeholder={placeholder}
									name={name}
									type={showPassword ? "text" : "password"}
									className="text-[1.5rem] outline-none border-0 w-[95%] grow h-full"
								/>
							)}
						</Field>
						<button
							type="button"
							onClick={() => setShowPassword(!showPassword)}>
							{!showPassword && <EyeIcon.Visible />}
							{showPassword && <EyeIcon.Invisible />}
						</button>
					</>
				)}
			</div>
			<ErrorMessage
				name={name}
				component={"p"}
				className="text-2xl text-red-500"
			/>
			{forPassword && !forReset && (
				<div className="w-full">
					<Link
						className="text-[1.5rem] text-secondary underline"
						href={"/auth/forgot-password"}>
						Forgot Password ?
					</Link>
				</div>
			)}
		</div>
	);
}
