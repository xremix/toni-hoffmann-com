import { Injectable } from '@angular/core';
import { OpenSourceProject } from 'src/app/models/open-source-project';
import { LeisureProject } from 'src/app/models/leisure-project';

@Injectable({
  providedIn: 'root'
})
export class DevelopmentService {

public getOpenSourceProjects(): Array<OpenSourceProject>{
  return [
    {
      'title': 'toni-hoffmann.com',
      'url': 'https://github.com/xremix/toni-hoffmann-com',
      'description': 'The idea behind Open Source is the basement of software development - so why not open sourcing this website?'
    },{
      'title': 'Flashlight for OS X',
      'url': 'https://github.com/nate-parrott/Flashlight/graphs/contributors',
      'description': 'An Open-Source project that allows to bore up the search in macOS. It was used by thousands of users. Next to the founder I was the top contributor with over 120 commits, until the project was stopped.'
    },
    {
      'title': 'SwiftGS1Barcode',
      'url': 'https://github.com/xremix/SwiftGS1Barcode',
      'description': 'A Swift Library to Parse the GS1 Barcode Standard for iOS Apps'
    },
    {
      'title': 'xGallerify',
      'url': 'https://github.com/xremix/xGallerify',
      'description': 'A lightweight, responsive, smart gallery based on jQuery, which had the focus to presend landscape oriented pictures over portraits'
    },
    {
      'title': 'Diff Match Patch CF Wheels port',
      'url': 'https://github.com/xremix/diff-match-path-cfwheels',
      'description': 'The first Cold Fusion port of the famous Diff-Match-Patch library from Google, which uses the Java API to extend CFWheels'
    },
    {
      'title': 'Flashlight Plugins',
      'url': 'https://github.com/xremix/FlashlightPlugins',
      'description': 'Plugins for the Flashlight App for macOS, to add web-based features to the macOS search'
    },
    {
      'title': 'ng-xGallerify',
      'url': 'https://github.com/xremix/ng-xGallerify',
      'description': 'The second version of xGallerify, developed for Angular Applications'
    },
    {
      'title': 'Camera Remote - JS',
      'url': 'https://github.com/xremix/Camera-Remote-JS',
      'description': 'Remote control your Sony Camera. Using one API and build an Application in Browser, Node.js, or a JavaScript Hybrid App'
    },
    {
      'title': 'Flexgrid',
      'url': 'https://github.com/xremix/Flexgrid',
      'description': 'A lightweight CSS3 grid, based on flex box'
    }
  ];
}
}
