import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html'
})
export class ImprintComponent implements OnInit {

  public currentYear: number = 2020;

  constructor(private seoService: SeoService) {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit(): void {
    this.seoService.updatePageMetaData(
      `Imprint`,
      'Imprint on the use of the portfolio website of Toni Hoffmann'
    );
  }

}
