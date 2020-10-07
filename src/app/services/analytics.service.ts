import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private cookieService: CookieService) { }

  public eventEmitter(
    eventName: string,
    eventCategory: string,
    eventAction: string,
    eventLabel: string = null,
    eventValue: number = null ){
      gtag('event', eventName, {
        eventCategory: eventCategory,
        eventLabel: eventLabel,
        eventAction: eventAction,
        eventValue: eventValue
      });
    }

    public init(event: any){
      if(this.cookieService.get('didOptOut') !== 'true'){
        gtag('config', environment.googleAnalyticsId,
        {
          'page_path': event.urlAfterRedirects
        });
      }
    }
  }
