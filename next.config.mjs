/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'wordpress.kevinboere.nl',
        },
      ],
    },
};

export default nextConfig;
