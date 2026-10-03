import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXing, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard, faCoffee, faEnvelope, faQuoteRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { XGallerifyModule } from '@xremix/ng-x-gallerify';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppDetailComponent } from './components/apps/app-detail/app-detail.component';
import { AppImprintComponent } from './components/apps/app-imprint/app-imprint.component';
import { AppTermsComponent } from './components/apps/app-terms/app-terms.component';
import { AppsComponent } from './components/apps/apps.component';
import { ContactComponent } from './components/contact/contact.component';
import { DataPrivacyComponent } from './components/data-privacy/data-privacy.component';
import { DevelopmentComponent } from './components/development/development.component';
import { HomeComponent } from './components/home/home.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { MusicComponent } from './components/music/music.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AlbumComponent } from './components/photography/album/album.component';
import { PhotoModalComponent } from './components/photography/album/photo-modal/photo-modal.component';
import { BannerLinkComponent } from './components/photography/banner-link/banner-link.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { CallToActionComponent } from './components/shared/call-to-action/call-to-action.component';
import { CookieBannerComponent } from './components/shared/cookie-banner/cookie-banner.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ImageCardComponent } from './components/shared/image-card/image-card.component';
import { LayoutComponent } from './components/shared/layout/layout.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { SafePipe } from './safe-pipe';
import { AppService } from './services/app.service';
import { PhotoService } from './services/photo.service';
import { SeoService } from './services/seo.service';
import { PhotoDetailComponent } from './components/photography/photo-detail/photo-detail.component';

@NgModule({
  declarations: [
    AlbumComponent,
    AppComponent,
    AppDetailComponent,
    AppImprintComponent,
    AppsComponent,
    AppTermsComponent,
    BannerLinkComponent,
    CallToActionComponent,
    ContactComponent,
    CookieBannerComponent,
    DataPrivacyComponent,
    DevelopmentComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ImageCardComponent,
    ImprintComponent,
    LayoutComponent,
    MusicComponent,
    NavigationComponent,
    PageNotFoundComponent,
    PhotographyComponent,
    PhotoModalComponent,
    PhotoDetailComponent,
    SafePipe,
    SpinnerComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule,
    NgbModule,
    XGallerifyModule
  ],
  providers: [
    AppService,
    PhotoService,
    SeoService,
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faCoffee, faEnvelope, faXing, faLinkedin, faTimes, faAddressCard, faQuoteRight);
  }
}
