import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../../../services/photo.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  public title: string;
  public subTitle: string;
  public images: Array<any>;
  public album: any;
  private sub: any;
  public modalPhoto: any = null;

  constructor(private titleService: Title, private photoService: PhotoService, private route: ActivatedRoute) {
    titleService.setTitle('Toni Hoffmann - Passionated Landscape, Architecture and Portrait Photograph in Bavaria, Munich');
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      var albumParameter = params['album'];
      this.album = this.photoService.getAlbumMetaData(albumParameter);
      this.photoService.getAlbum(albumParameter).subscribe(data =>{
        // TODO the service should return an album!!
        this.album.photos = data;
        this.images = this.album.photos;

        // In a real app: dispatch action to load the details here.

        // Show photo modal
        var photoIdParameter = params['photoId'];
        if(photoIdParameter){
          var photoFromParameter = null;
          // TODO search the correct photo from the this.images array
          this.showPhotoModal(photoFromParameter);
        }

      });
    });
  }

  showPhotoModal(photo: any){
    // Show the Modal
    this.modalPhoto = photo;
  }

  hidePhotoModal(){
    this.modalPhoto = null;
  }
}
