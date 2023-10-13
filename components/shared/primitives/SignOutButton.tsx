import { Button } from "@/components/ui/button";
import { useClerk } from "@clerk/clerk-react";
import Image from "next/image";

interface LeftSideBarProps {
	styles?: any;
	withIcon?: boolean;
	isMobile?: boolean;
}
export const SignOutButton = ({
	styles,
	withIcon = true,
	isMobile = false,
}: LeftSideBarProps) => {
	const { signOut } = useClerk();
	const buttonStyles = `${isMobile ? "flex max-w-[186px]" : ""} ${
		styles ? styles : ""
	} gap-3 justify-start`;
	return (
		<Button className={buttonStyles} variant="ghost" onClick={() => signOut()}>
			<Image
				className={"invert-colors"}
				src={"/assets/icons/logout.svg"}
				alt={"Log out"}
				width={20}
				height={20}
			/>
			<p className={`${isMobile ? "" : "md:inline hidden "}`}>Logout</p>
		</Button>
	);
};
