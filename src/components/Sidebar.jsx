import React from "react";

export const Sidebar = () => {
	return (
		<div className="bg-mobile md:bg-desktop md:w-[274px] md:min-h-full pt-8 pb-28 md:p-8 md:rounded-xl bg-center bg-no-repeat bg-cover font-bold text-sm text-white uppercase flex flex-row justify-center md:justify-start md:flex-col gap-8">
			<div className="flex flex-row items-center gap-4">
				<span className="border rounded-full w-8 h-8 flex items-center justify-center">
					1
				</span>
				<div className="hidden md:block">
					<span className="text-xs font-light text-blue">step 1</span>
					<h4 className="tracking-widest">Your info</h4>
				</div>
			</div>
			<div className="flex flex-row items-center gap-4">
				<span className="border rounded-full w-8 h-8 flex items-center justify-center">
					2
				</span>
				<div className="hidden md:block">
					<span className="text-xs font-light text-blue">step 2</span>
					<h4 className="tracking-widest">select plan</h4>
				</div>
			</div>
			<div className="flex flex-row items-center gap-4">
				<span className="border rounded-full w-8 h-8 flex items-center justify-center">
					3
				</span>
				<div className="hidden md:block">
					<span className="text-xs font-light text-blue">step 3</span>
					<h4 className="tracking-widest">adds-on</h4>
				</div>
			</div>
			<div className="flex flex-row items-center gap-4">
				<span className="border rounded-full w-8 h-8 flex items-center justify-center">
					4
				</span>
				<div className="hidden md:block">
					<span className="text-xs font-light text-blue">step 4</span>
					<h4 className="tracking-widest">summary</h4>
				</div>
			</div>
		</div>
	);
};
