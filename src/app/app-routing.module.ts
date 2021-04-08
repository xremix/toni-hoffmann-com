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
import { AppsComponent } from './components/apps/apps.component';
import { AppDetailComponent } from './components/apps/app-detail/app-detail.component';
import { AppImprintComponent } from './components/apps/app-imprint/app-imprint.component';
import { AppTermsComponent } from './components/apps/app-terms/app-terms.component';
import { LayoutComponent } from './components/shared/layout/layout.component';

const routes: Routes = [

  { path: 'apps/:appid/data-privacy', component: AppImprintComponent },
  { path: 'apps/:appid/terms', component: AppTermsComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'cityscapes', redirectTo: '/photography/cityscapes/1'}, // legacy
      { path: 'landscapes', redirectTo: '/photography/landscapes/1'}, // legacy
      { path: 'contact', component: ContactComponent },
      { path: 'contact/:action', component: ContactComponent },
      { path: 'development', component: DevelopmentComponent },
      { path: 'music', component: MusicComponent },
      { path: 'apps', component: AppsComponent },
      { path: 'apps/:appid', component: AppDetailComponent },
      { path: 'photography', component: PhotographyComponent },
      { path: 'photography/:album', component: AlbumComponent },
      { path: 'photography/:album/:page', component: AlbumComponent },
      { path: 'photography/:album/photo/:photoid', component: AlbumComponent },
      { path: 'imprint', component: ImprintComponent },
      { path: 'data-privacy', component: DataPrivacyComponent },
      { path: '', component: HomeComponent, pathMatch: 'full' }, // redirect to `home-component`,
      { path: '404', component: PageNotFoundComponent },
      { path: '**', redirectTo: '/404' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
