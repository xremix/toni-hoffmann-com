import { Component } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private seoService: SeoService) {
    this.seoService.updatePageMetaData(
      'Software Developer, Photographer, Musician',
      `The official website of Toni Hoffmann from Munich. Toni Hoffmann is a Software Developer, Photographer, Musician. See Open Source Projects, Photos and free Music`
    );
  }

}
