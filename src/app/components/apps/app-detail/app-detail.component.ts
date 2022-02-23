import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeoService } from 'src/app/services/seo.service';
import { UtilitiesService } from 'src/app/services/utilities.service'
import { isDevMode } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { App } from 'src/app/models/app';
import { LeisureProject } from 'src/app/models/leisure-project';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-app-detail',
  templateUrl: './app-detail.component.html'
})
export class AppDetailComponent {

  public app: App;

  constructor(public router: Router, private route: ActivatedRoute, private seoService: SeoService, private appService: AppService, private modalService: NgbModal, private utilitiesService: UtilitiesService) {


  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {


      
      
      this.app = this.appService.getApp(params['appid']);
      
      this.seoService.setPageMetaData(
        this.app.title,
        `${this.app.title} Mobile App for iOS, iPhone, iPad and macOS, Developed by Toni Hoffmann from Munich, Bavaria, Germany`
      );
    });
  }

}
