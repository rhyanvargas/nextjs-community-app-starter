"use client";
import React from "react";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { SidebarNavContent } from "../sidebar/SidebarNavContent";
import { SignInOutButtonGroup } from "../primitives/SignInOutButtonGroup";
import Logo from "./Logo";
import { SignedIn } from "@clerk/nextjs";
import { SignOutButton } from "../primitives/SignOutButton";

const MobileNav = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Image
					src={"/assets/icons/hamburger.svg"}
					width={36}
					height={36}
					alt="Mobile menu"
					className="invert-colors sm:hidden"
				/>
			</SheetTrigger>
			<SheetContent
				className="background-light900_dark200 border-none pb-10 min-w-fit max-w-[260px]"
				side={"left"}
			>
				<Logo />
				<div className="flex min-h-full flex-col justify-between pb-10">
					<SheetClose asChild>
						<>
							<SidebarNavContent isMobile />
							<SignInOutButtonGroup isMobile />
							<SignedIn>
								<SignOutButton isMobile />
							</SignedIn>
						</>
					</SheetClose>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
