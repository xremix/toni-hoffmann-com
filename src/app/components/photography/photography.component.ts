import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss']
})
export class PhotographyComponent implements OnInit {
  public albums: Array<any> = [];

  constructor(private titleService: Title, private photoService: PhotoService) {
    titleService.setTitle('Toni Hoffmann - Passionated Landscape, Architecture and Portrait Photograph in Bavaria, Munich');
  }

  ngOnInit(): void {
    this.albums = this.photoService.getAlbumOverview();
  }

  getAlbumUrl(albumId: string){
    return `photography/${albumId}`;
  }
}
