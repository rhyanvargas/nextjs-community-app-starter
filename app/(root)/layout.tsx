import Navbar from "@/components/shared/navbar/Navbar";
import LeftSideBar from "@/components/shared/sidebar/LeftSideBar";
import RightSideBar from "@/components/shared/sidebar/RightSideBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="background-light850_dark100 relative">
			<Navbar />
			<div className="flex relative">
				<LeftSideBar />
				<section className="flex min-h-screen flex-1 flex-col px-6 sm:px-10 pt-[104px]">
					{children}
				</section>
				<RightSideBar />
			</div>
		</main>
	);
};

export default Layout;
