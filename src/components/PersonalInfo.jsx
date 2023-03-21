import React from "react";
import { NextButton } from "./NextButton";

export const PersonalInfo = () => {
	return (
		<div className="px-4 md:px-24 text-marine -mt-20 md:mt-0">
			<form>
				<div className="py-8 px-6 md:px-0 bg-white rounded-xl">
					<h1 className="text-3xl font-bold">Personal Info</h1>
					<p className="text-cool-gray mt-3 mb-8">
						Please provide your name, email address, and phone number.
					</p>
					<div className="mb-6">
						<label className="text-sm" htmlFor="name">
							Name
						</label>
						<input
							className="border rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-purple border-light-gray mt-2"
							id="name"
							type="text"
							placeholder="e.g. Stephen King"
						/>
					</div>
					<div className="mb-6">
						<label className="text-sm" htmlFor="email">
							Email Address
						</label>
						<input
							className="border rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-purple border-light-gray mt-2"
							id="email"
							type="email"
							placeholder="e.g. stephenking@lorem.com"
						/>
					</div>
					<div className="mb-6">
						<label className="text-sm" htmlFor="phone">
							Phone Number
						</label>
						<input
							className="border rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-purple border-light-gray mt-2"
							id="phone"
							type="number"
							placeholder="e.g. +1 234 567 890"
						/>
					</div>
				</div>

				<div className="absolute md:relative flex items-center justify-end md:mt-20 py-4 bg-white px-4 md:px-0 w-full bottom-0 left-0">
					<NextButton />
				</div>
			</form>
		</div>
	);
};
