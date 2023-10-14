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
		large: "btn-tertiary min-h-fit h-auto px-6 py-3 w-auto",
		base: "btn-tertiary min-h-fit h-auto px-4 py-2 w-auto",
	};
	return (
		<div className="flex justify-between items-center px-2">
			<Button className={`${buttonStyles[size]}`} asChild>
				<Link href={`${path}`}>
					<p className="text-light-500 text-xs uppercase mr-2 font-light">
						{text}
					</p>
				</Link>
			</Button>
		</div>
	);
};

export default Pill;
