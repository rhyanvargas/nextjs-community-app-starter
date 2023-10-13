import { Button } from "@/components/ui/button";
import { SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { buttonStyleVariants } from "@/constants";

export const SignInOutButtonGroup = ({ isMobile = false }) => {
	const buttonLabelStyles = isMobile ? "" : "hidden md:flex";
	const iconStyles = `h-4 w-4 invert-colors md:hidden`;
	const linkStyles = `${buttonStyleVariants.secondary} ${
		isMobile ? "w-[186px]" : ""
	} justify-start flex items-center`;

	return (
		<>
			<section className="flex flex-col gap-3 w-auto">
				<SignedOut>
					<Button asChild>
						<Link
							className={`${buttonStyleVariants.primary} ${linkStyles}`}
							href={"/sign-in"}
						>
							<Image
								className={iconStyles}
								src={"/assets/icons/account.svg"}
								alt={"Log in"}
								width={18}
								height={18}
							/>
							<span className={`${buttonLabelStyles} primary-text-gradient`}>
								Log In
							</span>
						</Link>
					</Button>

					<Button asChild variant={"outline"}>
						<Link
							className={`${linkStyles} ${buttonStyleVariants.secondary}`}
							href={"/sign-up"}
						>
							<Image
								className={iconStyles}
								src={"/assets/icons/sign-up.svg"}
								alt={"Log out"}
								width={18}
								height={18}
							/>
							<span className={`${buttonLabelStyles}`}>Sign up</span>
						</Link>
					</Button>
				</SignedOut>
			</section>
		</>
	);
};
