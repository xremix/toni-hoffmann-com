import { TestBed } from '@angular/core/testing';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, convertToParamMap } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { PhotoService } from 'src/app/services/photo.service';
import { SeoService } from 'src/app/services/seo.service';
import { PhotoDetailComponent } from './photo-detail.component';

describe('PhotoDetailComponent', () => {
  let component: PhotoDetailComponent;
  let router: jasmine.SpyObj<Router>;
  let seo: jasmine.SpyObj<SeoService>;
  let photoService: jasmine.SpyObj<PhotoService>;
  let params: BehaviorSubject<ReturnType<typeof convertToParamMap>>;
  const photos = Array.from({ length: 22 }, (_, index) => ({
    url: `photo-${index}.webp`,
    middleurl: `photo-${index}-small.webp`,
    title: `Landscape ${index}`,
    slug: `photo-${index}`,
    description: `Description for landscape ${index}.`
  }));

  beforeEach(() => {
    params = new BehaviorSubject(convertToParamMap({ album: 'landscapes', photoid: 'photo-20' }));
    router = jasmine.createSpyObj<Router>('Router', ['navigate']);
    seo = jasmine.createSpyObj<SeoService>('SeoService', ['setPageMetaData', 'setPhotoMetaData']);
    photoService = jasmine.createSpyObj<PhotoService>('PhotoService', ['getAlbumMetaData', 'getPhotosFromAlbum']);
    photoService.getAlbumMetaData.and.returnValue({
      id: 'landscapes', title: 'Landscapes', subTitle: 'Sunsets', imageUrl: '/banner.webp', photos: []
    });
    photoService.getPhotosFromAlbum.and.returnValue(of(photos));
    TestBed.configureTestingModule({
      providers: [
        PhotoDetailComponent,
        { provide: ActivatedRoute, useValue: { paramMap: params } },
        { provide: Router, useValue: router },
        { provide: PhotoService, useValue: photoService },
        { provide: SeoService, useValue: seo },
        { provide: ChangeDetectorRef, useValue: { markForCheck: () => {} } }
      ]
    });
    component = TestBed.inject(PhotoDetailComponent);
  });

  it('loads the selected image, describes it and links to its actual gallery page', () => {
    component.ngOnInit();
    expect(component.photo.title).toBe('Landscape 20');
    expect(component.photo.bigurl).toBe('https://www.toni-hoffmann.com/images/landscapes/full/photo-20.webp');
    expect(component.galleryUrl).toBe('/photography/landscapes/2/');
    expect(component.description).toBe('Description for landscape 20.');
    expect(component.previousPhoto.pageUrl).toBe('/photography/landscapes/photo/photo-19/');
    expect(component.nextPhoto.pageUrl).toBe('/photography/landscapes/photo/photo-21/');
    expect(seo.setPageMetaData).toHaveBeenCalledWith('Landscape 20', component.description);
    expect(seo.setPhotoMetaData).toHaveBeenCalledWith(component.photo, component.description);
  });

  it('updates on photo-to-photo navigation and handles the first and last photos', () => {
    component.ngOnInit();
    params.next(convertToParamMap({ album: 'landscapes', photoid: 'photo-0' }));
    expect(component.photo.title).toBe('Landscape 0');
    expect(component.previousPhoto).toBeNull();
    params.next(convertToParamMap({ album: 'landscapes', photoid: 'photo-21' }));
    expect(component.photo.title).toBe('Landscape 21');
    expect(component.nextPhoto).toBeNull();
  });

  it('routes unknown photos to the existing not-found page instead of publishing misleading metadata', () => {
    params.next(convertToParamMap({ album: 'landscapes', photoid: 'unknown' }));
    component.ngOnInit();
    expect(router.navigate).toHaveBeenCalledWith(['/404']);
    expect(seo.setPhotoMetaData).not.toHaveBeenCalled();
  });

  it('does not request image data for an unknown album', () => {
    photoService.getAlbumMetaData.and.returnValue(undefined);
    component.ngOnInit();
    expect(router.navigate).toHaveBeenCalledWith(['/404']);
    expect(photoService.getPhotosFromAlbum).not.toHaveBeenCalled();
  });
});
