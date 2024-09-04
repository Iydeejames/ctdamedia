import fs from 'fs';
import path from 'path';
import { SitemapStream, streamToPromise } from 'sitemap';

// Paths to React build and the sitemap file
const buildDir = path.join(process.cwd(), 'build');
const sitemapFile = path.join(buildDir, 'sitemap.xml');


if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir, { recursive: true });
}

// Create sitemap stream
const sitemap = new SitemapStream({ hostname: 'https://drdrone.ng/' });

const pages = [
  '/',
  '/Landingpage',
  '/Profile',
  '/ContactUs',
  '/Repair',
  '/Training',
];

//URLs to sitemap
pages.forEach(page => {
  sitemap.write({ url: page, changefreq: 'daily', priority: 0.7 });
});

sitemap.end();

// Write sitemap to file
streamToPromise(sitemap)
  .then(data => fs.writeFileSync(sitemapFile, data.toString()))
  .catch(err => console.error('Error generating sitemap:', err));
