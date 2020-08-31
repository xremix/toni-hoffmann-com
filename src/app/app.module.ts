import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DevelopmentComponent } from './components/development/development.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { MusicComponent } from './components/music/music.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { DataPrivacyComponent } from './components/data-privacy/data-privacy.component';
import { GhostButtonComponent } from './components/shared/ghost-button/ghost-button.component';
import { AlbumComponent } from './components/photography/album/album.component';

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
    GhostButtonComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
