import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DevelopmentComponent } from './components/development/development.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { AppsComponent } from './components/apps/apps.component';
import { AppDetailComponent } from './components/apps/app-detail/app-detail.component';
import { AppImprintComponent } from './components/apps/app-imprint/app-imprint.component';
import { AppTermsComponent } from './components/apps/app-terms/app-terms.component';
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
import { AppService } from './services/app.service';
import { SafePipe } from './safe-pipe';
import { PhotoModalComponent } from './components/photography/album/photo-modal/photo-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageCardComponent } from './components/shared/image-card/image-card.component';
import { ContactComponent } from './components/contact/contact.component';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { CallToActionComponent } from './components/shared/call-to-action/call-to-action.component';
import { CookieBannerComponent } from './components/shared/cookie-banner/cookie-banner.component';
import { CookieService } from 'ngx-cookie-service';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCoffee, faEnvelope, faTimes, faAddressCard, faQuoteRight  } from '@fortawesome/free-solid-svg-icons';
import { faXing, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
    CookieBannerComponent,
    AppsComponent,
    AppDetailComponent,
    AppImprintComponent,
    AppTermsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    XGallerifyModule,
    FontAwesomeModule
  ],
  providers: [PhotoService, AppService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faCoffee, faEnvelope, faXing, faLinkedin, faTimes, faAddressCard, faQuoteRight);
  }
}
