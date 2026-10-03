import { Component, OnInit } from '@angular/core';
import { CookieService } from 'src/app/services/cookie.service';
import { Router } from '@angular/router';
import { AnalyticsService } from 'src/app/services/analytics.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
    selector: 'app-cookie-banner',
    templateUrl: './cookie-banner.component.html',
    standalone: false
})
export class CookieBannerComponent implements OnInit {

  public show: boolean = false;

  constructor(
    private cookieService: CookieService,
    private utilitiesService: UtilitiesService,
    private analyticsService: AnalyticsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.show = !this.didOpt() && !this.utilitiesService.isSeoBot();
  }

  didOpt(){
    return this.cookieService.get('didOpt') === 'true';
  }

  didOptOut(){
    return this.cookieService.get('didOptOut') === 'true';
  }

  optIn(){
    var expirationDate = new Date();
    expirationDate.setDate( expirationDate.getDate() + 90 );

    this.cookieService.set('didOpt', 'true', expirationDate, '/');
    this.cookieService.delete('didOptOut', '/');
    this.show = !this.didOpt();
    this.analyticsService.init(this.router.url);
  }

  optOut(){
    var expirationDate = new Date();
    expirationDate.setDate( expirationDate.getDate() + 7 );

    this.cookieService.set('didOpt', 'true', expirationDate);
    this.cookieService.set('didOptOut', 'true', expirationDate);
    this.show = !this.didOpt();
    this.analyticsService.denyAnalytics();
  }

}
