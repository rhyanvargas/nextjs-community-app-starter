import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { SignOutButton } from "../primitives/SignOutButton";
import Image from "next/image";

export const SignInOutButtonGroup = ({ isMobile = false }) => {
	const buttonLabelStyles = isMobile ? "" : "hidden md:inline";
	const buttonBaseSyle =
		"small-medium min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none gap-2";
	const buttonStyleVariants = {
		primary: `${buttonBaseSyle} light-border-2 btn-tertiary text-dark400_light900`,
		secondary: `${buttonBaseSyle} btn-secondary`,
	};
	const iconStyles = `h-4 w-4 invert-colors`;

	return (
		<>
			<section className="flex flex-col gap-3 pb-10">
				<SignedOut>
					<Button asChild className={buttonStyleVariants.secondary}>
						<Link href={"/sign-in"}>
							<Image
								className={iconStyles}
								src={"/assets/icons/sign-in.svg"}
								alt={"Log in"}
								width={18}
								height={18}
							/>
							<span className={`${buttonLabelStyles} primary-text-gradient`}>
								Log In
							</span>
						</Link>
					</Button>

					<Button
						asChild
						variant={"outline"}
						className={buttonStyleVariants.primary}
					>
						<Link href={"/sign-up"}>
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
				<SignedIn>
					<SignOutButton isMobile />
				</SignedIn>
			</section>
		</>
	);
};
