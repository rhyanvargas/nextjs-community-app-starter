import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
	return (
		<Link href={"/"} className="flex items-center gap-1">
			<Image
				src="/assets/images/site-logo.svg"
				alt="Logo"
				width={23}
				height={23}
			/>
			<p className="h2-bold text-dark100_light900 font-spaceGrotesk ">
				3D <span className="text-primary-500">Flow</span>
			</p>
		</Link>
	);
};

export default Logo;
