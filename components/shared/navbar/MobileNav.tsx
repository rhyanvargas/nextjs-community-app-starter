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
				className="background-light900_dark200 border-none"
				side={"left"}
			>
				<Logo />
				<div className="flex min-h-full flex-col justify-between">
					<SheetClose asChild>
						<>
							<SidebarNavContent isMobile />
							<SignInOutButtonGroup isMobile />
						</>
					</SheetClose>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
