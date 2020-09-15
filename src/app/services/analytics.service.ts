import { Injectable } from '@angular/core';

declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() { }

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
      gtag('config', 'UA-40522413-1',
      {
        'page_path': event.urlAfterRedirects
      }
    );
  }
}
