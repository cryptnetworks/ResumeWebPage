/* eslint-env node */

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isProjectPages = isGithubActions && repoName && !repoName.endsWith('.github.io');
const basePath = isProjectPages ? `/${repoName}` : '';

const nextConfig = {
  assetPrefix: basePath,
  compress: true,
  generateEtags: true,
  output: 'export',
  pageExtensions: ['tsx', 'mdx', 'ts'],
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  trailingSlash: false,
  basePath,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;
