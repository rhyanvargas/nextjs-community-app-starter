/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ["lucide-react"], // Enable Dynamic import of lucide-react
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.pravatar.cc",
				port: "",
				pathname: "/**",
			},
		],
	},
};

module.exports = nextConfig;
