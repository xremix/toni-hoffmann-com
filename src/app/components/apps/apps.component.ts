import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';
import { UtilitiesService } from 'src/app/services/utilities.service'
import { isDevMode } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { App } from 'src/app/models/app';
import { LeisureProject } from 'src/app/models/leisure-project';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html'
})
export class AppsComponent implements OnInit {

  public apps: Array<App> = [];


  constructor(private seoService: SeoService, private appService: AppService, private modalService: NgbModal, private utilitiesService: UtilitiesService) {
    // TODO change this
    this.seoService.setPageMetaData(
      `iOS and macOS Apps for iPhone and iPad`,
      'Motorbike, Barcode and GEO Apps for your iPhone, iPad and MacBook developed by Software Developer from Munich, Bavaria, Germany'
    );

  }

  ngOnInit(): void {
    this.apps = this.appService.getApps();
  }
}
