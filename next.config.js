/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    url: process.env.URL,
  },
  publicRuntimeConfig: {
    url: process.env.URL,
  },
  serverRuntimeConfig: {
    url: process.env.URL,
  },
};

module.exports = nextConfig;
