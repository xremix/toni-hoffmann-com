import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DevelopmentComponent } from './components/development/development.component';
import { MusicComponent } from './components/music/music.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { DataPrivacyComponent } from './components/data-privacy/data-privacy.component';
import { ImprintComponent } from './components/imprint/imprint.component';

const routes: Routes = [
  { path: 'development', component: DevelopmentComponent },
  { path: 'music', component: MusicComponent },
  { path: 'photography', component: PhotographyComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-privacy', component: DataPrivacyComponent },
  { path: '',   component: HomeComponent, pathMatch: 'full' }, // redirect to `home-component`,
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
