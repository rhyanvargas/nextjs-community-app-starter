import React from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import ThemePicker from "./ThemePicker";
import MobileNav from "./MobileNav";
import Logo from "./Logo";
import SearchBar from "../search/SearchBar";

const Navbar = () => {
	return (
		<nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
			<Logo />
			<SearchBar
				className="max-w-[600px] max-lg:hidden"
				placeholder="Search the website here..."
			/>

			<div className="flex-between gap-5">
				<ThemePicker />
				<MobileNav />

				<SignedIn>
					<UserButton
						afterSignOutUrl="/"
						appearance={{
							elements: {
								avatarBox: "h-10 w-10",
							},
							variables: {
								colorPrimary: "#ff7000",
							},
						}}
					/>
				</SignedIn>
			</div>
		</nav>
	);
};

export default Navbar;
