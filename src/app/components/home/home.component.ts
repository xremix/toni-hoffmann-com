import { Component } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private seoService: SeoService) {
    this.seoService.setPageMetaData(
      'Software Developer, Photographer, Musician Portfolio from Munich',
      `The official portfolio of Toni Hoffmann from Munich, Germany. A portfolio of the Software Developer, Photographer and Musician.`
    );
  }

}
