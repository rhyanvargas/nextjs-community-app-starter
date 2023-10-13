import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RightSideBar = () => {
	const titleStyles = "px-2 font-semibold pb-4";
	return (
		<aside className="gap-10 pb-6 px-3 pt-32 hidden xl:flex flex-col sticky right-0 top-0 w-[266px] min-h-screen background-light900_dark200 ">
			<section className="flex flex-col">
				<h3 className={titleStyles}>Top Questions</h3>
				{topQuestions.map((question, index) => (
					<TopQuestionRow key={index} question={question.question} />
				))}
			</section>
			<section className="flex flex-col gap-y-3">
				<h3 className={titleStyles}>Popular Tags</h3>
				{tags.map((tag, index) => (
					<PopularTagRow
						key={tag.count + index}
						tag={tag.name}
						path={tag.path}
						count={tag.count}
					/>
				))}
			</section>
		</aside>
	);
};
export default RightSideBar;

export const PopularTagRow = ({
	path,
	tag,
	count,
}: {
	path: string;
	tag: string;
	count: string;
}) => (
	<div className="flex justify-between items-center px-2">
		<Button
			className={`btn-tertiary min-h-fit h-auto px-4 py-2 w-auto`}
			asChild
		>
			<Link href={`${path}`}>
				<p className="text-light-500 text-xs uppercase mr-2 font-light">
					{tag}
				</p>
			</Link>
		</Button>
		<p className="text-xs mr-2 font-light">{count}</p>
	</div>
);

export const TopQuestionRow = ({ question }: { question: string }) => (
	<Button className="h-auto px-2" asChild variant={"ghost"}>
		<Link href="/">
			<p className="text-xs mr-2 font-light">{question}</p>
			<Image
				src="/assets/icons/chevron-right.svg"
				alt="chevron-right"
				width={18}
				height={18}
			/>
		</Link>
	</Button>
);

export const topQuestions = [
	{
		url: "/",
		question:
			"Would it be appropriate to point out an error in another paper during a report?",
	},
	{
		url: "/",
		question:
			"How can an airconditioning machine be made to work as a refrigerator?",
	},
	{
		url: "/",
		question: "How can I get a job in the US as a foreigner?",
	},
	{
		url: "/",
		question:
			"Why is the speed of light considered constant despite acceleration?",
	},
	{
		question: "What is the difference between a 'closure' and a 'lambda'?",
	},
];

export const tags = [
	{
		path: "/",
		name: "Javascript",
		count: `+6315`,
	},
	{
		path: "/",
		name: "CSS",
		count: `+5315`,
	},
	{
		path: "/",
		name: "HTML",
		count: `+4315`,
	},
	{
		path: "/",
		name: "SQL",
		count: `+3415`,
	},
	{
		path: "/",
		name: "PRISMA",
		count: `+1315`,
	},
];
