import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevelopmentService {

  public getLeisureProjects(): Array<any>{
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

public getOpenSourceProjects(): Array<any>{
  return [
    {
      'title': 'toni-hoffmann.com',
      'url': 'https://github.com/xremix/toni-hoffmann-com',
      'description': 'Open Source has always a passion, so why not open sourcing my private portfolio website?!'
    },{
      'title': 'Flashlight for OS X',
      'url': 'https://github.com/nate-parrott/Flashlight/graphs/contributors',
      'description': 'An Open-Source project that allows to bore up the search in macOS. It was used by thousands of users. I was (besides the founder) the top contributor with over 120 commits.'
    },
    {
      'title': 'Flashlight Plugins',
      'url': 'https://github.com/xremix/FlashlightPlugins',
      'description': 'A extra repository for some Plugins of the Flashlight project.'
    },
    {
      'title': 'xGallerify',
      'url': 'https://github.com/xremix/xGallerify',
      'description': 'A lightweight, responsive, smart gallery based on jQuery'
    },
    {
      'title': 'SwiftGS1Barcode',
      'url': 'https://github.com/xremix/SwiftGS1Barcode',
      'description': 'A GS1 Barcode Library and Parser in Swift'
    },
    {
      'title': 'Camera Remote - JS',
      'url': 'https://github.com/xremix/Camera-Remote-JS',
      'description': 'Remote control your Sony Camera. Using one API and build an Application in Browser, Node.js, or a JavaScript Hybrid App'
    },
    {
      'title': 'Yeoman Gulp, SASS, Coffescript Generator',
      'url': 'https://github.com/xremix/generator-gulp-sass-coffeescript',
      'description': 'A Webapp Scaffold to generate a templated based on Gulp, SASS and Coffeescript'
    },
    {
      'title': 'Diff Match Patch CF Wheels port',
      'url': 'https://github.com/xremix/diff-match-path-cfwheels',
      'description': 'A Cold Fusion port of the Diff-Match-Patch library, that was not available for this language yet. It basically uses the Java API and extends wheels'
    },
    {
      'title': 'Flexgrid',
      'url': 'https://github.com/xremix/Flexgrid',
      'description': 'A lightweight CSS3 flex box based grid'
    },
    // {
    //   'title': 'Ti.FontAwesome',
    //   'url': 'https://github.com/xremix/ti-fontawesome',
    //   'description': 'Use the FontAwesome Icons in Appcelerate Titanium Native Mobile Apps'
    // }
  ];
}
}
