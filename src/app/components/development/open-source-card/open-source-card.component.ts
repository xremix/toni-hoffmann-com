import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-open-source-card',
  templateUrl: './open-source-card.component.html',
  styleUrls: ['./open-source-card.component.scss']
})
export class OpenSourceCardComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() url: string;

  constructor() { }

  ngOnInit(): void {
  }

}
