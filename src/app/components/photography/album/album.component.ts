import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from 'src/app/services/photo.service';
import { SeoService } from 'src/app/services/seo.service';
import { PhotoModalComponent } from './photo-modal/photo-modal.component';
import { XGallerifyComponent } from '../../../../../../../WebProjects/ng-xGallerify/projects/x-gallerify/src/lib/x-gallerify.component';
import { UtilitiesService } from 'src/app/services/utilities.service'

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
  public callToAction = window.screen.height * 2;

  private pageSize: number = 21;
  private page: number = 0;


  public pages: Array<number> = [];

  @ViewChild('photoModal') photoModal: PhotoModalComponent;

  constructor(private seoService: SeoService, private photoService: PhotoService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      var albumParameter = params['album'];
      if(params['page']){
        this.page = +params['page'];
      }
      this.album = this.photoService.getAlbumMetaData(albumParameter);
      this.seoService.updatePageMetaData(
        `${this.album.title} Photography by Toni Hoffmann`,
        this.album.subTitle
      );

      this.photoService.getPhotosFromAlbum(albumParameter).subscribe(data =>{
        var pages = UtilitiesService.chunkArray(data, this.pageSize);

        this.pages = UtilitiesService.fillArray(pages.length);

        // TODO make this clean
        this.album.photos = pages[this.page];

        this.images = this.album.photos;

        // Show photo modal
        // var photoIdParameter = params['photoId'];
        // if(photoIdParameter){
        //   var photoFromParameter = null;
        //   // TODO search the correct photo from the this.images array
        //   this.showPhotoModal(photoFromParameter);
        // }
      });
    });
  }

  showPhotoModal(photo: any){
    this.photoModal.show(photo);
  }

}
