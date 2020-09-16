import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss']
})
export class PhotographyComponent implements OnInit {
  public albums: Array<any> = [];

  constructor(private seoService: SeoService, private photoService: PhotoService) {
    this.seoService.updatePageMetaData(
      'Photography Portfolio by Toni Hoffmann',
      'Passionated Landscape, Architecture and Portrait Photograph in Munich, Bavaria, Germany'
    );
  }

  ngOnInit(): void {
    this.albums = this.photoService.getAlbumOverview();
  }

  getAlbumUrl(albumId: string){
    return `photography/${albumId}`;
  }
}
