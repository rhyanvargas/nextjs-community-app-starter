import React from "react";
import Pill from "../primitives/Pill";
import Image from "next/image";
import { CardQuestionI } from "@/types";

const CardQuestion = ({ question, tags, stats, author }: CardQuestionI) => {
	const spanStyles = {
		base: "inline-block align-middle text-sm",
		capital: "inline-block align-middle text-sm capitalize",
		med: "inline-block align-middle text-sm font-medium",
	};
	const TagList = tags?.map((tag, index) => {
		return <Pill key={tag + index} path="/" text={tag} />;
	});
	const StatList = stats.map((stat) => {
		return (
			<div key={stat.name} className="flex gap-[2px] items-center">
				<Image alt={stat.name} src={stat.icon} width={17} height={17} />
				<span className={`${spanStyles.med}`}>{stat.value}</span>
				<span className={`${spanStyles.capital}`}>{stat.name}</span>
			</div>
		);
	});

	return (
		<div className="card-wrapper flex flex-col gap-6">
			<div className="gap-2 flex flex-col w-[618px]">
				<h3>{question}</h3>
				<div className="flex justify-start">{TagList && TagList}</div>
			</div>
			<div className="flex justify-between">
				<div className="flex gap-1 align-middle">
					<Image
						className="rounded-full"
						alt={author.name}
						src={author.icon}
						width={20}
						height={20}
					/>
					<span className={`${spanStyles.med}`}>{author.name}</span>
					<span className={`${spanStyles.base}`}>{author.lastAsked}</span>
				</div>
				<div className="flex gap-2">{StatList && StatList}</div>
			</div>
		</div>
	);
};

export default CardQuestion;
