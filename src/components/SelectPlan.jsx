import React from "react";
import { NextButton } from "./NextButton";
import { BackButton } from "./BackButton";
import { PlanCards } from "./PlanCards";
import { Toggle } from "./Toggle";

export const SelectPlan = () => {
	return (
		<div className="flex-grow px-4 lg:px-24 text-marine -mt-20 md:mt-0">
			<div className="py-8 px-6 md:px-0 bg-white rounded-xl">
				<h1 className="text-3xl font-bold">Select your plan</h1>
				<p className="text-cool-gray mt-3 mb-6 md:mb-8">
					You have the option of monthly or yearly billing.
				</p>
				<PlanCards />
				<Toggle />
			</div>

			<div className="absolute md:relative flex items-center justify-between md:mt-20 py-4 bg-white px-4 md:px-0 w-full bottom-0 left-0">
				<BackButton />
				<NextButton />
			</div>
		</div>
	);
};
