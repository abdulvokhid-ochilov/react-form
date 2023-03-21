import React from "react";
import { Sidebar } from "../components/Sidebar";
import { PersonalInfo } from "../components/PersonalInfo";
import { SelectPlan } from "../components/SelectPlan";

export const FormPage = () => {
	return (
		<div className="mx-auto w-[940px] md:bg-white rounded-2xl md:p-4 shadow-xl flex flex-col md:flex-row">
			<Sidebar />
			{/* <PersonalInfo /> */}
			<SelectPlan />
		</div>
	);
};
