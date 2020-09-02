import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss']
})
export class PhotographyComponent implements OnInit {
  public albums: Array<any> = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.albums = this.photoService.getAlbumOverview();
  }

}
