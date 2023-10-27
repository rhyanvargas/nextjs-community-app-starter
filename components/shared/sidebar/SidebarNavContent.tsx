import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const SidebarNavContent = ({ isMobile = false }) => {
	const pathname = usePathname();
	const buttonLabelStyles = isMobile ? "" : "hidden md:inline";
	const buttonStyles = `${
		isMobile
			? " w-full max-w-[190px] justify-start"
			: "md:justify-start hidden sm:flex max-md:w-12"
	}`;
	return (
		<>
			<section className="flex h-full flex-col gap-6 pt-16 w-auto">
				{sidebarLinks.map((item) => {
					const isActive =
						(pathname.includes(item.route) && item.route.length > 1) ||
						pathname === item.route;

					return (
						<Button
							key={item.label}
							className={buttonStyles}
							variant={"ghost"}
							asChild
						>
							<Link
								href={item.route}
								className={`${
									isActive
										? "primary-gradient rounded-lg text-light-900"
										: "text-dark300_light900"
								}
            flex items-center justify-start gap-4 bg-transparent p-4`}
							>
								<Image
									className={`${isActive ? " " : "invert-colors"}`}
									src={item.imgURL}
									alt={item.label}
									width={20}
									height={20}
								/>
								<p
									className={`${
										isActive ? "base-bold" : "base-medium"
									} ${buttonLabelStyles}`}
								>
									{item.label}
								</p>
							</Link>
						</Button>
					);
				})}
			</section>
		</>
	);
};
