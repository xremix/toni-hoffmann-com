import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  public action: string;

  constructor(private route: ActivatedRoute, private seoService: SeoService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.action = params['action'];
    });
    this.seoService.updatePageMetaData(
      `Contact Toni Hoffmann`,
      'Contact Toni Hoffmann from Munich via E-Mail or Social media like LinkedIn or Xing'
    );
  }

}
