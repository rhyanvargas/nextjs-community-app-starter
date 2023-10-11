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
	const sideBarStyles = `flex justify-start gap-3 ${styles ? styles : ""}}`;
	return (
		<Button className={sideBarStyles} variant="ghost" onClick={() => signOut()}>
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
