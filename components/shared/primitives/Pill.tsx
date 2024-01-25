import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface PillProps {
	path: string;
	text: string;
	size?: "large" | "base";
}

const Pill = ({ path, text, size = "base" }: PillProps) => {
	const buttonStyles = {
		base: "btn-tertiary min-h-fit h-auto px-4 py-2 w-auto",
		large: "btn-tertiary min-h-fit h-auto px-6 py-3 w-auto",
	};
	const textStyles = {
		base: "text-light-500 text-xs capitalize mr-2 font-medium leading-none",
		large: "text-light-500 text-sm capitalize mr-2 font-medium leading-none",
	};
	return (
		<div className="flex justify-between items-center pr-2">
			<Button className={`${buttonStyles[size]}`} asChild>
				<Link href={`${path}`}>
					<p className={`${textStyles[size]}`}>{text}</p>
				</Link>
			</Button>
		</div>
	);
};

export default Pill;
