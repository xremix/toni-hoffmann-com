import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss']
})
export class CallToActionComponent implements OnInit {
  @Input() public hide: boolean = false;
  @Input() public showScrollPosition: number;
  @Input() public showTimed: number;

  constructor() { }

  ngOnInit(): void {
    this.reset();
  }

  public reset(){
    if(this.showScrollPosition || this.showTimed){
      this.hide = true;
    }
    if(this.showTimed){
      setTimeout(() => {
        this.hide = false;
      }, this.showTimed);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    this.hide = window.scrollY < this.showScrollPosition;
  }

}
