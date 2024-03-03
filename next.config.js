/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? '' : undefined,
};

module.exports = nextConfig;
