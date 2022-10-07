import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from 'src/app/services/photo.service';
import { SeoService } from 'src/app/services/seo.service';
import { PhotoModalComponent } from './photo-modal/photo-modal.component';
import { UtilitiesService } from 'src/app/services/utilities.service';
// import { GalleryImage } from '../../../../../../../WebProjects/ng-xGallerify/projects/x-gallerify/src/public-api';
// import { GalleryImage } from '@xremix/ng-x-gallerify';
import { Album } from 'src/app/models/album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  public title: string;
  public subTitle: string;
  public images: Array<any>;
  public album: Album;
  public modalPhoto: any = null;
  public callToAction = 999999;//get's set in constructor

  public xGalleryBreakpoints = [{
    min: 0,
    max: 720,
    columns: 1
  }, {
    min: 720,
    max: 960,
    columns: 2
  }, {
    min: 960,
    max: 1140,
    columns: 3
  }, {
    min: 1140,
    max: 999999,
    columns: 4
  }];

  // TODO change this also in generate-sizemap.js
  private pageSize: number = 20;
  private page: number = 1;

  public pages: Array<number> = [];

  @ViewChild('photoModal') photoModal: PhotoModalComponent;

  constructor(public router: Router,
    private seoService: SeoService,
    private photoService: PhotoService,
    private route: ActivatedRoute,
    private utilitiesService: UtilitiesService) {

    if(this.utilitiesService.isBrowser()){
      this.callToAction = window.screen.height * 1.7;
    }

    route.params.subscribe(params => {
      this.createGallery(params);
    });
  }

  ngOnInit(): void {
    // if(window.location.hostname.indexOf('localhost') >= 0){
    //   console.warn('disable paging')
    //   this.pageSize = 99;
    // }
    
    this.route.params.subscribe(params => {
      this.createGallery(params);
    });
  }

  createGallery(params: any){
      var albumParameter = params['album'];
      this.album = this.photoService.getAlbumMetaData(albumParameter);

      if(params['page']){
        this.page = + params['page'];
      }else{
        var url = `/photography/${this.album.id}/1`;

        this.router.navigate([url], { relativeTo: this.route });
      }
  
      var galleryDescription = `Professional photo gallery with pictures of ${this.album.subTitle}`;
      if(albumParameter == 'landscapes'){
        galleryDescription = 'Landscape of moody sunset and cloud photos of Ammersee, Chiemsee, Plansee, Garmisch-Patenkirchen, Berchtesgaden, Allgäu, Bavaria and Austria Alps'
      }else if(albumParameter == 'winterlandscapes'){
        galleryDescription = 'Winter Outdoor photography of the snow wonderland in Garmisch-Patenkirchen, Hallstatt, Berchtesgaden, Allgäu and the Alps'
      }else if(albumParameter == 'subways'){
        galleryDescription = 'Abstract architecture photography with urban pictures of the subway and train stations of Munich, Bavaria and Berlin, Germany'
      }else if(albumParameter == 'cityscapes'){
        galleryDescription = 'Architecture pictures of Munich, Cologne, Berlin, Frankfurt at Blue Hour, Sunset and rainy days'
      }else if(albumParameter == 'products'){
        galleryDescription = 'Product photography of bikes, cars, watches and lifestyle products with moody look in Bavaria, Germany'
      }

      this.seoService.setPageMetaData(
        `${this.album.title} Photography - Gallery ${this.page}`,
        galleryDescription, // TODO make this more meaningful / longer?
      );



      this.photoService.getPhotosFromAlbum(albumParameter).subscribe(data =>{

        data = data.map(i =>{
          // i.bigurl = 'https://www.toni-hoffmann.com/galleryimages/' + i.url;
          // i.url = 'https://www.toni-hoffmann.com/galleryimages/' + i.middleurl;
          i.bigurl = `https://www.toni-hoffmann.com/images/${albumParameter}/full/${i.url}`;
          i.url = `https://www.toni-hoffmann.com/images/${albumParameter}/thumbnail/${i.middleurl}`;
          return i;
        });

        var pages = UtilitiesService.chunkArray(data, this.pageSize);

        this.pages = UtilitiesService.fillArray(pages.length);

        if(this.page > this.pages.length){
          this.router.navigate(['/404'], { relativeTo: this.route });
        }

        this.album.photos = pages[this.page - 1];

        this.images = this.album.photos;
      });
  }

  showPhotoModal(photo: any){
    this.photoModal.show(photo);
  }

}
