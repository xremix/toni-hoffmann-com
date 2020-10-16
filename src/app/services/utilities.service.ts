import { isPlatformBrowser } from '@angular/common';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  public isBrowser(){
    return isPlatformBrowser(this.platformId);
  }

  public isSeoBot(){
    return /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);
  }

  public static chunkArray(myArray: Array<any>, chunk_size: number): Array<any>{
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
      var myChunk = myArray.slice(index, index + chunk_size);
      tempArray.push(myChunk);
    }

    return tempArray;
  }

  public static fillArray(length: number): Array<number>{
    return Array(length).fill(1, 0, length).map((x,i)=>i+1);
  }
}
