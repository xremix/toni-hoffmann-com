import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isDevMode } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private albums: Array<any> = [{
    title: 'Landscapes',
    subTitle: 'Bavarian Alps, Austria, Italy and Portugal',
    id: 'landscapes',
    imageUrl: 'https://farm2.staticflickr.com/1805/43296374782_c5cbb7d864_h.jpg'
  },{
    title: 'Winter Outdoors',
    subTitle: 'Snowy miracles in the cold season',
    id: 'winterlandscapes',
    imageUrl: 'https://farm5.staticflickr.com/4649/39767964544_9ba2c3c3b8_b.jpg'
  },{
    title: 'Cityscapes',
    subTitle: 'Big City Lights, Urbans and Mountan Villages',
    id: 'cityscapes',
    imageUrl: 'https://farm5.staticflickr.com/4227/34959811331_73537fc40b_h.jpg'
  },{
    title: 'Urban Subways',
    subTitle: 'Places that connect People',
    id: 'subways',
    imageUrl: 'https://farm5.staticflickr.com/65535/49459119791_9bff7bbe5f_k_d.jpg'
  },{
    title: 'Products',
    subTitle: 'Products that trigger Emotions',
    id: 'products',
    imageUrl: 'https://farm8.staticflickr.com/7927/46699689084_fae0ac838b_h.jpg'
  }];

  constructor(private http: HttpClient) { }

  public getAlbumOverview(): Array<any> {
    return this.albums;
  }

  public getAlbumMetaData(albumId: string){
    return this.albums.filter(a => a.id == albumId)[0];
  }

  // TODO use the model instead of any
  public getPhotosFromAlbum(album: string): any {
    var url = isDevMode() ? `https://www.toni-hoffmann.com/api/flickr/?gallery=${album}` : `/api/flickr/?gallery=${album}`;

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
