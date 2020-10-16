import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UtilitiesService } from 'src/app/services/utilities.service'

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html'
})
export class CookieBannerComponent implements OnInit {

  public show: boolean = false;

  constructor(private cookieService: CookieService, private utilitiesService: UtilitiesService) { }

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

    this.cookieService.set('didOpt', 'true', expirationDate);
    this.show = !this.didOpt();
  }

  optOut(){
    var expirationDate = new Date();
    expirationDate.setDate( expirationDate.getDate() + 7 );

    this.cookieService.set('didOpt', 'true', expirationDate);
    this.cookieService.set('didOptOut', 'true', expirationDate);
    this.show = !this.didOpt();
  }

}
