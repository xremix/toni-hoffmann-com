const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { getSites, buildSitemap } = require('./generate-sitemap');
const { albums, pageSize } = require('./src/app/models/gallery-config.json');
const { getPhotoPath, getPhotoId, getPhotoDescription } = require('./src/app/models/photo-utils.ts');

test('every photo has a unique detail route with its full-size image in the sitemap', () => {
  const sites = getSites();
  let count = 0;
  for (const album of albums) {
    const photos = JSON.parse(fs.readFileSync(
      path.join(__dirname, 'api', 'images', `${album}.json`), 'utf8'
    ));
    for (const photo of photos) {
      const site = sites.find(site => site.url === getPhotoPath(album, photo));
      assert.ok(site, photo.title);
      assert.deepEqual(site.images, [
        `https://www.toni-hoffmann.com/images/${album}/full/${encodeURIComponent(photo.url)}`
      ]);
      count++;
    }
  }
  assert.equal(sites.filter(site => site.url.includes('/photo/')).length, count);
});

test('automatic slugs are readable, deterministic and distinguish identical titles', () => {
  const photo = { url: 'unique-image.webp', title: 'Sunset at Lake Ammersee' };
  assert.match(getPhotoId(photo), /^sunset-at-lake-ammersee-[a-f0-9]{8}$/);
  assert.equal(getPhotoId(photo), getPhotoId({ ...photo }));
  assert.notEqual(getPhotoId(photo), getPhotoId({ ...photo, url: 'another-image.webp' }));
  assert.match(getPhotoId({ url: 'DSC05378Kopie 1_edit_middle.webp', title: 'Würzjoch & Alps!' }),
    /^wurzjoch-alps-[a-f0-9]{8}$/);
  assert.match(getPhotoId({ url: 'photo.webp', title: '!!!' }), /^photo-[a-f0-9]{8}$/);
  assert.equal(getPhotoPath('landscapes', { ...photo, slug: 'lake-ammersee-sunset' }),
    '/photography/landscapes/photo/lake-ammersee-sunset/');
});

test('descriptions prefer authored context and otherwise use only known photo information', () => {
  const photo = { url: 'photo.webp', title: 'Sunset at Lake Ammersee' };
  assert.equal(getPhotoDescription(photo, 'Landscapes'),
    'Sunset at Lake Ammersee. Landscapes photography by Toni Hoffmann.');
  assert.equal(getPhotoDescription({ ...photo, description: 'An authored description.' }, 'Landscapes'),
    'An authored description.');
});

test('every photo belongs to exactly the same page as in the gallery', () => {
  const sites = getSites();
  for (const album of albums) {
    const images = JSON.parse(fs.readFileSync(
      path.join(__dirname, 'api', 'images', `${album}.json`), 'utf8'
    ));
    const pages = sites.filter(site => site.url.startsWith(`/photography/${album}/`) && !site.url.includes('/photo/'));
    assert.equal(pages.length, Math.ceil(images.length / pageSize));
    pages.forEach((page, index) => {
      assert.equal(page.url, `/photography/${album}/${index + 1}/`);
      assert.deepEqual(page.images, images.slice(index * pageSize, (index + 1) * pageSize)
        .map(image => `https://www.toni-hoffmann.com/images/${album}/full/${encodeURIComponent(image.url)}`));
    });
    assert.equal(pages.flatMap(page => page.images).length, images.length);
  }
});

test('sitemap uses supported image fields and escapes XML metacharacters', () => {
  const xml = buildSitemap([{
    url: '/example/',
    priority: '1.00',
    images: ['https://example.com/photo.webp?x=1&y=<"test">']
  }]);
  assert.ok(xml.includes('xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"'));
  assert.ok(xml.includes('<image:loc>https://example.com/photo.webp?x=1&amp;y=&lt;&quot;test&quot;&gt;</image:loc>'));
  assert.ok(!xml.includes('image:caption'));
  assert.ok(!xml.includes('lastmod'));
});

test('landscape page four is discoverable and app and information routes remain', () => {
  const sites = getSites();
  assert.ok(sites.some(site => site.url === '/photography/landscapes/4/'));
  for (const url of ['/apps/cope-stress/', '/music/', '/contact/', '/imprint/', '/data-privacy/']) {
    assert.ok(sites.some(site => site.url === url), url);
  }
  assert.equal(new Set(sites.map(site => site.url)).size, sites.length);
});
