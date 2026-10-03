
import { DOCUMENT, Inject, Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

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
    this.setTitleRaw('Toni Hoffmann - ' + title);
    this.setDescription(description);
    this.setCanonicalUrl(this.getCanonicalUrl());
    if (keywords) {
      this.setKeywords(keywords);
    }
  }

  public getDefaultKeywords(additionalKeywords?: string[]): string {
    let additionalKeywordString = '';
    if (additionalKeywords && additionalKeywords.length) {
      additionalKeywordString = `, ${additionalKeywords.join(', ')}`;
    }
    return `Toni Hoffmann, Bavaria, Bayern, Munich, München${additionalKeywordString}`;
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
