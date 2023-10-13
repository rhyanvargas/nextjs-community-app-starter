import Image from "next/image";
import { Input } from "@/components/ui/input";

import React from "react";

const GlobalSearch = () => {
	return (
		<div className="relative w-full max-w-[600px] max-lg:hidden">
			<div className="background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
				<Image
					className="cursor-pointer"
					src="/assets/icons/search.svg"
					width={24}
					height={24}
					alt="search"
				/>
				<Input
					type="text"
					placeholder="Search globally"
					value={""}
					className="paragraph-regular no-focus placeholder bg-currentColor border-none shadow-none outline-none"
				/>
			</div>
		</div>
	);
};

export default GlobalSearch;