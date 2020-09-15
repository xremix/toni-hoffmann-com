import {HostListener, Component, Input, ViewChild} from '@angular/core';
import {CallToActionComponent} from 'src/app/components/shared/call-to-action/call-to-action.component';

@Component({
  selector: 'app-photo-modal',
  templateUrl: './photo-modal.component.html',
  styleUrls: ['./photo-modal.component.scss']
})
export class PhotoModalComponent {
  @Input() photo: any;

  public loading: boolean = false;
  public hide: boolean = true;

  @ViewChild('callToAction') callToAction: CallToActionComponent;

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: any) {
    this.close();
  }

  public close(){
    this.hide = true;
  }

  public show(photo: any){
    this.photo = photo;
    this.hide = false;
    this.callToAction.reset();
  }

}
