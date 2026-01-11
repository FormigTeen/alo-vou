import type { NextConfig } from "next";

// Support GitHub Pages base path provided by actions/configure-pages
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  // When deploying to GitHub Pages project sites, a base path is required
  // Example: "/<repo-name>". Locally and on normal hosts it stays empty.
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  // Safer static paths for GH Pages
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
