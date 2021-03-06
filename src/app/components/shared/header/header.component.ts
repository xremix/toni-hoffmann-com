import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public contentOpacity: number = 1;

  @Input() galleryTitle: string;
  @Input() gallerySubtitle: string;
  @Input() galleryImage: string;
  @Input() showDefaultHeader: boolean = false;
  @Input() coverRight: boolean = false;
  @Input() asHeader: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    var headerFadeOut = screen.height * 0.2;
    this.contentOpacity = 1 - (window.scrollY / headerFadeOut);
  }
}
