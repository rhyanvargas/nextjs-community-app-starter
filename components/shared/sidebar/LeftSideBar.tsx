"use client";
import React from "react";

import { SidebarNavContent } from "./SidebarNavContent";
import { SignInOutButtonGroup } from "../primitives/SignInOutButtonGroup";

interface LeftSideBarProps {
	styles?: any;
}
const LeftSideBar = ({ styles }: LeftSideBarProps) => {
	const sideBarStyles = `flex min-h-full flex-col gap-6 pt-16 sm:px-2 md:px-4 lg:px-6 justify-between ${
		styles ? styles : ""
	}`;

	return (
		<aside className={sideBarStyles}>
			<SidebarNavContent />
			<SignInOutButtonGroup />
		</aside>
	);
};

export default LeftSideBar;
