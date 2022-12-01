export default function handler(req, res) {
  res.send(`User-agent: *
Allow: /

Disallow: /index

Sitemap: *Insert URL of Sitemap after it has been generated*`)
}
