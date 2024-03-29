import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.setPageMetaData(
      `Contact`,
      'Contact Toni Hoffmann from Munich via E-Mail or Social media like LinkedIn or Xing'
    );
  }

}
