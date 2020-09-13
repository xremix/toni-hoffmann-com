import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {

  @Input title: string;
  @Input description: string;
  @Input imageUrl: string;
  @Input href: string;
  @Input target: string = "_self";
  @Input hideBoxTitle: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
