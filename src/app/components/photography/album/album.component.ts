import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from 'src/app/services/photo.service';
import { SeoService } from 'src/app/services/seo.service';
import { PhotoModalComponent } from './photo-modal/photo-modal.component';
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
  private page: number = 1;


  public pages: Array<number> = [];

  @ViewChild('photoModal') photoModal: PhotoModalComponent;

  constructor(public router: Router, private seoService: SeoService, private photoService: PhotoService, private route: ActivatedRoute) {
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
    // TODO Make pages based on 1 instead of 0
      var albumParameter = params['album'];
      this.album = this.photoService.getAlbumMetaData(albumParameter);
      this.seoService.updatePageMetaData(
        `${this.album.title} Photography by Toni Hoffmann`,
        this.album.subTitle
      );

      if(params['page']){
        this.page = +params['page'];
      }else{
        var url = `/photography/${this.album.id}/1`;
        
        this.router.navigate([url], { relativeTo: this.route });

      }

      this.photoService.getPhotosFromAlbum(albumParameter).subscribe(data =>{

        data = data.map(i =>{
          i.bigurl = i.url;
          i.url = i.middleurl;
          return i;
        });

        var pages = UtilitiesService.chunkArray(data, this.pageSize);

        this.pages = UtilitiesService.fillArray(pages.length);

        if(this.page > this.pages.length){
          this.router.navigate(['/404'], { relativeTo: this.route });
        }

        this.album.photos = pages[this.page - 1];

        this.images = this.album.photos;
        console.log("create gallery");

      });

  }

  showPhotoModal(photo: any){
    this.photoModal.show(photo);
  }

}
