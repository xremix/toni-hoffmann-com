import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(private title: Title, private meta: Meta) { }

  public updatePageMetaData(title: string, description: string){
    this.updateTitleRaw('Toni Hoffmann - ' + title);
    this.updateDescription(description);
  }

  private updateTitleRaw(rawTitle: string) {
    this.title.setTitle(rawTitle);
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
