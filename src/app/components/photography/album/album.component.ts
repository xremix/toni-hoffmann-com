import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../../../services/photo.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  public title: string;
  public subTitle: string;
  public images: Array<any>;
  private sub: any;
  private modalPhoto: any;

  constructor(private route: ActivatedRoute, private photoService: PhotoService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      var albumParameter = params['album'];
      var album = this.photoService.getAlbum(albumParameter);
      this.images = album.photos;
      this.title = album.title;
      this.subTitle = album.subTitle;
      // In a real app: dispatch action to load the details here.
      
      // Show photo modal
      var photoIdParameter = params['photoId'];
      if(photoIdParameter){
        var photoFromParameter = null;
        // TODO search the correct photo from the this.images array
        showPhotoModal(photoFromParamter);
      }
      
    });
  }
  
  showPhotoModal(photo: any){
    // Show the Modal
  }
  
  hidePhotoModal(){
  }
}
