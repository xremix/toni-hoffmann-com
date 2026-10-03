const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { getSites } = require('./generate-sitemap');
const { getPhotoPath, getPhotoDescription } = require('./src/app/models/photo-utils.ts');
const { albums, pageSize } = require('./src/app/models/gallery-config.json');

test('prerendered photo pages contain actual images and context, not just metadata', () => {
  const base = 'dist/toni-hoffmann-com/browser';
  const sites = getSites();
  let count = 0;
  for (const album of albums) {
    const photos = JSON.parse(fs.readFileSync(`api/images/${album}.json`, 'utf8'));
    for (const [index, photo] of photos.entries()) {
      const path = getPhotoPath(album, photo);
      const html = fs.readFileSync(`${base}${path}index.html`, 'utf8');
      const script = html.match(/<script[^>]*id="photo-structured-data"[^>]*>([\s\S]*?)<\/script>/);
      assert.ok(script, `Missing image schema: ${path}`);
      const schema = JSON.parse(script[1]);
      const imageUrl = sites.find(site => site.url === path).images[0];
      assert.equal(schema.url, `https://www.toni-hoffmann.com${path}`);
      assert.equal(schema.name, photo.title);
      assert.equal(schema.primaryImageOfPage.contentUrl, imageUrl);
      assert.ok(schema.description.includes('Toni Hoffmann'));
      if (photo.description) {
        assert.equal(schema.description, getPhotoDescription(photo, ''));
      }
      assert.ok(html.includes(`<link rel="canonical" href="https://www.toni-hoffmann.com${path}">`), path);
      assert.ok(html.includes(`src="${imageUrl}"`), `Missing rendered image: ${path}`);
      assert.match(html, /<h1[^>]*>.+<\/h1>/, path);
      assert.match(html, /<figcaption[^>]*>.+<\/figcaption>/, path);
      const galleryPath = `/photography/${album}/${Math.floor(index / pageSize) + 1}/`;
      assert.ok(html.includes(`href="${galleryPath}"`), `Missing gallery backlink: ${path}`);
      const galleryHtml = fs.readFileSync(`${base}${galleryPath}index.html`, 'utf8');
      assert.ok(galleryHtml.includes(`href="${path}"`), `Not linked from gallery: ${path}`);
      assert.ok(!galleryHtml.includes('photo-page-link'), `Unexpected text below gallery image: ${path}`);
      count++;
    }
  }
  assert.equal(sites.filter(site => site.url.includes('/photo/')).length, count);
});
