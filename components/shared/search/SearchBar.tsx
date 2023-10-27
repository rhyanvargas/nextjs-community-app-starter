import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

interface SearchBarProps {
	className?: string;
	placeholder?: string;
	iconPosition?: "left" | "right";
	iconImage?: string;
}

const SearchBar = ({
	className = "",
	placeholder = "Enter something...",
	iconPosition = "left",
	iconImage = "/assets/icons/search.svg",
}: SearchBarProps) => {
	const styles = `background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4 focus:ring-primary-500 ${className}`;
	return (
		<div className={styles}>
			{iconPosition === "left" && (
				<Image
					className="cursor-pointer"
					src={iconImage}
					width={24}
					height={24}
					alt={placeholder}
				/>
			)}
			<Input
				type="text"
				placeholder={placeholder}
				value={""}
				className="text-light-500 paragraph-regular no-focus placeholder background-light800_darkgradient  border-none shadow-none outline-none"
			/>
		</div>
	);
};

export default SearchBar;
