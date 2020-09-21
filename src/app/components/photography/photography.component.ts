import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { SeoService } from 'src/app/services/seo.service';
import { Album } from 'src/app/models/album';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html'
})
export class PhotographyComponent implements OnInit {
  public albums: Array<Album> = [];

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
    return `/photography/${albumId}`;
  }
}
