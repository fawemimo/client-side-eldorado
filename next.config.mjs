/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		remotePatterns: [
			{ hostname: "flagcdn.com", protocol: "https" },
			{ hostname: "upload.wikimedia.org", protocol: "https" },
			{ hostname: "images.pexels.com", protocol: "https" },
			{
				hostname: "eldoradosp-users-bucket.s3.none.amazonaws.com",
				protocol: "https",
			},
		],
	},

	poweredByHeader: false,

	// async headers() {
	//     return [
	//         {
	//             source: "/(.*)",
	//             headers: [
	//                 // {
	//                 //     key: "X-Frame-Options",
	//                 //     value: "DENY",
	//                 // },
	//                 // {
	//                 //     key: "X-Content-Type-Options",
	//                 //     value: "nosniff",
	//                 // },
	//                 // {
	//                 //     key: "X-XSS-Protection",
	//                 //     value: "1; mode=block",
	//                 // },
	//                 // {
	//                 //     key: "Referrer-Policy",
	//                 //     value: "strict-origin-when-cross-origin",
	//                 // },
	//                 // {
	//                 //     key: "X-DNS-Prefetch-Control",
	//                 //     value: "on",
	//                 // },
	//                 // {
	//                 //     key: "Strict-Transport-Security",
	//                 //     value: "max-age=63072000; includeSubDomains; preload",
	//                 // },
	//                 // {
	//                 //     key: "Permissions-Policy",
	//                 //     value: "camera=(), microphone=(), geolocation=()",
	//                 // },
	//                 // {
	//                 //     key: "Cache-Control",
	//                 //     value: "public, max-age=31536000, immutable",
	//                 // },
	//             ],
	//         },
	//     ];
	// }
};

export default nextConfig;
