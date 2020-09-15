import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DevelopmentComponent } from './components/development/development.component';
import { ContactComponent } from './components/contact/contact.component';
import { MusicComponent } from './components/music/music.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { DataPrivacyComponent } from './components/data-privacy/data-privacy.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { AlbumComponent } from './components/photography/album/album.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'contact/:action', component: ContactComponent },
  { path: 'development', component: DevelopmentComponent },
  { path: 'music', component: MusicComponent },
  { path: 'photography', component: PhotographyComponent },
  { path: 'photography/:album', component: AlbumComponent },
  { path: 'photography/:album/:page', component: AlbumComponent },
  { path: 'photography/:album/photo/:photoid', component: AlbumComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-privacy', component: DataPrivacyComponent },
  { path: '',   component: HomeComponent, pathMatch: 'full' }, // redirect to `home-component`,
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
