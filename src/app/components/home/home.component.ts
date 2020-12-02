import { Component } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private seoService: SeoService) {
    this.seoService.updatePageMetaData(
      'Software Developer, Photographer, Musician Portfolio from Munich',
      `The official portfolio website of Toni Hoffmann, living in Munich, Bavaria, Germany. Toni Hoffmann is a Software Developer, Photographer, Musician. See Open Source Projects, Photos and free Music`
    );
  }

}
