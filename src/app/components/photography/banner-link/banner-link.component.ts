import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-link',
  templateUrl: './banner-link.component.html',
  styleUrls: ['./banner-link.component.scss']
})
export class BannerLinkComponent implements OnInit {
  @Input() public title: string;
  @Input() public subTitle: string;
  @Input() public imageUrl: string;
  @Input() public href: string;

  constructor() { }

  ngOnInit(): void {
  }

}
