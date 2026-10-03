import { GalleryPhoto } from './photo';
export class Album {
  public title: string;
  public subTitle: string;
  public id: string;
  public imageUrl: string;
  public photos: GalleryPhoto[] = [];
}
