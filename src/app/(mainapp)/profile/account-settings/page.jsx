import AccountSettingForm from "@/components/page-components/profile/account-settings/AccountSettingForm";
import Avatar from "@/components/shared/Avatar";
import React from "react";

export default function page() {
	return (
		<>
			<div>
				<h1 className="text-[2rem] md:text-[3rem] font-bold">User Profile</h1>
			</div>
			<div className="w-full bg-white rounded-xl mt-10">
				<div className="p-6 border-b">
					<p className="text-2xl font-medium">ACCOUNT SETTINGS</p>
				</div>
				<div className="p-6 flex flex-col gap-y-16 items-center lg:items-start lg:flex-row">
					<div className="md:w-[25%] flex justify-center">
						<div className="hidden md:flex justify-center">
							<Avatar
								size={"176"}
								imageSrc={
									"https://images.pexels.com/photos/3746254/pexels-photo-3746254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
								}
								halfRounded={false}
							/>
						</div>
						<div className="flex md:hidden justify-center">
							<Avatar
								size={"96"}
								imageSrc={
									"https://images.pexels.com/photos/3746254/pexels-photo-3746254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
								}
								halfRounded={false}
							/>
						</div>
					</div>
					<AccountSettingForm />
				</div>
			</div>
		</>
	);
}
