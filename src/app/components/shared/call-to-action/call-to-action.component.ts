import { Component, OnInit, Input, HostListener } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss']
})
export class CallToActionComponent implements OnInit {
  @Input() public hide: boolean = true;
  @Input() public showScrollPosition: number;
  @Input() public showTime: number;
  @Input() public hideTime: number;
  @Input() public text: string;
  @Input() public style: string = 'primary';
  @Input() public position: string = 'fixed-bottom';

  private showTimerAction: any;
  private hideTimerAction: any;

  public contentVisible: boolean = false;

  constructor(public analyaticsService: AnalyticsService, private utilitiesService: UtilitiesService) { }

  ngOnInit(): void {
    this.reset();
  }

  private reset(){
    this.hide = !!(this.showScrollPosition || this.showTime);
  }

  public startTriggers(){
    if(this.showTime){
      // Hide
      this.hideAction();

      // Show after specific time
      this.showTimerAction = setTimeout(() => {
        this.hide = false;

        // Hide after specific time
        if(this.hideTime){
          this.hideTimerAction = setTimeout(() => {
            this.hide = true;
          }, this.hideTime);
        }

      }, this.showTime);
    }else{
      this.hide = false;
    }
  }

  public hideAction(){
    this.hide = true;

    // Clear running timers
    this.showTimerAction && clearTimeout(this.showTimerAction);
    this.hideTimerAction && clearTimeout(this.hideTimerAction);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if(this.utilitiesService.isBrowser()){
      if(this.showScrollPosition){
        var _hide = window.scrollY < this.showScrollPosition;
        if(_hide != this.hide){
          this.hide = _hide;
        }
      }
    }

  }

  public clickCallToAction(){
    this.showContent();
    this.analyaticsService.eventEmitter("button-click", "Album", "call-to-action", "click", 10);
  }

  public showContent(){
    this.contentVisible = true;
  }
  public hideContent(){
    this.contentVisible = false;
  }

}
