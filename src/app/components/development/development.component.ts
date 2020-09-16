import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';
import { UtilitiesService } from 'src/app/services/utilities.service'
import { isDevMode } from '@angular/core';
import { DevelopmentService } from 'src/app/services/development.service';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss']
})
export class DevelopmentComponent implements OnInit {

  public showPreviewFeatures: boolean = isDevMode();
  public openSourceProjects: Array<any> = [];
  public leisureProjects: Array<any> = [];

  constructor(private seoService: SeoService, private developmentService: DevelopmentService) {
    this.seoService.updatePageMetaData(
      `Fullstack Software Developer from Munich`,
      'Passionated Fullstack Software Developer for Business and Marketing mobile Apps and Websites in Munich, Bavaria, Germany'
    );
  }

  ngOnInit(): void {
    this.leisureProjects = this.developmentService.getLeisureProjects()
    this.openSourceProjects = this.developmentService.getOpenSourceProjects();
  }

  openSourceProjectRows(){
    return UtilitiesService.chunkArray(this.openSourceProjects, 3);
  }

}
