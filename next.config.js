/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
};

module.exports = nextConfig;

// 002-04 canary-build marker: a build INPUT change so the builder cannot reuse the previous layer.
