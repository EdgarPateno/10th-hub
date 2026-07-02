/** @type {import('next').NextConfig} */

// On GitHub Pages the site is served from a subpath (…/10th-hub). The workflow
// sets PAGES_BASE_PATH=/10th-hub during the CI build; locally it stays empty so
// `npm run dev` / `npm start` behave normally at the domain root.
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  // Emit a fully static site into ./out (no Node server needed on Pages).
  output: "export",
  basePath,
  // Pages serves each route as a folder/index.html.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
