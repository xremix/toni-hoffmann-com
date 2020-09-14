import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-modal',
  templateUrl: './photo-modal.component.html',
  styleUrls: ['./photo-modal.component.scss']
})
export class PhotoModalComponent {
  @Input() photo: any;

  public close(){
    this.photo = null;
  }

}
