import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html'
})
export class CookieBannerComponent implements OnInit {

  public show: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }


}
