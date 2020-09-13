import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBannerComponent } from './components/shared/header-banner/header-banner.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DevelopmentComponent } from './components/development/development.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { MusicComponent } from './components/music/music.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { DataPrivacyComponent } from './components/data-privacy/data-privacy.component';
import { GhostButtonComponent } from './components/shared/ghost-button/ghost-button.component';
import { AlbumComponent } from './components/photography/album/album.component';
// TODO move to npm
import { XGallerifyComponent } from '../../../../WebProjects/ng-xGallerify/projects/x-gallerify/src/lib/x-gallerify.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerLinkComponent } from './components/photography/banner-link/banner-link.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component'
import {PhotoService} from './services/photo.service';
import {SafePipe} from './safe-pipe';
import { PhotoModalComponent } from './components/photography/album/photo-modal/photo-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageCardComponent } from './components/shared/image-card/image-card.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBannerComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    DevelopmentComponent,
    PhotographyComponent,
    MusicComponent,
    ImprintComponent,
    DataPrivacyComponent,
    GhostButtonComponent,
    AlbumComponent,
    XGallerifyComponent,
    BannerLinkComponent,
    NavigationComponent,
    SafePipe,
    PhotoModalComponent,
    ImageCardComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
