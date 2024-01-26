import { NoResult } from "@/components/shared/NoResult";
import CardQuestion from "@/components/shared/card-question/CardQuestion";
import Filter from "@/components/shared/filter/Filter";
import SearchBar from "@/components/shared/search/SearchBar";
import { Button } from "@/components/ui/button";
import { CardQuestions, NoResultInfoQuestions } from "@/constants";
import { QuestionFilters } from "@/constants/filters";
import React from "react";

const Home = () => {
	const CardList = CardQuestions.map((card) => {
		return (
			<CardQuestion
				key={card._id + card.question}
				_id={card._id}
				question={card.question}
				tags={card.tags}
				stats={card.stats}
				author={card.author}
			/>
		);
	});
	//TODO: remove after testing
	// const CardList = null;
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
				<Filter filterList={QuestionFilters} />
			</div>
			<div className="flex flex-col items-start gap-6 justify-center">
				{CardList ? CardList : <NoResult {...NoResultInfoQuestions} />}
			</div>
		</>
	);
};

export default Home;
