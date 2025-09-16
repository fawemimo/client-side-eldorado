import AccountSettingForm from "@/components/page-components/profile/account-settings/AccountSettingForm";
import ChangePasswordForm from "@/components/page-components/profile/change-password/ChangePasswordForm";
import Avatar from "@/components/shared/Avatar";
import React from "react";

export default function page() {
	return (
		<>
			<div>
				<h1 className="text-[2rem] md:text-[3rem] font-bold">
					ACCOUNT PASSWORD
				</h1>
			</div>
			<div className="w-full bg-white rounded-xl mt-10">
				<div className="p-6 border-b">
					<p className="text-2xl font-medium">CHANGE ACCOUNT PASSWORD</p>
				</div>
				<div className="p-6">
					<ChangePasswordForm />
				</div>
			</div>
		</>
	);
}
