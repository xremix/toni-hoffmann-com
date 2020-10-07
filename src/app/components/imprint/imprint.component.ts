import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html'
})
export class ImprintComponent implements OnInit {

  public currentYear: number = 2020;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit(): void {
  }

}
