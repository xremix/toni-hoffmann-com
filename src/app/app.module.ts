import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DevelopmentComponent } from './components/development/development.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { MusicComponent } from './components/music/music.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { DataPrivacyComponent } from './components/data-privacy/data-privacy.component';
import { AlbumComponent } from './components/photography/album/album.component';
// For local development
// import { XGallerifyModule } from '../../../../WebProjects/ng-xGallerify/projects/x-gallerify/src/public-api';
import { XGallerifyModule } from '@xremix/ng-x-gallerify';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerLinkComponent } from './components/photography/banner-link/banner-link.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component'
import { PhotoService } from './services/photo.service';
import { SafePipe } from './safe-pipe';
import { PhotoModalComponent } from './components/photography/album/photo-modal/photo-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageCardComponent } from './components/shared/image-card/image-card.component';
import { ContactComponent } from './components/contact/contact.component';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { CallToActionComponent } from './components/shared/call-to-action/call-to-action.component';
import { CookieBannerComponent } from './components/shared/cookie-banner/cookie-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    DevelopmentComponent,
    PhotographyComponent,
    MusicComponent,
    ImprintComponent,
    DataPrivacyComponent,
    AlbumComponent,
    BannerLinkComponent,
    NavigationComponent,
    SafePipe,
    PhotoModalComponent,
    ImageCardComponent,
    ContactComponent,
    SpinnerComponent,
    CallToActionComponent,
    CookieBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    XGallerifyModule
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
