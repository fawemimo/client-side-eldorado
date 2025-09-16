"use client";
import React from "react";
import CheckIcon from "./icons/CheckIcon";

export default function Step({
	isCompleted,
	isActive,
	step,
	stepTitle,
	showLine = true,
	titleColor,
	lineColor,
	showTitle,
	horizontal,
	circleActiveStyle,
	titleActiveStyle = {},
}) {
	return (
		<div>
			{/* for big screens */}

			{!horizontal && (
				<div className="flex gap-8">
					<div className="flex flex-col items-center gap-y-5">
						<span
							style={isActive ? circleActiveStyle : {}}
							className={`flex w-[30px] h-[30px] rounded-full border  text-2xl items-center justify-center ${
								isCompleted
									? "bg-[#25C348] border-[#25C348]"
									: isActive && !isCompleted
									? "border-primary bg-white"
									: !isCompleted && !isActive
									? "border-customGray text-customGray bg-white"
									: ""
							} `}>
							{!isCompleted ? step : <CheckIcon />}
						</span>
						{showLine && (
							<div
								style={{ backgroundColor: lineColor }}
								className={`${
									isCompleted ? "bg-[#25C348]" : "bg-customGray"
								} w-[2px] h-[23px] `}></div>
						)}
					</div>
					<span
						style={{ color: titleColor, ...titleActiveStyle }}
						className={`text-2xl font-medium flex mt-2 ${
							isCompleted
								? "text-customGray"
								: isActive && !isCompleted
								? "text-primary"
								: !isCompleted && !isActive
								? "text-black"
								: ""
						}  `}>
						{stepTitle}
					</span>
				</div>
			)}

			{/* for small screens */}

			{horizontal && (
				<div className="flex items-center gap-4">
					<div className="flex flex-col items-center gap-y-5">
						<span
							style={isActive ? circleActiveStyle : {}}
							className={`flex w-[30px] h-[30px] rounded-full border  text-2xl items-center justify-center ${
								isCompleted
									? "bg-[#25C348] border-[#25C348]"
									: isActive && !isCompleted
									? "border-primary bg-white"
									: !isCompleted && !isActive
									? "border-customGray text-customGray bg-white"
									: ""
							} `}>
							{!isCompleted ? step : <CheckIcon />}
						</span>
					</div>
					{showTitle && (
						<span
							style={{ color: titleColor, ...titleActiveStyle }}
							className={`text-2xl font-medium flex ${
								isCompleted
									? "text-customGray"
									: isActive && !isCompleted
									? "text-primary"
									: !isCompleted && !isActive
									? "text-black"
									: ""
							}  `}>
							{stepTitle}
						</span>
					)}
					{showLine && (
						<div
							style={{ backgroundColor: lineColor }}
							className={`${
								isCompleted ? "bg-[#25C348]" : "bg-customGray"
							} h-[2px] w-[23px]`}></div>
					)}
				</div>
			)}
		</div>
	);
}
