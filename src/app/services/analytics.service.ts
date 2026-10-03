import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { UtilitiesService } from 'src/app/services/utilities.service';

type GoogleTagValue = string | number | boolean | Date | null | undefined |
  { [key: string]: string | number | boolean | null | undefined };

declare global {
  interface Window {
    dataLayer: GoogleTagValue[][];
    gtag: (...args: GoogleTagValue[]) => void;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private initialized = false;

  constructor(private cookieService: CookieService, private utilitiesService: UtilitiesService) {}

  public eventEmitter(
    eventName: string,
    eventCategory: string,
    eventAction: string,
    eventLabel: string = null,
    eventValue: number = null
  ): void {
    if (!this.initialized || !this.hasAnalyticsConsent()) {
      return;
    }

    window.gtag('event', eventName, {
      event_category: eventCategory,
      event_action: eventAction,
      event_label: eventLabel,
      event_value: eventValue
    });
  }

  public init(pagePath: string): void {
    if (!this.utilitiesService.isBrowser() || !this.hasAnalyticsConsent() || !environment.googleAnalyticsId) {
      return;
    }

    if (!this.initialized) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = (...args: GoogleTagValue[]): void => {
        window.dataLayer.push(args);
      };
      window.gtag('js', new Date());
      window.gtag('consent', 'default', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied'
      });
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied'
      });
      window.gtag('config', environment.googleAnalyticsId, {
        send_page_view: false,
        allow_google_signals: false,
        allow_ad_personalization_signals: false
      });

      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${environment.googleAnalyticsId}`;
      script.onerror = (): void => {
        this.initialized = false;
        console.error('Google Analytics could not be loaded.');
      };
      document.head.appendChild(script);
      this.initialized = true;
    }

    window.gtag('event', 'page_view', { page_path: pagePath });
  }

  public grantConsent(pagePath: string): void {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 90);

    this.cookieService.set('didOpt', 'true', expirationDate, '/');
    this.cookieService.delete('didOptOut', '/');
    this.init(pagePath);
  }

  public denyAnalytics(): void {
    if (this.initialized && this.utilitiesService.isBrowser()) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied'
      });
      this.initialized = false;
    }
  }

  public revokeConsent(): void {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);

    this.cookieService.set('didOpt', 'true', expirationDate);
    this.cookieService.set('didOptOut', 'true', expirationDate);
    this.denyAnalytics();
  }

  private hasAnalyticsConsent(): boolean {
    return this.cookieService.get('didOpt') === 'true' &&
      this.cookieService.get('didOptOut') !== 'true';
  }
}
