import React, { useState } from "react";

export const Toggle = () => {
	const [toggle, setToggle] = useState(true);
	const toggleClass = " transform translate-x-4";
	return (
		<div className="flex flex-row items-center gap-6 bg-alabaster rounded-lg py-3 mt-6 md:mt-8 justify-center">
			<p className="font-bold text-sm transform duration-300 ease-in-out">
				Monthly
			</p>
			<div
				className=" w-9 h-5 flex items-center bg-marine rounded-full p-1 cursor-pointer"
				onClick={() => {
					setToggle(!toggle);
				}}
			>
				{/* Switch */}
				<div
					className={
						"bg-white w-3 h-3 rounded-full transform duration-300 ease-in-out" +
						(toggle ? null : toggleClass)
					}
				></div>
			</div>
			<p className="text-cool-gray font-bold text-sm transform duration-300 ease-in-out">
				Yearly
			</p>
		</div>
	);
};
