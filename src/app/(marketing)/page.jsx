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

export default function page() {
	return (
		<>
			<section className="relative h-[600px] md:h-[600px] lg:h-[700px] xl:h-[800px]">
				<div className="w-full h-[600px] md:h-[600px] lg:h-[700px] xl:h-[800px] absolute z-[4] overflow-hidden bg-white">
					<div className="w-full h-full absolute z-[3]">
						{/* <Image
							src={"/ink_splash.svg"}
							width={1850}
							height={861}
							alt="Eldorado"
							priority={true}
							className="w-full h-full object-cover"
						/> */}
					</div>
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
					{/* <Image
						src={"/hero-rec.svg"}
						width={1850}
						height={861}
						alt="Eldorado"
						className="w-full h-full object-cover"
						priority={true}
					/> */}
				</div>
				<div className="w-full h-[600px] md:h-[600px] lg:h-[700px] xl:h-[800px] absolute flex items-center z-[5] overflow-hidden">
					<div className="w-full lg:w-[90%] xl:w-[55%] min-[1440px]:w-[50%]  px-5 md:px-0 md:pl-20">
						<h1 className="text-[4rem] md:text-[6rem] lg:text-[6rem] xl:text-[6.5rem] md:leading-[7.5rem] font-montserrat tracking-tight font-black  text-primary max-[360px]:mb-0 mb-5 md:mb-0">
							Smart, Simple & Easy Payment{" "}
							<mark className="marker bg-transparent text-[#154AA1] text-[4rem] md:text-[6rem] tracking-normal font-montserrat font-black">
								Possibilities
							</mark>
						</h1>
						<div className="relative">
							{/* <Image
								src={"/brush2.svg"}
								priority={true}
								width={826}
								height={237}
								alt="Eldorado"
								className="absolute md:hidden  z-[-1] max-[600px]:left-[-7px] max-[768px]:left-[-40px] max-[820px]:left-[-60px] lg:left-[-90px] xl:left-[-20px] top-[-65px] md:top-[5px] max-[360px]:max-w-full max-w-[90%]  md:w-full xl:w-full h-[207px] object-contain"
							/> */}
							{/* <Image
								src={"/brush1.svg"}
								priority={true}
								width={826}
								height={237}
								alt="Eldorado"
								className="absolute hidden md:block lg:hidden  z-[-1] max-[600px]:left-[-7px] max-[768px]:left-[-40px] max-[820px]:left-[-60px] lg:left-[-90px] xl:left-[-20px] top-[-50px] md:top-[5px]  md:w-full xl:w-full h-[237px] object-contain"
							/> */}
							{/* <Image
								src={"/brush.svg"}
								priority={true}
								width={826}
								height={237}
								alt="Eldorado"
								className="absolute hidden lg:block  z-[-1] max-[600px]:left-0 max-[768px]:left-[-40px] max-[820px]:left-[-60px] lg:left-[-100px] xl:left-[-20px] min-[1440px]:left-[-20px] min-[1400px]:left-[-50px] top-[-50px] md:top-[5px]  md:w-full xl:w-full h-[237px] object-contain"
							/> */}
						</div>
						<p className="text-2xl md:text-3xl text-[#1e1e1e] font-normal mt-10 md:mt-10 lg:mt-10 xl:mt-8 lg:w-[90%] xl:w-[70%] leading-[2.5rem] xl:leading-[3rem]">
							Unlocking limitless payment opportunities for Business
							enterprises, individuals, small businesses, emerging markets, and
							startups.
						</p>
						<div className="flex items-center mt-10  md:mt-10 lg:mt-12 xl:mt-10 gap-12">
							<Link
								className="font-bold text-white w-[200px] h-[57px] rounded-xl bg-[#DBB42C] text-2xl flex items-center justify-center"
								href={"/auth/signup"}>
								Create account
							</Link>
							<Link
								className="font-bold bg-primary text-white w-[200px] h-[57px] rounded-xl  text-2xl flex items-center justify-center"
								href={"/"}>
								Get the app
							</Link>
						</div>
					</div>
					<div className="hidden xl:flex justify-end z-[5]">
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
			<section className="bg-[#f8f8f8] py-16 md:py-24 flex flex-col items-center gap-y-6">
				<h2 className="md:px-12 lg:px-0 text-[3rem] md:text-[4rem] lg:text-[5.5rem] xl:text-[5rem] font-black text-[#1C4894] text-center w-[60%]">
					Transact anywhere easily, with Eldorado Smart Payment.
				</h2>
				<p className="text-[1.5rem] md:text-[2rem] xl:text-[2.5rem] text-center w-[95%] md:w-[95%] lg:w-[90%] xl:w-[80%]">
					{`The comprehensive fin-tech platform that goes beyond traditional
					banking to offer a seamless suite of services tailored to meet all
					your financial needs. We are your trusted partner for seamless and
					secure financial management. Here's how we're transforming the
					landscape of personal and business finance:`}
				</p>
			</section>
			<section className="w-full flex flex-col md:flex-row items-center px-5 md:px-10 lg:px-12 xl:px-20 py-12 md:py-26">
				<div className="w-full md:w-[50%]">
					<h3 className="text-[3rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] text-primary font-bold">
						P2P Transactions
					</h3>
					<p className="text-[1.5rem] md:text-[2rem] xl:text-[2.4rem]">
						You can effortlessly send and receive funds to friends, family, or
						business associates with just a few taps on your device. our
						platform ensures fast, secure, and cost-effective transactions,
						anytime, anywhere.
					</p>
				</div>
				<div className="w-full md:w-[50%] order-first md:order-none">
					<P2PTransfers />
				</div>
			</section>
			<section className="w-full flex flex-col md:flex-row items-center gap-12 px-5 md:px-10 lg:px-12 xl:px-20 py-12 md:py-24">
				<div className="w-full md:w-[50%]">
					<Image
						src={"/virtual-cards.png"}
						width={714}
						height={437}
						alt="Eldorado"
					/>
				</div>
				<div className="w-full md:w-[50%]">
					<h3 className="text-[3rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] text-primary font-bold md:text-right">
						Virtual Cards
					</h3>
					<p className="text-[1.5rem] md:text-[2rem] xl:text-[2.4rem] md:text-right">
						Enjoy enhanced security and convenience with our virtual card
						feature. Create virtual cards instantly for online purchases,
						subscription services, or one-time transactions.
					</p>
				</div>
			</section>
			<section className="w-full flex flex-col md:flex-row items-center px-5 md:px-10 lg:px-12 xl:px-20 py-12 md:py-24">
				<div className="w-full md:w-[50%]">
					<h3 className="text-[3rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] text-primary font-bold">
						Savings Account
					</h3>
					<p className="text-[1.5rem] md:text-[2rem] xl:text-[2.4rem]">
						{`Whether you're saving for a major purchase, an emergency fund, or
						retirement, our platform offers competitive interest rates, flexible
						terms, to help you reach your goals faster.`}
					</p>
				</div>
				<div className="w-full md:w-[50%] order-first md:order-none">
					<Savings />
				</div>
			</section>
			<section className="w-full flex flex-col md:flex-row items-center gap-12 px-5 md:px-10 lg:px-12 xl:px-20 py-12 md:py-24">
				<div className="w-full md:w-[50%]">
					<CrossBorderTution />
				</div>
				<div className="w-full md:w-[50%]">
					<h3 className="text-[3rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem]  font-bold md:text-right">
						Cross-border <span className="text-primary">Fees & Tuition</span>{" "}
						Payments
					</h3>
					<p className="text-[1.5rem] md:text-[2rem] xl:text-[2.4rem] md:text-right">
						Enjoy enhanced security and convenience with our virtual card
						feature. Create virtual cards instantly for online purchases,
						subscription services, or one-time transactions.
					</p>
				</div>
			</section>
			<section className="w-full flex flex-col md:flex-row items-center gap-10 px-5 md:px-10 lg:px-12 xl:px-20 py-12 md:py-24">
				<div className="w-full md:w-[50%]">
					<h3 className="text-[3rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] text-primary font-bold">
						Flight & Hotel Bookings
					</h3>
					<p className="text-[1.5rem] md:text-[2rem] xl:text-[2.4rem]">
						{`Search for flights, compare prices, and book Hotels directly through our platform, all while enjoying access to exclusive deals and discounts from top airlines and hotel chains around the world.`}
					</p>
				</div>
				<div className="w-full md:w-[50%] flex justify-end">
					<div className="relative">
						<Image
							src={"/flight-booking.png"}
							width={604}
							height={559}
							alt="Eldorado"
							className="rounded-2xl"
						/>
						<div className="absolute bottom-[20px] text-center w-full flex flex-col items-center gap-2 xl:gap-5">
							<p className="text-[4rem] font-bold text-white">Flights</p>
							<p className="px-12 xl:px-0 text-2xl text-white">
								Search Flights & Places Hire to our most popular destinations
							</p>
							<button className="bg-primary text-2xl text-white rounded-xl w-[144px] h-[50px] flex items-center justify-center gap-5">
								<FlightIcon /> show flights
							</button>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full flex flex-col lg:flex-row  items-center gap-12 px-5 md:px-10 lg:px-12 xl:px-20 py-12 md:py-24 bg-[#F9FBFF]">
				<div className="w-full md:w-[50%]">
					<Image
						src={"/bank-sec.png"}
						width={700}
						height={447}
						alt="Eldorado"
					/>
				</div>
				<div className="w-full lg:w-[50%] order-first lg:order-none">
					<h3 className="text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[5rem]  font-bold lg:text-right text-primary">
						Bank Level Security
					</h3>
					<p className="text-[1.5rem] md:text-[2rem] xl:text-[2.4rem] lg:text-right">
						Our platform employs bank-level encryption, multi-factor
						authentication, and stringent security protocols to safeguard your
						privacy and ensure that your funds remain safe and secure at all
						times.
					</p>
				</div>
			</section>
			<section className="w-full flex flex-col lg:flex-row items-center gap-12 px-5 md:px-10 lg:px-12 xl:px-20 py-12 md:py-24 bg-[#F9FBFF]">
				<div className="w-full lg:w-[50%]">
					<h3 className="text-[3rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem]  font-bold  text-primary">
						24/7 Customer Support
					</h3>
					<p className="text-[1.5rem] md:text-[2rem] xl:text-[2.4rem]">
						Need assistance or have questions? Our dedicated customer support
						team is available around the clock to provide prompt and
						personalized assistance. Whether you need help navigating the
						platform, resolving a transaction issue, or booking travel
						arrangements, our team is here to help you every step of the way.
					</p>
				</div>
				<div className="w-full md:w-[50%]">
					<Image
						src={"/247-support.png"}
						width={700}
						height={447}
						alt="Eldorado"
					/>
				</div>
			</section>
			<section className="bg-[#253348] py-24 flex flex-col items-center gap-y-10">
				<h6 className="text-[3rem] md:text-[5rem] font-bold text-white">
					APP COMING SOON!!!
				</h6>
				<div className="flex flex-col md:flex-row items-center justify-center gap-10">
					<div className="border-white border-[1.5px] rounded-lg flex  items-center justify-center gap-5 h-[70px] w-[270px]">
						<AppleIcon width={35} height={40} />
						<div className="flex flex-col gap-y-1 text-xl text-white">
							<span>COMING SOON ON</span>
							<span className="text-2xl text-white">App Store</span>
						</div>
					</div>
					<div className="border-white border-[1.5px] rounded-lg flex items-center justify-center gap-5 h-[70px] w-[270px]">
						<GooglePlayStore />
						<div className="flex flex-col gap-y-1 text-xl text-white">
							<span>COMING SOON ON</span>
							<span className="text-2xl text-white">Google Play Store</span>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
