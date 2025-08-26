import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                port: "",
                pathname: "/dinmaegler/image/upload/**",
                search: "",
            },
        ],
    },
};

export default nextConfig;
