import { Component } from '@angular/core';
import{Router, NavigationEnd} from '@angular/router';
import{AnalyticsService} from 'src/app/services/analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'toni-hoffmann-com';
  constructor(public router: Router, public analyaticsService: AnalyticsService){
      this.router.events.subscribe(event => {
         if(event instanceof NavigationEnd){
           this.analyaticsService.init(event);
          }
       }
    )}
}
