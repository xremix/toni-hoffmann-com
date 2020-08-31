import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-banner',
  templateUrl: './header-banner.component.html',
  styleUrls: ['./header-banner.component.scss']
})
export class HeaderBannerComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  @Input() galleryTitle: string;
  @Input() gallerySubtitle: string;
  @Input() galleryImage: string;
}
