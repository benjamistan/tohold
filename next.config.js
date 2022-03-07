/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		loader: 'imgix',
		path: 'https://tokey.imgix.net',
	},
	reactStrictMode: true,
	experimental: {
		outputStandalone: true,
	},
};

module.exports = nextConfig;
