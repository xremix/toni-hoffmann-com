import { Component, OnInit, Input, HostListener } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss']
})
export class CallToActionComponent implements OnInit {
  @Input() public hide: boolean = true;
  @Input() public showScrollPosition: number;
  @Input() public showTimed: number;
  @Input() public text: string;

  constructor(public analyaticsService: AnalyticsService) { }

  ngOnInit(): void {
    this.reset();
    if(!this.showScrollPosition && this.showTimed){
      this.hide = false;
    }
  }

  // TODO improve the behavior, to work better on modals
  public reset(){
      this.hide = true;
    if(this.showTimed){
      setTimeout(() => {
        this.hide = false;
      }, this.showTimed);
    }
  }

  public hideMe(){
    this.hide = true;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    this.hide = window.scrollY < this.showScrollPosition;
  }

  public clickCallToAction(){
    this.analyaticsService.eventEmitter("button-click", "Album", "call-to-action", "click", 10);
  }

}
