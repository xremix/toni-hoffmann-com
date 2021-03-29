// import { GalleryImage } from '../../../../../WebProjects/ng-xGallerify/projects/x-gallerify/src/public-api';
// import { GalleryImage } from '@xremix/ng-x-gallerify';
export class App {
  public id: string;
  public title: string;
  public bannerUrl?: string;
  public appStoreUrl?: string;
  public betaUrl?: string;
  public iconUrl?: String;
  public primaryScreenshotUrl?: string;
  public screenshotUrls?: Array<string>;
  public primaryColor?: string;
  public features?: Array<AppFeature>;
  public description?: string;
  public shortDescription?: string;
}
export class AppFeature {
  public icon?: string;
  public title: string;
  public description: string;
}
