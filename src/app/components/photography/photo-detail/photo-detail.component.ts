import { ChangeDetectorRef, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, switchMap, map } from 'rxjs';
import { Album } from 'src/app/models/album';
import { GalleryPhoto } from 'src/app/models/photo';
import { getPhotoDescription, getPhotoId, toGalleryPhoto } from 'src/app/models/photo-utils';
import galleryConfig from 'src/app/models/gallery-config.json';
import { PhotoService } from 'src/app/services/photo.service';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss'],
  standalone: false
})
export class PhotoDetailComponent implements OnInit {
  public album: Album;
  public photo: GalleryPhoto;
  public description: string;
  public galleryUrl: string;
  public previousPhoto: GalleryPhoto;
  public nextPhoto: GalleryPhoto;
  private readonly destroyRef = inject(DestroyRef);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private photoService: PhotoService,
    private seoService: SeoService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.photo = null;
        this.changeDetectorRef.markForCheck();
        const album = this.photoService.getAlbumMetaData(params.get('album'));
        if (!album) {
          void this.router.navigate(['/404']);
          return EMPTY;
        }
        return this.photoService.getPhotosFromAlbum(album.id).pipe(
          map(photos => ({ album, photos, photoId: params.get('photoid') }))
        );
      }),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(({ album, photos, photoId }) => {
      const index = photos.findIndex(photo => getPhotoId(photo) === photoId);
      if (index === -1) {
        void this.router.navigate(['/404']);
        return;
      }
      this.album = album;
      this.photo = toGalleryPhoto(album.id, photos[index]);
      this.description = getPhotoDescription(photos[index], album.title);
      this.galleryUrl = `/photography/${album.id}/${Math.floor(index / galleryConfig.pageSize) + 1}/`;
      this.previousPhoto = index > 0 ? toGalleryPhoto(album.id, photos[index - 1]) : null;
      this.nextPhoto = index < photos.length - 1 ? toGalleryPhoto(album.id, photos[index + 1]) : null;
      this.seoService.setPageMetaData(this.photo.title, this.description);
      this.seoService.setPhotoMetaData(this.photo, this.description);
      this.changeDetectorRef.markForCheck();
    });
  }
}
