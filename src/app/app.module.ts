import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
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
import { XGallerifyComponent } from '../../../../WebProjects/ng-xGallerify/projects/x-gallerify/src/lib/x-gallerify.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerLinkComponent } from './components/photography/banner-link/banner-link.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    BannerLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
