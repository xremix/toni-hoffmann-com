import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo-modal',
  templateUrl: './photo-modal.component.html',
  styleUrls: ['./photo-modal.component.scss']
})
export class PhotoModalComponent implements OnInit {
  @Input() photo: any;
  constructor() { }

  ngOnInit(): void {
  }

}
