
import { DOCUMENT, Inject, Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { GalleryPhoto } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly canonicalOrigin = 'https://www.toni-hoffmann.com';

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) {}

  public setPageMetaData(title: string, description: string, keywords?: string): void {
    this.document.getElementById('gallery-structured-data')?.remove();
    this.document.getElementById('photo-structured-data')?.remove();
    this.meta.updateTag({
      property: 'og:image',
      content: `${this.canonicalOrigin}/assets/work3-small.webp`
    });
    this.meta.removeTag('property="og:image:alt"');
    this.setTitleRaw('Toni Hoffmann - ' + title);
    this.setDescription(description);
    this.setCanonicalUrl(this.getCanonicalUrl());
    if (keywords) {
      this.setKeywords(keywords);
    }
  }

  public setGalleryImages(name: string, description: string, photos: GalleryPhoto[]): void {
    this.document.getElementById('gallery-structured-data')?.remove();
    const canonicalUrl = this.getCanonicalUrl();
    const script = this.document.createElement('script');
    script.id = 'gallery-structured-data';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ImageGallery',
      url: canonicalUrl,
      name,
      description,
      associatedMedia: photos.map(photo => ({
        '@type': 'ImageObject',
        contentUrl: photo.bigurl,
        url: photo.pageUrl ? `${this.canonicalOrigin}${photo.pageUrl}` : photo.bigurl,
        thumbnailUrl: photo.url,
        name: photo.title,
        caption: photo.title,
        description: photo.description,
        creator: {
          '@type': 'Person',
          name: 'Toni Hoffmann',
          url: `${this.canonicalOrigin}/`
        },
        creditText: 'Toni Hoffmann',
        copyrightNotice: 'Toni Hoffmann',
        isPartOf: { '@type': 'ImageGallery', url: canonicalUrl }
      }))
    }).replace(/</g, '\\u003c');
    this.document.head.appendChild(script);
    if (photos.length) {
      this.meta.updateTag({ property: 'og:image', content: photos[0].bigurl });
      this.meta.updateTag({ property: 'og:image:alt', content: photos[0].title });
    }
  }

  public getDefaultKeywords(additionalKeywords?: string[]): string {
    let additionalKeywordString = '';
    if (additionalKeywords && additionalKeywords.length) {
      additionalKeywordString = `, ${additionalKeywords.join(', ')}`;
    }

    return `Toni Hoffmann, Bavaria, Bayern, Munich, München${additionalKeywordString}`;
  }

  public setPhotoMetaData(photo: GalleryPhoto, description: string): void {
    this.document.getElementById('photo-structured-data')?.remove();
    const canonicalUrl = this.getCanonicalUrl();
    const script = this.document.createElement('script');
    script.id = 'photo-structured-data';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      url: canonicalUrl,
      name: photo.title,
      description,
      primaryImageOfPage: {
        '@type': 'ImageObject',
        '@id': `${canonicalUrl}#image`,
        url: canonicalUrl,
        contentUrl: photo.bigurl,
        thumbnailUrl: photo.url,
        name: photo.title,
        caption: photo.title,
        description,
        creator: { '@type': 'Person', name: 'Toni Hoffmann', url: `${this.canonicalOrigin}/` },
        creditText: 'Toni Hoffmann',
        copyrightNotice: 'Toni Hoffmann'
      }
    }).replace(/</g, '\\u003c');
    this.document.head.appendChild(script);
    this.meta.updateTag({ property: 'og:image', content: photo.bigurl });
    this.meta.updateTag({ property: 'og:image:alt', content: photo.alt || photo.title });
  }

  private setTitleRaw(rawTitle: string): void {
    this.title.setTitle(rawTitle);
    this.meta.updateTag({ property: 'og:title', content: rawTitle });
  }

  private getCanonicalUrl(): string {
    const path = this.router.url.split(/[?#]/, 1)[0] || '/';
    return `${this.canonicalOrigin}${path.endsWith('/') ? path : `${path}/`}`;
  }

  private setCanonicalUrl(url: string): void {
    let element = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!element) {
      element = this.document.createElement('link');
      this.document.head.appendChild(element);
    }
    element.setAttribute('rel', 'canonical');
    element.setAttribute('href', url);
    this.setOgUrl(url);
  }

  private setOgUrl(url: string): void {
    this.meta.updateTag({ property: 'og:url', content: url });
  }

  private setDescription(description: string): void {
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:description', content: description });
  }

  private setKeywords(keywords: string): void {
    this.meta.updateTag({ name: 'keywords', content: keywords });
  }
}
