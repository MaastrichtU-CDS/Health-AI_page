
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for GitHub Pages
  output: 'export',

  // IMPORTANT: repository name
  basePath: '/Health-AI_page',
  assetPrefix: '/Health-AI_page',

  // Required because GitHub Pages is static
  images: {
    unoptimized: true,
  },

  // Works best with GitHub Pages
  trailingSlash: true,
};

module.exports = nextConfig;
