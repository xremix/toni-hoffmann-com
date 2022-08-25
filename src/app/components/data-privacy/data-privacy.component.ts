import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-data-privacy',
  templateUrl: './data-privacy.component.html'
})
export class DataPrivacyComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.setPageMetaData(
      `Data Privacy`,
      'Privacy policy on the use of the portfolio website of Toni Hoffmann'
    );
  }

}
