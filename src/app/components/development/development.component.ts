import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';
import { UtilitiesService } from 'src/app/services/utilities.service'
import { isDevMode } from '@angular/core';
import { DevelopmentService } from 'src/app/services/development.service';
import { OpenSourceProject } from 'src/app/models/open-source-project';
import { LeisureProject } from 'src/app/models/leisure-project';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-development',
  templateUrl: './development.component.html'
})
export class DevelopmentComponent implements OnInit {

  public showPreviewFeatures: boolean = isDevMode();
  public openSourceProjects: Array<OpenSourceProject> = [];
  public modalTitle: string;
  public modalText: string;

  constructor(private seoService: SeoService, private developmentService: DevelopmentService, private modalService: NgbModal) {
    this.seoService.updatePageMetaData(
      `Fullstack Software Developer from Munich`,
      'Passionated Fullstack Software Developer for Business and Marketing mobile Apps and Websites in Munich, Bavaria, Germany'
    );
  }

  ngOnInit(): void {
    this.openSourceProjects = this.developmentService.getOpenSourceProjects();
  }

  openSourceProjectRows(){
    return UtilitiesService.chunkArray(this.openSourceProjects, 3);
  }

  open(event: any, content: any, contentType: string) {
    event.preventDefault();

    if(contentType === 'native'){
      this.modalTitle = 'Native mobile Apps';
      this.modalText = `Developing native mobile Apps is not only, about building efficient code for little handhelt devices. It is a lot about understanding the user, their needs and to develop a pleasing design that sticks the attraction.`;
    }
    else if(contentType === 'business'){
      this.modalTitle = 'Business Web-Apps';
      this.modalText = `Understanding employees daily workstream, while building efficient applications with a corporate design.`;
    }
    else if(contentType === 'ux'){
      this.modalTitle = 'UX-Design';
      this.modalText = 'There is more than a beautiful Design. Understanding peoples needs, gathering their requirements and building a user centric, simple application is, what people really want.';
    }

    this.modalService.open(content);
  }

}
