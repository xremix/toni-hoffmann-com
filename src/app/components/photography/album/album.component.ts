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
    route.params.subscribe(params => {
    this.createGallery(params);
  });
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.createGallery(params);
    });
  }

  createGallery(params: any){
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

        data = data.map(i =>{
          i.bigurl = i.url;
          i.url = i.middleurl;
          return i;
        });

        var pages = UtilitiesService.chunkArray(data, this.pageSize);

        this.pages = UtilitiesService.fillArray(pages.length);

        if(this.page + 1 > this.pages.length){
          window.location.href = '/404';
        }

        this.album.photos = pages[this.page];

        this.images = this.album.photos;
        console.log("create gallery");
        
      });

  }

  showPhotoModal(photo: any){
    this.photoModal.show(photo);
  }

}
