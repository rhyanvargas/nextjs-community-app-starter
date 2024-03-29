import { BADGE_CRITERIA, CardQuestions } from "@/constants";

export interface NoResultProps {
	imageDark: string;
	imageLight: string;
	title: string;
	description: string;
	buttonText: string;
	buttonLink: string;
}
export type Author = {
	name: string;
	icon: string;
	lastAsked: string;
};
export type CardStat = {
	name: string;
	icon: string;
	value: string;
};
export interface CardQuestionI {
	_id: string;
	question: string;
	tags: string[];
	author: Author;
	stats: CardStat[];
}
export interface SidebarLink {
	imgURL: string;
	route: string;
	label: string;
}

export interface Job {
	id?: string;
	employer_name?: string;
	employer_logo?: string | undefined;
	employer_website?: string;
	job_employment_type?: string;
	job_title?: string;
	job_description?: string;
	job_apply_link?: string;
	job_city?: string;
	job_state?: string;
	job_country?: string;
}

export interface Country {
	name: {
		common: string;
	};
}

export interface ParamsProps {
	params: { id: string };
}

export interface SearchParamsProps {
	searchParams: { [key: string]: string | undefined };
}

export interface URLProps {
	params: { id: string };
	searchParams: { [key: string]: string | undefined };
}

export interface BadgeCounts {
	GOLD: number;
	SILVER: number;
	BRONZE: number;
}

export type BadgeCriteriaType = keyof typeof BADGE_CRITERIA;
