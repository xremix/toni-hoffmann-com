import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { UtilitiesService } from 'src/app/services/utilities.service'

declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private cookieService: CookieService, private utilitiesService: UtilitiesService) { }

  public eventEmitter(
    eventName: string,
    eventCategory: string,
    eventAction: string,
    eventLabel: string = null,
    eventValue: number = null ){
      if (this.utilitiesService.isBrowser()) {
        gtag('event', eventName, {
          eventCategory: eventCategory,
          eventLabel: eventLabel,
          eventAction: eventAction,
          eventValue: eventValue
        });
      }
    }

    public init(event: any){
      if(this.cookieService.get('didOptOut') !== 'true'){
        if (this.utilitiesService.isBrowser()) {
          gtag('config', environment.googleAnalyticsId,
          {
            'page_path': event.urlAfterRedirects
          });
        }
      }
    }
  }
