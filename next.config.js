/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
};

module.exports = nextConfig;

// 002-04 canary-build marker: a build INPUT change so the builder cannot reuse the previous layer.

// 002-04 post-fix marker: exercise the fixed env sync end-to-end (build input change).

// 002-04 mirror-probe marker: a sync that CREATES an env var (the mirror trigger).
