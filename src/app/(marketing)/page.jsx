import React from "react";
import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "@/components/shared/icons/HamburgerMenu";
import CrossBorderTution from "../../components/page-components/marketing/CrossBorderTution";
import FlightIcon from "@/components/shared/icons/FlightIcon";
import AppleIcon from "@/components/shared/icons/AppleIcon";
import GooglePlayStore from "@/components/shared/icons/GooglePlayStore";
import SideMenu from "@/components/page-components/marketing/SideMenu";
import P2PTransfers from "@/components/page-components/marketing/P2PTransfers";
import Savings from "@/components/page-components/marketing/Savings";
import AppStoreActions from "@/components/shared/AppStoreActions";

export default function page() {
	return (
		<>
			<section className="relative h-[600px] md:h-[600px] lg:h-[700px] xl:h-[800px]">
				<div className="w-full h-[600px] md:h-[600px] lg:h-[700px] xl:h-[800px] absolute z-[4] overflow-hidden bg-[#112247]">
					<div className="w-full absolute h-full z-[2]">
						<Image
							src={"/map.svg"}
							width={1850}
							height={861}
							priority={true}
							alt="Eldorado"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
				<div className="w-full h-[600px] md:h-[600px] lg:h-[700px] xl:h-[800px] absolute flex items-center pt-20 lg:pt-0 z-[5] overflow-hidden">
					<div className="w-full lg:w-[90%] xl:w-[55%] min-[1440px]:w-[60%]  px-5 md:px-20 ">
						<h1 className="text-[4rem] md:text-[6rem] lg:text-[6rem] xl:text-[6.5rem] md:leading-[7.5rem] font-montserrat tracking-tight font-medium  text-white max-[360px]:mb-0 mb-5 md:mb-0">
							<span className="text-[#f5c945] font-bold">
								Smart, Reliable & Secure
							</span>{" "}
							Payments for Everyone{" "}
							{/* <span className="text-[#f5c945] font-bold">Possibilities</span> */}
							{/* <mark className="marker bg-transparent text-[#112247] text-[4rem] md:text-[6rem] tracking-normal font-montserrat font-black">
								Possibilities
							</mark> */}
						</h1>
						<p className="text-2xl md:text-[17px] text-white mt-5 md:mt-10 lg:mt-10 xl:mt-3 lg:w-[90%] xl:w-[70%] leading-relaxed">
							We provide a comprehensive payment platform that enables
							individuals and businesses to transfer funds, pay bills, and
							manage financial transactions with ease.
						</p>
						<AppStoreActions />
					</div>
					<div className="hidden xl:flex justify-end z-[5] pr-20">
						<Image
							src={"/image 3.png"}
							priority={true}
							width={678}
							height={715}
							alt="Eldorado"
							className="relative lg:max-w-[50%] xl:max-w-[75%] min-[1440px]:max-w-[85%]"
						/>
					</div>
				</div>
			</section>
			<section className="w-full py-16 md:py-24 flex flex-col items-center justify-center gap-y-3">
				<h2 className="text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[4.5rem] font-bold text-[#112247] text-center w-[90%] md:w-[70%] lg:w-[60%]">
					Seamless Transactions, Every Time
				</h2>
				<p className="w-[80%] md:w-[70%] lg:w-[40%] text-2xl md:text-3xl text-[#787878] text-center">
					Our platform ensures that sending money and paying bills is simple and
					dependable.
				</p>
			</section>
			<section className="bg-[#fafaf4] py-12 flex gap-y-5 flex-col md:flex-row items-center justify-center">
				<div className="w-[90%] md:w-[40%]">
					<h6 className="text-[2.5rem] lg:text-[3rem] xl:text-[4rem] min-[1281px]:text-[4.5rem] font-semibold text-[#112247] md:w-1/2 leading-tight">
						Funds Transfers
					</h6>
					<p className="text-[1.7rem] font-epilogue text-[#1E1E1E] lg:w-[70%] mt-5">
						Seamlessly transfer money to other users on the platform or to any
						Nigerian bank account, with the assurance of speed, security, and
						reliability.
					</p>
				</div>
				<div className=" flex items-center justify-center">
					<Image
						src={"/transfer-mob.png"}
						width={225}
						height={469}
						alt="Eldorado"
						className="max-w-[75%] lg:max-w-[80%] xl:max-w-full"
					/>
				</div>
			</section>

			<section className="py-12 flex flex-col gap-y-5 md:flex-row items-center justify-center">
				<div className="order-last md:order-none w-[90%] md:w-[40%] flex gap-y-5  items-center justify-center">
					<Image
						src={"/transfer-mob.png"}
						width={225}
						height={469}
						alt="Eldorado"
						className="max-w-[55%] lg:max-w-[45%] xl:max-w-full"
					/>
				</div>
				<div className="w-[90%] md:w-[40%]">
					<h6 className="text-[2.5rem] lg:text-[3rem] xl:text-[4rem] min-[1281px]:text-[4.5rem] font-semibold text-[#112247] md:w-1/2 leading-tight">
						Airtime and Data
					</h6>
					<p className="text-[1.7rem] font-epilogue text-[#1E1E1E] lg:w-[70%] mt-5">
						Recharge Conveniently purchase airtime and data bundles across all
						major mobile networks, anytime and anywhere.
					</p>
				</div>
			</section>

			<section className="bg-[#fafaf4] py-12 flex gap-y-5 flex-col md:flex-row items-center justify-center">
				<div className="w-[90%] md:w-[40%]">
					<h6 className="text-[2.5rem] lg:text-[3rem] xl:text-[4rem] min-[1281px]:text-[4.5rem] font-semibold text-[#112247] md:w-1/2 leading-tight">
						Bill Payments
					</h6>
					<p className="text-[1.7rem] font-epilogue text-[#1E1E1E] lg:w-[70%] mt-5">
						Settle electricity, television, internet, and other utility bills
						with ease, all from a single secure platform.
					</p>
				</div>
				<div className=" flex items-center justify-center">
					<Image
						src={"/transfer-mob.png"}
						width={225}
						height={469}
						alt="Eldorado"
						className="max-w-[75%] lg:max-w-[80%] xl:max-w-full"
					/>
				</div>
			</section>

			<section className="py-12 flex flex-col gap-y-5 md:flex-row items-center justify-center">
				<div className="order-last md:order-none w-[90%] md:w-[40%] flex gap-y-5  items-center justify-center">
					<Image
						src={"/transfer-mob.png"}
						width={225}
						height={469}
						alt="Eldorado"
						className="max-w-[55%] lg:max-w-[45%] xl:max-w-full"
					/>
				</div>
				<div className="w-[90%] md:w-[50%] lg:w-[45%]">
					<h6 className="text-[2.5rem] lg:text-[3rem] xl:text-[4rem] min-[1281px]:text-[4.5rem] font-semibold text-[#112247] md:w-1/2 leading-tight">
						Payment Links and Invoicing
					</h6>
					<p className="text-[1.7rem] font-epilogue text-[#1E1E1E] lg:w-[70%] mt-5">
						Generate professional invoices and secure payment links, enabling
						fast and convenient collections for individuals and businesses.
					</p>
				</div>
			</section>
			<section className="">
				<div className="py-20 md:py-40 px-8 md:px-[25px] lg:px-[100px] xl:px-[150px] bg-[#081634] w-full  grid gap-y-12 lg:grid-cols-2">
					<div className="flex flex-col justify-center md:items-center lg:items-start">
						<h6 className="text-[3rem] md:text-[4rem] lg:text-[4rem] xl:text-[5rem] font-semibold font-hubot text-white md:text-center lg:text-left">
							Smart payments in your pocket.
						</h6>
						<p className="text-2xl md:text-[1.7rem] text-white md:w-[80%] lg:w-full xl:w-[80%] mt-2 mb-8 md:text-center lg:text-left leading-relaxed">
							Experience the convenience of seamless payments at your
							fingertips. Download our mobile app to transfer funds, pay bills,
							and manage transactions securely, anytime and anywhere.
						</p>
						<div className="flex items-center justify-center lg:block">
							<AppStoreActions />
						</div>
					</div>
					<div className="flex items-center justify-center lg:justify-end xl:justify-center h-full">
						<Image
							src={"/ready.png"}
							width={400}
							height={400}
							className="max-w-[80%] md:max-w-full lg:max-w-[60%] xl:max-w-[60%] object-cover"
							alt="Eldorado"
						/>
					</div>
				</div>
			</section>
		</>
	);
}
