import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
		],
	},
};

const withBundleAnalyzerData = withBundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzerData(nextConfig);
