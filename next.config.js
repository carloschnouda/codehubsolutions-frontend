/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        // Next 16 blocks optimizing images from local IPs; only allow it for the local backend in dev
        dangerouslyAllowLocalIP: process.env.NODE_ENV === 'development',
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '127.0.0.1',
            },
            {
                protocol: 'https',
                hostname: 'admin.codehubsolutions.net',
            }
        ],
    }
}

module.exports = nextConfig
