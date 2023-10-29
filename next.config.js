/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: process.env.API_URL,
  },
};

module.exports = nextConfig;
