import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { NoResultProps } from "@/types";

export const NoResult = ({
	imageDark,
	imageLight,
	title,
	description,
	buttonText,
	buttonLink,
}: NoResultProps) => {
	const ImageIllustration = (
		<>
			<Image
				className="hidden dark:block"
				alt={buttonText}
				src={imageDark}
				width={269}
				height={200}
			/>
			<Image
				className="dark:hidden"
				alt={buttonText}
				src={imageLight}
				width={269}
				height={200}
			/>
		</>
	);

	return (
		<div className="flex gap-7 flex-col items-center self-center">
			{ImageIllustration}
			<div className="flex flex-col gap-3 items-center text-center w-96">
				<h2>{title}</h2>
				<p>{description}</p>
				<div className="flex justify-between items-center pr-2">
					<Button className="primary-gradient px-4 py-3" asChild>
						<Link href={`${buttonLink}`}>
							<p>{buttonText}</p>
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};
