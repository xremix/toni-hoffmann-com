import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { GalleryPhoto } from '../models/photo';
import { SeoService } from './seo.service';

describe('gallery image SEO', () => {
  let service: SeoService;
  let document: Document;
  let meta: Meta;
  const photo: GalleryPhoto = {
    url: 'https://www.toni-hoffmann.com/images/landscapes/thumbnail/photo.webp',
    bigurl: 'https://www.toni-hoffmann.com/images/landscapes/full/photo.webp',
    middleurl: 'photo.webp',
    title: 'Sunset at lake Ammersee'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SeoService,
        { provide: Router, useValue: { url: '/photography/landscapes/2/?view=grid' } }
      ]
    });
    service = TestBed.inject(SeoService);
    document = TestBed.inject(DOCUMENT);
    meta = TestBed.inject(Meta);
  });

  afterEach(() => {
    document.getElementById('gallery-structured-data')?.remove();
  });

  it('describes full-size images and their photographer on the canonical gallery page', () => {
    service.setPageMetaData('Landscapes', 'Landscape photography');
    service.setGalleryImages('Landscapes', 'Landscape photography', [photo]);
    const script = document.getElementById('gallery-structured-data');
    expect(script.getAttribute('type')).toBe('application/ld+json');
    const data = JSON.parse(script.textContent);
    expect(data['@type']).toBe('ImageGallery');
    expect(data.url).toBe('https://www.toni-hoffmann.com/photography/landscapes/2/');
    expect(data.associatedMedia.length).toBe(1);
    expect(data.associatedMedia[0].contentUrl).toBe(photo.bigurl);
    expect(data.associatedMedia[0].thumbnailUrl).toBe(photo.url);
    expect(data.associatedMedia[0].caption).toBe(photo.title);
    expect(data.associatedMedia[0].creator.name).toBe('Toni Hoffmann');
    expect(meta.getTag('property="og:image"').content).toBe(photo.bigurl);
    expect(meta.getTag('property="og:image:alt"').content).toBe(photo.title);
  });

  it('replaces gallery metadata when paging and clears it on non-gallery navigation', () => {
    service.setGalleryImages('Landscapes', 'Landscape photography', [photo]);
    const nextPhoto = { ...photo, title: 'Blue hour', bigurl: photo.bigurl.replace('photo', 'next-photo') };
    service.setGalleryImages('Landscapes 2', 'Landscape photography', [nextPhoto]);
    expect(document.querySelectorAll('#gallery-structured-data').length).toBe(1);
    expect(JSON.parse(document.getElementById('gallery-structured-data').textContent)
      .associatedMedia[0].name).toBe('Blue hour');
    service.setPageMetaData('Contact', 'Contact Toni Hoffmann');
    expect(document.getElementById('gallery-structured-data')).toBeNull();
    expect(meta.getTag('property="og:image"').content)
      .toBe('https://www.toni-hoffmann.com/assets/work3-small.webp');
    expect(meta.getTag('property="og:image:alt"')).toBeNull();
  });

  it('safely serializes photo titles without HTML script terminators', () => {
    const title = 'Lake <sunset> & "</script>"';
    service.setGalleryImages('Landscapes', 'Landscape photography', [{ ...photo, title }]);
    const text = document.getElementById('gallery-structured-data').textContent;
    expect(text).not.toContain('<');
    expect(JSON.parse(text).associatedMedia[0].name).toBe(title);
  });
});
