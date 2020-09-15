import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from 'src/app/services/photo.service';
import {SeoService} from 'src/app/services/seo.service';
import { XGallerifyComponent } from '../../../../../../../WebProjects/ng-xGallerify/projects/x-gallerify/src/lib/x-gallerify.component';

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

  constructor(private seoService: SeoService, private photoService: PhotoService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      var albumParameter = params['album'];
      this.album = this.photoService.getAlbumMetaData(albumParameter);
      this.seoService.updatePageMetaData(
        `${this.album.title} Photography by Toni Hoffmann`,
        this.album.subTitle
      );

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
