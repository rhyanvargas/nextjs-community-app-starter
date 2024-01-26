import { CardQuestionI, SidebarLink } from "@/types";

export const CardQuestions: Array<CardQuestionI> = [
	{
		_id: "1",
		question:
			"The Lightning Component c:LWC_PizzaTracker generated invalid output for field status. Error How to solve this",
		tags: ["Nextjs", "tailwind"],
		author: {
			name: "John Doe",
			icon: "https://i.pravatar.cc/20",
			lastAsked: "• asked 2 days ago",
		},
		stats: [
			{
				name: "votes",
				icon: "/assets/icons/like.png",
				value: "200",
			},
			{
				name: "answers",
				icon: "/assets/icons/answers.png",
				value: "5",
			},
			{
				name: "views",
				icon: "/assets/icons/eye.png",
				value: "5.2k",
			},
		],
	},
	{
		_id: "2",
		question:
			"The Lightning Component c:LWC_PizzaTracker generated invalid output for field status. Error How to solve this",
		tags: ["Nextjs", "tailwind"],
		author: {
			name: "John Doe",
			icon: "https://i.pravatar.cc/20",
			lastAsked: "• asked 2 days ago",
		},
		stats: [
			{
				name: "votes",
				icon: "/assets/icons/like.png",
				value: "200",
			},
			{
				name: "answers",
				icon: "/assets/icons/answers.png",
				value: "5",
			},
			{
				name: "views",
				icon: "/assets/icons/eye.png",
				value: "5.2k",
			},
		],
	},
	{
		_id: "3",
		question:
			"The Lightning Component c:LWC_PizzaTracker generated invalid output for field status. Error How to solve this",
		tags: ["Nextjs", "tailwind"],
		author: {
			name: "John Doe",
			icon: "https://i.pravatar.cc/20",
			lastAsked: "• asked 2 days ago",
		},
		stats: [
			{
				name: "votes",
				icon: "/assets/icons/like.png",
				value: "200",
			},
			{
				name: "answers",
				icon: "/assets/icons/answers.png",
				value: "5",
			},
			{
				name: "views",
				icon: "/assets/icons/eye.png",
				value: "5.2k",
			},
		],
	},
];
export const themes = [
	{ value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
	{ value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
	{ value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const buttonBaseSyle =
	"small-medium min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none gap-2";

export const buttonStyleVariants = {
	primary: `${buttonBaseSyle} light-border-2 btn-tertiary text-dark400_light900`,
	secondary: `btn-secondary ${buttonBaseSyle} `,
};

export const sidebarLinks: SidebarLink[] = [
	{
		imgURL: "/assets/icons/home.svg",
		route: "/",
		label: "Home",
	},
	{
		imgURL: "/assets/icons/users.svg",
		route: "/community",
		label: "Community",
	},
	{
		imgURL: "/assets/icons/star.svg",
		route: "/collection",
		label: "Collections",
	},
	{
		imgURL: "/assets/icons/suitcase.svg",
		route: "/jobs",
		label: "Find Jobs",
	},
	{
		imgURL: "/assets/icons/tag.svg",
		route: "/tags",
		label: "Tags",
	},
	{
		imgURL: "/assets/icons/question.svg",
		route: "/ask-question",
		label: "Ask a question",
	},
];

export const BADGE_CRITERIA = {
	QUESTION_COUNT: {
		BRONZE: 10,
		SILVER: 50,
		GOLD: 100,
	},
	ANSWER_COUNT: {
		BRONZE: 10,
		SILVER: 50,
		GOLD: 100,
	},
	QUESTION_UPVOTES: {
		BRONZE: 10,
		SILVER: 50,
		GOLD: 100,
	},
	ANSWER_UPVOTES: {
		BRONZE: 10,
		SILVER: 50,
		GOLD: 100,
	},
	TOTAL_VIEWS: {
		BRONZE: 1000,
		SILVER: 10000,
		GOLD: 100000,
	},
};
