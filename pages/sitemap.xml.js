//pages/sitemap.xml.js
const EXTERNAL_DATA_URL =
  'https://daolens-strapi-dxrba.ondigitalocean.app/api/articles?pagination[start]=0&pagination[limit]=100';

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://www.daolens.com</loc>
     </url>
     <url>
       <loc>https://www.daolens.com/careers</loc>
     </url>
     <url>
       <loc>https://www.daolens.com/community</loc>
     </url>
     <url>
       <loc>https://www.daolens.com/dao-manager</loc>
     </url>
     <url>
     <loc>https://www.daolens.com/community-manager</loc>
     </url>
     <url>
       <loc>https://www.daolens.com/onboarding-tool</loc>
     </url>
     <url>
       <loc>https://www.daolens.com/blog</loc>
     </url>
          ${posts?.data
      .map((post) => {
        return `
       <url>
           <loc>${`https://www.daolens.com/blog/${post?.attributes?.slug}`}</loc>
       </url>
     `;
      })
      .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps = async ({ res }) => {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
