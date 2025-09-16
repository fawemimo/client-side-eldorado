import Avatar from "@/components/shared/Avatar";
import DoubleCheck from "@/components/shared/icons/DoubleCheck";
import Image from "next/image";
import React from "react";

export default function page() {
	return (
		<section className="bg-[#F7F7FF] pt-[90px]">
			<div className="p-8 md:p-16">
				<h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5.5rem] font-semibold">
					Services
				</h1>
			</div>
			<div className="bg-[#F0F0FF] px-8 md:px-16 flex flex-col lg:flex-row">
				<div className="lg:p-8 py-12 lg:w-1/2">
					<div className="w-[162px] h-[56px] bg-[#2DA5F3] text-2xl flex items-center justify-center text-white">
						WHO WE ARE
					</div>
					<p className="text-[3rem] md:text-[4rem] xl:text-[4.5rem] font-bold mt-10">
						Eldorado Smart Payment
					</p>
					<p className="text-2xl md:text-[1.7rem] mt-8">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe nam
						ipsa consequatur, delectus doloribus quas. Suscipit unde soluta eos
						nihil illum odit, nostrum possimus dolore ipsam illo nesciunt
						eligendi similique iste fuga maxime recusandae fugit quidem nobis
						qui. Explicabo, nostrum.
					</p>
					<div className="mt-12 flex flex-col gap-y-8">
						<div className="flex items-center gap-5">
							<DoubleCheck />
							<span className="text-2xl md:text-[1.7rem]">
								Great 24/7 customer services
							</span>
						</div>
						<div className="flex items-center gap-5">
							<DoubleCheck />
							<span className="text-2xl md:text-[1.7rem]">
								0 Charges or Transaction Fee
							</span>
						</div>
						<div className="flex items-center gap-5">
							<DoubleCheck />
							<span className="text-2xl md:text-[1.7rem]">
								50+ Branches all over the world
							</span>
						</div>
						<div className="flex items-center gap-5">
							<DoubleCheck />
							<span className="text-2xl md:text-[1.7rem]">
								Over 1 million currencies
							</span>
						</div>
					</div>
				</div>
				<div className="lg:w-1/2 pb-24">
					<Image
						src={"/services.png"}
						width={672}
						height={602}
						alt="Eldorado"
						priority={true}
					/>
				</div>
			</div>
			<div className="py-24 bg-white px-8 md:px-16">
				<p className="text-[2.5rem] md:text-[3rem] font-semibold text-center">
					Our core team members
				</p>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
					<div className="p-6 border rounded-xl flex items-center gap-5">
						<Avatar
							size={50}
							halfRounded={false}
							imageSrc={
								"https://images.pexels.com/photos/23947602/pexels-photo-23947602/free-photo-of-a-woman-sitting-in-a-field-with-a-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
							}
							alt={"Eldorado"}
						/>
						<div>
							<p className="text-[1.7rem] font-medium">Kevin Gilbert</p>
							<p className="text-[1.5rem]">Chief Executive Officer</p>
						</div>
					</div>
					<div className="p-6 border rounded-xl flex items-center gap-5">
						<Avatar
							size={50}
							halfRounded={false}
							imageSrc={
								"https://images.pexels.com/photos/23947602/pexels-photo-23947602/free-photo-of-a-woman-sitting-in-a-field-with-a-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
							}
							alt={"Eldorado"}
						/>
						<div>
							<p className="text-[1.7rem] font-medium">Kevin Gilbert</p>
							<p className="text-[1.5rem]">Chief Executive Officer</p>
						</div>
					</div>
					<div className="p-6 border rounded-xl flex items-center gap-5">
						<Avatar
							size={50}
							halfRounded={false}
							imageSrc={
								"https://images.pexels.com/photos/23947602/pexels-photo-23947602/free-photo-of-a-woman-sitting-in-a-field-with-a-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
							}
							alt={"Eldorado"}
						/>
						<div>
							<p className="text-[1.7rem] font-medium">Kevin Gilbert</p>
							<p className="text-[1.5rem]">Chief Executive Officer</p>
						</div>
					</div>
					<div className="p-6 border rounded-xl flex items-center gap-5">
						<Avatar
							size={50}
							halfRounded={false}
							imageSrc={
								"https://images.pexels.com/photos/23947602/pexels-photo-23947602/free-photo-of-a-woman-sitting-in-a-field-with-a-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
							}
							alt={"Eldorado"}
						/>
						<div>
							<p className="text-[1.7rem] font-medium">Kevin Gilbert</p>
							<p className="text-[1.5rem]">Chief Executive Officer</p>
						</div>
					</div>
					<div className="p-6 border rounded-xl flex items-center gap-5">
						<Avatar
							size={50}
							halfRounded={false}
							imageSrc={
								"https://images.pexels.com/photos/23947602/pexels-photo-23947602/free-photo-of-a-woman-sitting-in-a-field-with-a-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
							}
							alt={"Eldorado"}
						/>
						<div>
							<p className="text-[1.7rem] font-medium">Kevin Gilbert</p>
							<p className="text-[1.5rem]">Chief Executive Officer</p>
						</div>
					</div>
					<div className="p-6 border rounded-xl flex items-center gap-5">
						<Avatar
							size={50}
							halfRounded={false}
							imageSrc={
								"https://images.pexels.com/photos/23947602/pexels-photo-23947602/free-photo-of-a-woman-sitting-in-a-field-with-a-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
							}
							alt={"Eldorado"}
						/>
						<div>
							<p className="text-[1.7rem] font-medium">Kevin Gilbert</p>
							<p className="text-[1.5rem]">Chief Executive Officer</p>
						</div>
					</div>
					<div className="p-6 border rounded-xl flex items-center gap-5">
						<Avatar
							size={50}
							halfRounded={false}
							imageSrc={
								"https://images.pexels.com/photos/23947602/pexels-photo-23947602/free-photo-of-a-woman-sitting-in-a-field-with-a-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
							}
							alt={"Eldorado"}
						/>
						<div>
							<p className="text-[1.7rem] font-medium">Kevin Gilbert</p>
							<p className="text-[1.5rem]">Chief Executive Officer</p>
						</div>
					</div>
					<div className="p-6 border rounded-xl flex items-center gap-5">
						<Avatar
							size={50}
							halfRounded={false}
							imageSrc={
								"https://images.pexels.com/photos/23947602/pexels-photo-23947602/free-photo-of-a-woman-sitting-in-a-field-with-a-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
							}
							alt={"Eldorado"}
						/>
						<div>
							<p className="text-[1.7rem] font-medium">Kevin Gilbert</p>
							<p className="text-[1.5rem]">Chief Executive Officer</p>
						</div>
					</div>
				</div>
			</div>
			<div className="h-[450px] relative">
				<Image
					className="w-full h-full"
					width={1976}
					height={638}
					alt="Eldorado"
					src={"/services-banner.png"}
				/>
				<div className="w-full h-full absolute top-0">
					<div className="lg:w-[50%] xl:w-[35%] px-8 md:pr-0 md:pl-16 pt-10">
						<h3 className="text-[3rem] md:text-[4.5rem] font-bold text-white">
							Your trusted and reliable payment platform
						</h3>
						<p className="text-2xl text-white mt-7">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
							voluptatem eos delectus, voluptatibus laudantium ex ipsa, eaque
							perspiciatis animi consequatur non porro cupiditate? Animi dolorem
							nobis eius amet accusamus mollitia!
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
