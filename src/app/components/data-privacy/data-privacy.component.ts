import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnalyticsService } from 'src/app/services/analytics.service';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-data-privacy',
  templateUrl: './data-privacy.component.html'
})
export class DataPrivacyComponent implements OnInit {
  public analyticsConsentRevoked = false;

  constructor(
    private seoService: SeoService,
    private analyticsService: AnalyticsService,
    private router: Router
  ) { }

  public grantAnalyticsConsent(): void {
    this.analyticsService.grantConsent(this.router.url);
    this.analyticsConsentRevoked = false;
  }

  public revokeAnalyticsConsent(): void {
    this.analyticsService.revokeConsent();
    this.analyticsConsentRevoked = true;
  }

  ngOnInit(): void {
    this.seoService.setPageMetaData(
      `Data Privacy`,
      'Privacy policy on the use of the portfolio website of Toni Hoffmann'
    );
  }

}
