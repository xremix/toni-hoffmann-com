const fs = require('node:fs');
const path = require('node:path');
const galleryConfig = require('./src/app/models/gallery-config.json');

const origin = 'https://www.toni-hoffmann.com';
const appIds = [
  'bunny-herbs', 'yapa-photo-video-cleaner', 'airport-weather',
  'pretty-gs1-scanner', 'smart-gs1-barcode-generator', 'geo-file-converter',
  'etf-saving-plan-calculator', 'boat-speedometer', 'curve-tracker',
  'mindful-focus', 'nautic-converter', 'cope-stress'
];

function escapeXml(value) {
  return value.replace(/[<>&"']/g, character => ({
    '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;'
  })[character]);
}

function getSites() {
  const sites = [
    { url: '/', priority: '1.00' },
    { url: '/photography/', priority: '1.00' }
  ];

  for (const album of galleryConfig.albums) {
    const images = JSON.parse(fs.readFileSync(
      path.join(__dirname, 'api', 'images', `${album}.json`), 'utf8'
    ));
    if (!Array.isArray(images) || !images.length ||
        images.some(image => !image || typeof image.url !== 'string' || !image.url ||
          typeof image.middleurl !== 'string' || !image.middleurl ||
          typeof image.title !== 'string' || !image.title.trim())) {
      throw new Error(`Invalid or empty image metadata for album ${album}`);
    }
    for (let offset = 0; offset < images.length; offset += galleryConfig.pageSize) {
      sites.push({
        url: `/photography/${album}/${offset / galleryConfig.pageSize + 1}/`,
        priority: '1.00',
        images: images.slice(offset, offset + galleryConfig.pageSize).map(image =>
          `${origin}/images/${album}/full/${encodeURIComponent(image.url)}`
        )
      });
    }
  }

  sites.push(
    { url: '/apps/', priority: '1.00' },
    ...appIds.map(id => ({ url: `/apps/${id}/`, priority: '1.00' })),
    ...['development', 'music'].map(id => ({ url: `/${id}/`, priority: '0.8' })),
    ...['contact', 'imprint', 'data-privacy'].map(id => ({ url: `/${id}/`, priority: '0.40' }))
  );
  return sites;
}

function buildSitemap(sites) {
  const urls = sites.map(site => {
    const images = (site.images || []).map(url =>
      `    <image:image><image:loc>${escapeXml(url)}</image:loc></image:image>`
    ).join('\n');
    return `  <url>
    <loc>${escapeXml(origin + site.url)}</loc>
    <priority>${site.priority}</priority>${images ? `\n${images}` : ''}
  </url>`;
  }).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;
}

if (require.main === module) {
  const sites = getSites();
  fs.writeFileSync(path.join(__dirname, 'src/sitemap.xml'), buildSitemap(sites));
  fs.writeFileSync(path.join(__dirname, 'routes.txt'),
    sites.map(site => site.url === '/' ? '/' : site.url.slice(0, -1)).join('\n') + '\n'
  );
  console.log('Generated src/sitemap.xml and routes.txt');
}

module.exports = { getSites, buildSitemap };
