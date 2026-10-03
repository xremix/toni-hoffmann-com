import { ChangeDetectorRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { GalleryPhoto } from 'src/app/models/photo';
import { PhotoService } from 'src/app/services/photo.service';
import { SeoService } from 'src/app/services/seo.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { AlbumComponent } from './album.component';
import { PhotoModalComponent } from './photo-modal/photo-modal.component';

describe('gallery image discovery and lightbox', () => {
  let component: AlbumComponent;
  let seo: jasmine.SpyObj<SeoService>;
  let photos: jasmine.SpyObj<PhotoService>;
  const photo: GalleryPhoto = {
    title: 'Sunset at lake Ammersee',
    middleurl: 'sunset-small.webp',
    url: 'sunset.webp',
    bigurl: 'https://www.toni-hoffmann.com/images/landscapes/full/sunset.webp'
  };

  beforeEach(() => {
    seo = jasmine.createSpyObj<SeoService>('SeoService', ['setPageMetaData', 'setGalleryImages']);
    photos = jasmine.createSpyObj<PhotoService>('PhotoService', ['getAlbumMetaData', 'getPhotosFromAlbum']);
    photos.getAlbumMetaData.and.returnValue({
      id: 'landscapes', title: 'Landscapes', subTitle: 'Sunsets',
      imageUrl: '/assets/banner.webp', photos: []
    });
    photos.getPhotosFromAlbum.and.returnValue(of(Array.from({ length: 21 }, () => ({ ...photo }))));
    TestBed.configureTestingModule({
      providers: [
        AlbumComponent,
        { provide: SeoService, useValue: seo },
        { provide: PhotoService, useValue: photos },
        { provide: Router, useValue: jasmine.createSpyObj<Router>('Router', ['navigate']) },
        { provide: ActivatedRoute, useValue: {} },
        { provide: UtilitiesService, useValue: { isBrowser: () => false } },
        { provide: ChangeDetectorRef, useValue: jasmine.createSpyObj<ChangeDetectorRef>('ChangeDetectorRef', ['detectChanges']) }
      ]
    });
    component = TestBed.inject(AlbumComponent);
    component.photoModal = jasmine.createSpyObj<PhotoModalComponent>('PhotoModalComponent', ['show']);
  });

  it('publishes only the current page of photos with separate full-size and thumbnail URLs', () => {
    component.createGallery({ album: 'landscapes', page: '2' });
    expect(component.images.length).toBe(1);
    expect(component.pages).toEqual([1, 2]);
    expect(component.images[0].bigurl).toBe(photo.bigurl);
    expect(component.images[0].url)
      .toBe('https://www.toni-hoffmann.com/images/landscapes/thumbnail/sunset-small.webp');
    expect(seo.setGalleryImages).toHaveBeenCalledWith(
      'Landscapes Photography - Gallery 2', jasmine.any(String), component.images
    );
  });

  it('opens the lightbox instead of navigating on a normal click', () => {
    const event = new MouseEvent('click', { cancelable: true });
    component.showPhotoModal(photo, event);
    expect(event.defaultPrevented).toBeTrue();
    expect(component.photoModal.show).toHaveBeenCalledWith(photo);
  });

  it('keeps native image links working for modified and middle clicks', () => {
    for (const options of [{ ctrlKey: true }, { metaKey: true }, { shiftKey: true }, { altKey: true }, { button: 1 }]) {
      const event = new MouseEvent('click', { ...options, cancelable: true });
      component.showPhotoModal(photo, event);
      expect(event.defaultPrevented).toBeFalse();
    }
    expect(component.photoModal.show).not.toHaveBeenCalled();
  });
});
