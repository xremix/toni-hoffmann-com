import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UtilitiesService } from './utilities.service';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(private title: Title, private meta: Meta, @Inject(DOCUMENT) private dom, private router: Router, private utilitiesService: UtilitiesService) {
   }

   
  public setPageMetaData(title: string, description: string, keywords?: string){
    this.setTitleRaw('Toni Hoffmann - ' + title);
    this.setDescription(description);
    if(this.utilitiesService.isBrowser()){
      this.setCanonicalUrl(this.fixUrl(window.location.href));
    }
    if(keywords){
      this.setKeywords(keywords)
    };
  }

  public getDefaultKeywords(additionalKeywords?: string[]){
    var additionalKeywordString = "";
    if(additionalKeywords && additionalKeywords.length){
      additionalKeywordString = `, ${additionalKeywords.join(', ')}`;
    }
    return `Toni Hoffmann, Bavaria, Bayern, Munich, München${additionalKeywordString}`;
  }

  private setTitleRaw(rawTitle: string) {
    this.title.setTitle(rawTitle);
    this.meta.updateTag({ name: 'og:title', content: rawTitle })
  }

  private fixUrl(url: string){
    if(!url.endsWith('/')){
      url = `${url}/`; // url.substring(0, url.length - 1);
    }
    url = url.replace('/toni-hoffmann.com', '/www.toni-hoffmann.com')
    url = url.replace('http:', 'https:')
    
    console.log(url);
    return url;
  }

  private setCanonicalUrl(url:string){
    const head = this.dom.getElementsByTagName('head')[0];
    var element: HTMLLinkElement= this.dom.querySelector(`link[rel='canonical']`) || null
    if (element==null) {
      element= this.dom.createElement('link') as HTMLLinkElement;
      head.appendChild(element);
    }
    element.setAttribute('rel','canonical')
    element.setAttribute('href',url)
    this.setOgUrl(url);
  }

  private setOgUrl(url: string) {
    this.meta.updateTag({ name: 'og:url', content: url })
  }

  private setDescription(desc: string) {
    this.meta.updateTag({ name: 'description', content: desc })
    this.meta.updateTag({ name: 'og:description', content: desc })
  }

  private setKeywords(keywords: string) {
    this.meta.updateTag({ name: 'keywords', content: keywords })
  }
}
