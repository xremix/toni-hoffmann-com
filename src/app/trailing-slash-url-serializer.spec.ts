import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router, UrlSerializer } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TrailingSlashUrlSerializer } from './trailing-slash-url-serializer';

@Component({
    template: '',
    standalone: false
})
class RouteComponent {}

describe('TrailingSlashUrlSerializer', () => {
  const serializer = new TrailingSlashUrlSerializer();

  [
    ['/', '/'],
    ['/contact', '/contact/'],
    ['/contact/', '/contact/'],
    ['/contact/.', '/contact/'],
    ['/contact/./', '/contact/'],
    ['/contact/.?action=email#form', '/contact/?action=email#form'],
    ['/apps/cope-stress', '/apps/cope-stress/'],
    ['/apps/cope-stress/data-privacy/', '/apps/cope-stress/data-privacy/'],
    ['/photography/landscapes/2/', '/photography/landscapes/2/'],
    ['/photography/landscapes/photo/42', '/photography/landscapes/photo/42/'],
    ['/contact?return=/.', '/contact/?return=%2F.'],
    ['/?action=email#form', '/?action=email#form'],
    ['/missing', '/missing/']
  ].forEach(([input, expected]) => {
    it(`normalizes ${input} to ${expected}`, () => {
      const tree = serializer.parse(input);
      expect(serializer.serialize(tree)).toBe(expected);
      expect(serializer.serialize(serializer.parse(expected))).toBe(expected);
    });
  });

  describe('router navigation', () => {
    let router: Router;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [RouteComponent],
        imports: [RouterTestingModule.withRoutes([
          { path: 'contact', component: RouteComponent },
          { path: 'apps/:appid', component: RouteComponent },
          { path: 'photography/:album/:page', component: RouteComponent },
          { path: '404', component: RouteComponent },
          { path: '**', redirectTo: '404' }
        ])],
        providers: [{ provide: UrlSerializer, useClass: TrailingSlashUrlSerializer }]
      });
      router = TestBed.inject(Router);
    });

    it('matches direct URLs with and without trailing slashes and legacy dots', async () => {
      for (const url of ['/contact', '/contact/', '/contact/.']) {
        await router.navigateByUrl(url);
        expect(router.url).toBe('/contact/');
        expect(router.routerState.snapshot.root.firstChild.routeConfig.path).toBe('contact');
      }
    });

    it('matches routerLink commands and preserves parameters, queries and fragments', async () => {
      const tree = router.createUrlTree(['/photography/landscapes/2/'], {
        queryParams: { view: 'grid' }, fragment: 'gallery'
      });
      expect(router.serializeUrl(tree)).toBe('/photography/landscapes/2/?view=grid#gallery');
      await router.navigateByUrl(tree);
      expect(router.routerState.snapshot.root.firstChild.params).toEqual({
        album: 'landscapes', page: '2'
      });
      await router.navigate(['/apps/cope-stress/']);
      expect(router.url).toBe('/apps/cope-stress/');
      expect(router.routerState.snapshot.root.firstChild.params.appid).toBe('cope-stress');
    });

    it('keeps the not-found redirect working', async () => {
      await router.navigateByUrl('/missing/');
      expect(router.url).toBe('/404/');
    });
  });
});
