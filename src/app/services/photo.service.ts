import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isDevMode } from '@angular/core';
import { Album } from 'src/app/models/album';
import { Observable } from 'rxjs';
import { UtilitiesService } from 'src/app/services/utilities.service'

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private albums: Array<Album> = [{
    title: 'Landscapes',
    subTitle: 'Sunsets, Blue Hour and Golden Light',
    id: 'landscapes',
    // imageUrl: '/assets/20201021-071303-DSC04840_edit_middle.webp',
    imageUrl: '/assets/20221018-184408-DSC06635-edit.webp',
    photos: []
  },{
    title: 'Moody Outdoors',
    subTitle: 'Clouds, Rain and Autumn Mood',
    id: 'moody',
    imageUrl: '/assets/43296374782_c5cbb7d864_h.webp',
    photos: []
  },{
    title: 'Winter Miracles',
    subTitle: 'Cozy Moments in the Cold Season',
    id: 'winterlandscapes',
    imageUrl: '/assets/39767964544_9ba2c3c3b8_b.webp',
    photos: []
  },{
    title: 'Cityscapes',
    subTitle: 'Big City Lights, Urbans and Mountan Villages',
    id: 'cityscapes',
    imageUrl: '/assets/34959811331_73537fc40b_h.webp',
    photos: []
  },{
    title: 'Urban Subways',
    subTitle: 'Places that connect People',
    id: 'subways',
    imageUrl: '/assets/49459119791_9bff7bbe5f_k.webp',
    photos: []
  },{
    title: 'Products',
    subTitle: 'Lifestyle Products that trigger Emotions',
    id: 'products',
    imageUrl: '/assets/46699689084_fae0ac838b_h.webp',
    photos: []
  }];

  constructor(private http: HttpClient, private utilitiesService: UtilitiesService) { }

  public getAlbumOverview(): Array<Album> {
    return this.albums;
  }

  public getAlbumMetaData(albumId: string){
    return this.albums.filter(a => a.id == albumId)[0];
  }

  // TODO use the model instead of any
  public getPhotosFromAlbum(album: string): Observable<any> {
    var url = isDevMode() || !this.utilitiesService.isBrowser() ? `https://www.toni-hoffmann.com/api/images/${album}.json` : `/api/images/${album}.json`;
    // var url = isDevMode() || !this.utilitiesService.isBrowser() ? `https://www.toni-hoffmann.com/api/flickr/?gallery=${album}` : `/api/flickr/?gallery=${album}`;

    return this.http.get(url);

    // Example
    // {
    //   "thumbnail": "https://farm8.staticflickr.com/7588/17069025235_a9627729c6.jpg",
    //   "middleurl": "https://farm8.staticflickr.com/7588/17069025235_a9627729c6_z.jpg",
    //   "url": "https://farm8.staticflickr.com/7588/17069025235_a9627729c6_b.jpg",
    //   "bigurl": "https://farm8.staticflickr.com/7588/17069025235__o.",
    //   "originalurl": "https://farm8.staticflickr.com/7588/17069025235__o.",
    //   "linkUrl": "https://www.flickr.com/photos/130939453@N08/17069025235",
    //   "title": "Long Exposure of Olchinger Lake after Sunset",
    //   "alt": "Long Exposure of Olchinger Lake after Sunset from Toni Hoffmann"
    // }
  }
}
