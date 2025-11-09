import type { NextConfig } from "next";

const repoName = "Keyboard-Shortcuts"; // ✅ your repo

const nextConfig: NextConfig = {
  output: "export",

  // ✅ REQUIRED for GitHub Pages
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,

  images: {
    unoptimized: true,
  },

  // ✅ avoids 404s on GitHub pages for nested routes
  trailingSlash: true,
};

export default nextConfig;
