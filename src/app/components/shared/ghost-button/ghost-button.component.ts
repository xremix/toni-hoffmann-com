import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ghost-button',
  templateUrl: './ghost-button.component.html',
  styleUrls: ['./ghost-button.component.scss']
})
export class GhostButtonComponent implements OnInit {
  @Input() public title: string;
  @Input() public routerLink: string;
  constructor() { }

  ngOnInit(): void {
  }

}
