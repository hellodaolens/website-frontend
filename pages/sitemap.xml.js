import { globby } from "globby";
import daoData from "../data.json";
//pages/sitemap.xml.js
const EXTERNAL_DATA_URL =
  "https://daolens-strapi-dxrba.ondigitalocean.app/api/articles?pagination[start]=0&pagination[limit]=100";

function addPage(page) {
  const path = page.replace("pages", "").replace(".js", "").replace(".mdx", "");
  const route =
    path === "/index"
      ? "/"
      : path.includes("/index")
      ? path.replace("/index", "")
      : path;

  return `  <url>
      <loc>${`https://www.daolens.com${route}`}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>`;
}

const getStaticPageSitemap = async () => {
  const pages = await globby([
    "pages/**/*.js",
    "!pages/_*.js",
    "!pages/api",
    "!pages/blog/[slug]/*",
    "!pages/discover-dao/[token]/*",
    "!pages/discover-dao/dao/*",
    "!pages/sitemap.xml.js",
  ]);

  return pages.map((page) => addPage(page)).join("");
};

const getBlogSitemap = async () => {
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();
  return posts?.data
    .map(
      (post) =>
        `
      <url>
        <loc>${`https://www.daolens.com/blog/${post?.attributes?.slug}`}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
      `
    )
    .join("");
};

const getDiscoverDaoSitemap = () => {
  const sitemap = daoData
    .map(
      (dao) =>
        `<url>
          <loc>https://www.daolens.com/discover-dao/${dao.attributes.title}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>1.0</priority>
        </url>`
    )
    .join("");
  return sitemap;
};

async function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${await getStaticPageSitemap()} 
    ${await getBlogSitemap()}
    ${getDiscoverDaoSitemap()}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps = async ({ res }) => {
  const sitemap = await generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
