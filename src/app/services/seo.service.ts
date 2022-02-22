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

  public updatePageMetaData(title: string, description: string){
    this.updateTitleRaw('Toni Hoffmann - ' + title);
    this.updateDescription(description);
    if(this.utilitiesService.isBrowser()){
      this.updateCanonicalUrl(this.fixUrl(window.location.href));
    }
  }

  private updateTitleRaw(rawTitle: string) {
    this.title.setTitle(rawTitle);
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

  private updateCanonicalUrl(url:string){
    const head = this.dom.getElementsByTagName('head')[0];
    var element: HTMLLinkElement= this.dom.querySelector(`link[rel='canonical']`) || null
    if (element==null) {
      element= this.dom.createElement('link') as HTMLLinkElement;
      head.appendChild(element);
    }
    element.setAttribute('rel','canonical')
    element.setAttribute('href',url)
  }

  private updateOgUrl(url: string) {
    this.meta.updateTag({ name: 'og:url', content: url })
  }

  private updateDescription(desc: string) {
    this.meta.updateTag({ name: 'description', content: desc })
  }

  private updateKeywords(keywords: string) {
    this.meta.updateTag({ name: 'keywords', content: keywords })
  }
}
