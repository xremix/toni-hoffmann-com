import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public isNavbarCollapsed = true;

  constructor(public photoService: PhotoService, public appService: AppService) { }

  ngOnInit(): void {
  }

}
