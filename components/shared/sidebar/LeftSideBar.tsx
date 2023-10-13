"use client";
import React from "react";

import { SidebarNavContent } from "./SidebarNavContent";
import { SignInOutButtonGroup } from "../primitives/SignInOutButtonGroup";
import { SignedIn } from "@clerk/nextjs";
import { SignOutButton } from "../primitives/SignOutButton";

interface LeftSideBarProps {
	styles?: any;
}
const LeftSideBar = ({ styles }: LeftSideBarProps) => {
	const sideBarStyles = `max-sm:hidden background-light900_dark200 fixed lg:w-auto flex min-h-full flex-col gap-6 pt-16 sm:px-2 md:px-4 lg:px-6 justify-between pb-10 ${
		styles ? styles : ""
	}`;

	return (
		<aside className={sideBarStyles}>
			<SidebarNavContent />
			<SignInOutButtonGroup />
			<SignedIn>
				<SignOutButton />
			</SignedIn>
		</aside>
	);
};

export default LeftSideBar;
