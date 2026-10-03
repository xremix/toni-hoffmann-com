import type { GalleryPhoto, PhotoMetadata } from './photo';

export function getPhotoId(photo: PhotoMetadata): string {
  if (photo.slug) {
    return photo.slug;
  }
  const title = photo.title
    .normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  let hash = 2166136261;
  for (let index = 0; index < photo.url.length; index++) {
    hash = Math.imul(hash ^ photo.url.charCodeAt(index), 16777619);
  }
  return `${title || 'photo'}-${(hash >>> 0).toString(16).padStart(8, '0')}`;
}

export function getPhotoPath(album: string, photo: PhotoMetadata): string {
  return `/photography/${album}/photo/${encodeURIComponent(getPhotoId(photo))}/`;
}

export function toGalleryPhoto(album: string, photo: PhotoMetadata): GalleryPhoto {
  return {
    ...photo,
    pageUrl: getPhotoPath(album, photo),
    bigurl: `https://www.toni-hoffmann.com/images/${album}/full/${encodeURIComponent(photo.url)}`,
    url: `https://www.toni-hoffmann.com/images/${album}/thumbnail/${encodeURIComponent(photo.middleurl)}`
  };
}

export function getPhotoDescription(photo: PhotoMetadata, albumTitle: string): string {
  return photo.description || `${photo.title.replace(/[.!?]+$/, '')}. ${albumTitle} photography by Toni Hoffmann.`;
}
