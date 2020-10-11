import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html'
})
export class PageNotFoundComponent implements OnInit {

  constructor(private seoService: SeoService) {
    this.seoService.updatePageMetaData(
      `Page not Found`,
      'Page you tried to visit was not found!'
    );
   }

  ngOnInit(): void {
  }

}
