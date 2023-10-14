import Pill from "@/components/shared/primitives/Pill";
import SearchBar from "@/components/shared/search/SearchBar";
import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
	return (
		<>
			<div className="flex pt-16 dark:text-primary-100 flex-col xs:flex-row justify-between items-center">
				<h1 className="h1-bold order-2 xs:order-1">All Questions</h1>
				<Button className="primary-gradient px-4 py-3 w-[173px] xs:order-2">
					Ask Question
				</Button>
			</div>
			<div className="py-7 flex flex-col sm:flex-row md:flex-col gap-7 items-stretch">
				<SearchBar placeholder="Search for questions here..." />
				{/* TODO: Add Select dropdown filter */}
				<div className="md:hidden"> SELECT</div>
				<div className="items-center  hidden md:flex">
					{filters.map((filter, index) => (
						<Pill
							key={filter.name + index}
							path={filter.path}
							text={filter.name}
							size="large"
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default Home;

export const filters = [
	{
		path: "/",
		name: "New",
	},
	{
		path: "/",
		name: "Unanswered",
	},
	{
		path: "/",
		name: "Most Voted",
	},
	{
		path: "/",
		name: "Most Comments",
	},
];
