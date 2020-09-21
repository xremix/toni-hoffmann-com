import { Injectable } from '@angular/core';
import { OpenSourceProject } from 'src/app/models/open-source-project';
import { LeisureProject } from 'src/app/models/leisure-project';

@Injectable({
  providedIn: 'root'
})
export class DevelopmentService {

  public getLeisureProjects(): Array<LeisureProject>{
    return [{
      'title': 'invivo pobs',
      'url': 'http://pobs.agentur-invivo.de',
      'img':  'assets/web-projects/static-invivo-pobs.png',
      'imgAlt':  'Event Management System of the Company Invivo, Developed by Toni Hoffmann',
      'description': 'Development of the <b>p</b>romotion <b>o</b>nline <b>b</b>ooking <b>s</b>ystem for the promotion agency invivo. A custom CMS and EMS, build from scratch.'
    },
    {
      'title': 'KFZ-Sachverständiger F. S. Hoffmann',
      'url': 'https://www.fshoffmann.de',
      'img':  'assets/web-projects/static-fshoffmann.png',
      'imgAlt':  'Company Website of the KFZ-Sachverständiger F. S. Hoffmann, Developed by Toni Hoffmann',
      'description': 'Website for the motor vehicle expert Felix Hoffmann'
    },
    {
      'title': 'Kreuzfahrer Gruppe',
      'url': 'http://www.kreuzfahrer-gruppe.de',
      'img':  'assets/web-projects/static-kreuzfahrer.png',
      'imgAlt':  'Website of the medieval group Kreuzfahrer Gruppe, Developed by Toni Hoffmann',
      'description': 'Website of the medieval group Kreuzfahrer from Dachau, that acts on the famous Kaltenberger Rittertunier'
    }
  ];
}

public getOpenSourceProjects(): Array<OpenSourceProject>{
  return [
    {
      'title': 'toni-hoffmann.com',
      'url': 'https://github.com/xremix/toni-hoffmann-com',
      'description': 'Open Source has always a passion - so why not open sourcing my private portfolio website'
    },{
      'title': 'Flashlight for OS X',
      'url': 'https://github.com/nate-parrott/Flashlight/graphs/contributors',
      'description': 'An Open-Source project that allows to bore up the search in macOS. It was used by thousands of users. Next to the foudner I was the top contributor with over 120 commits, until the project was stopped.'
    },
    {
      'title': 'Flashlight Plugins',
      'url': 'https://github.com/xremix/FlashlightPlugins',
      'description': 'Plugins for the Flashlight App for macOS, to add rich web features to the macOS search'
    },
    {
      'title': 'xGallerify',
      'url': 'https://github.com/xremix/xGallerify',
      'description': 'A lightweight, responsive, smart gallery based on jQuery'
    },
    {
      'title': 'ng-xGallerify',
      'url': 'https://github.com/xremix/ng-xGallerify',
      'description': 'The second version of xGallerify, developed for Angular Applications'
    },
    {
      'title': 'SwiftGS1Barcode',
      'url': 'https://github.com/xremix/SwiftGS1Barcode',
      'description': 'A GS1 Barcode Library and Parser for Swift Apps'
    },
    {
      'title': 'Camera Remote - JS',
      'url': 'https://github.com/xremix/Camera-Remote-JS',
      'description': 'Remote control your Sony Camera. Using one API and build an Application in Browser, Node.js, or a JavaScript Hybrid App'
    },
    // {
    //   'title': 'Yeoman Gulp, SASS, Coffescript Generator',
    //   'url': 'https://github.com/xremix/generator-gulp-sass-coffeescript',
    //   'description': 'A Webapp Scaffold to generate a templated based on Gulp, SASS and Coffeescript'
    // },
    {
      'title': 'Diff Match Patch CF Wheels port',
      'url': 'https://github.com/xremix/diff-match-path-cfwheels',
      'description': 'A Cold Fusion port of the Diff-Match-Patch library, that was not available for this language yet. It basically uses the Java API and extends wheels'
    },
    {
      'title': 'Flexgrid',
      'url': 'https://github.com/xremix/Flexgrid',
      'description': 'A lightweight CSS3 grid, based on flex box'
    },
    // {
    //   'title': 'Ti.FontAwesome',
    //   'url': 'https://github.com/xremix/ti-fontawesome',
    //   'description': 'Use the FontAwesome Icons in Appcelerate Titanium Native Mobile Apps'
    // }
  ];
}
}
