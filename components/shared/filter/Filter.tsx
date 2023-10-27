import React from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import Pill from "../primitives/Pill";
import Icon from "../Icon";

interface FilterProps {
	filterList: { name: string; value: string }[];
	placeholder?: string;
	iconImage?: string;
	selectTriggerStyles?: string;
}
const Filter = ({
	filterList,
	placeholder = "Select Filter...",
	selectTriggerStyles = "",
}: FilterProps) => {
	return (
		<>
			<div className="md:hidden flex items-center ">
				<Select>
					<SelectTrigger
						className={`text-light-500 w-[180px] h-full background-light800_darkgradient border-none focus:ring-primary-500 dark:focus:ring-primary-500 ${selectTriggerStyles}`}
					>
						<div className="gap-2 flex items-center text-dark-100 dark:text-light-900 font-medium">
							<Icon
								size={16}
								className="stroke-light-500 stroke-1"
								name="filter"
							/>
							<SelectValue placeholder={placeholder} />
						</div>
					</SelectTrigger>
					<SelectContent className="text-light-500">
						{filterList.map((filter, index) => (
							<SelectItem
								className="active:text-primary-500 hover:text-primary-500  dark:hover:text-primary-500 dark:active:text-primary-500 dark:focus:text-primary-500 dark:text-light-500 focus:text-primary-500"
								key={filter.name + index}
								value={filter.name}
							>
								{filter.name}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
			<div className="items-center hidden md:flex">
				{filterList.map((filter, index) => (
					<Pill
						key={filter.name + index}
						path={filter.value}
						text={filter.name}
						size="large"
					/>
				))}
			</div>
		</>
	);
};

export default Filter;
