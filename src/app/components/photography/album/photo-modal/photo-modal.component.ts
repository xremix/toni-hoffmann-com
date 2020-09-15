import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-modal',
  templateUrl: './photo-modal.component.html',
  styleUrls: ['./photo-modal.component.scss']
})
export class PhotoModalComponent {
  @Input() photo: any;
  public loading: boolean = false;
  public hide: boolean = true;

  public close(){
    this.hide = true;
  }

  public show(photo: any){
    this.photo = photo;
    this.hide = false;
  }

}
