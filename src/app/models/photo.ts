export interface PhotoMetadata {
  url: string;
  middleurl: string;
  title: string;
}

export interface GalleryPhoto extends PhotoMetadata {
  bigurl: string;
}
