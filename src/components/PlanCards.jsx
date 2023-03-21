import React, { useState } from "react";
import arcade from "../../public/assets/images/arcade.svg";
import advanced from "../../public/assets/images/advanced.svg";
import pro from "../../public/assets/images/pro.svg";

export const PlanCards = () => {
	const [plan, setPlan] = useState(1);
	return (
		<div className="flex flex-col md:flex-row gap-3 md:gap-5 justify-between">
			<div className="md:w-[138px] rounded-lg border border-light-gray hover:border-purple hover:cursor-pointer p-4 flex flex-row md:flex-col gap-4 md:gap-10 items-center md:items-start">
				<div className="bg-orange w-10 h-10  rounded-full flex items-center justify-center">
					<img src={arcade} />
				</div>
				<div>
					<h4>Arcade</h4>
					<p className="text-cool-gray mt-2 text-sm">$9/mo</p>
				</div>
			</div>
			<div className="md:w-[138px] rounded-lg border border-light-gray hover:border-purple hover:cursor-pointer p-4 flex flex-row md:flex-col gap-4 md:gap-10 items-center md:items-start">
				<div className="bg-pink w-10 h-10  rounded-full flex items-center justify-center">
					<img src={advanced} />
				</div>
				<div>
					<h4>Advanced</h4>
					<p className="text-cool-gray mt-2 text-sm">$12/mo</p>
				</div>
			</div>
			<div className="md:w-[138px] rounded-lg border border-light-gray hover:border-purple hover:cursor-pointer p-4 flex flex-row md:flex-col gap-4 md:gap-10 items-center md:items-start">
				<div className="bg-purple w-10 h-10  rounded-full flex items-center justify-center">
					<img src={pro} />
				</div>
				<div>
					<h4>Pro</h4>
					<p className="text-cool-gray mt-2 text-sm">$15/mo</p>
				</div>
			</div>
		</div>
	);
};
