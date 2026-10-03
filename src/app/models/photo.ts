export interface PhotoMetadata {
  url: string;
  middleurl: string;
  title: string;
  slug?: string;
  description?: string;
  alt?: string;
}

export interface GalleryPhoto extends PhotoMetadata {
  bigurl: string;
  pageUrl?: string;
}
