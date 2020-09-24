import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html'
})
export class CookieBannerComponent implements OnInit {

  public show: boolean = false;

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.show = !this.didOpt();
  }

  didOpt(){
    return this.cookieService.get('didOpt') === 'true';
  }

  didOptOut(){
    return this.cookieService.get('didOptOut') === 'true';
  }

  optIn(){
    this.cookieService.set('didOpt', 'true');
    this.show = !this.didOpt();
  }

  optOut(){
    this.cookieService.set('didOpt', 'true');
    this.cookieService.set('didOptOut', 'true');
    this.show = !this.didOpt();
  }

}
