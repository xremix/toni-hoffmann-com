import { Component, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AnalyticsService } from 'src/app/services/analytics.service';
import { NavigationComponent } from 'src/app/components/shared/navigation/navigation.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('navigation') navigation: NavigationComponent;

  constructor(public router: Router, public analyaticsService: AnalyticsService){
      this.router.events.subscribe(event => {
         if(event instanceof NavigationEnd){
           this.analyaticsService.init(event);
           this.navigation.isNavbarCollapsed = true;
          }
       }
    )}
}
