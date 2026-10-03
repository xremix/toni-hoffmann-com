import { Injectable } from '@angular/core';
import { DefaultUrlSerializer, UrlTree } from '@angular/router';

@Injectable()
export class TrailingSlashUrlSerializer extends DefaultUrlSerializer {
  parse(url: string): UrlTree {
    // Accept old /. links without adding a dot segment to the route.
    const normalized = url.replace(/^([^?#]*)\/\.\/?([?#].*)?$/, '$1/$2');
    return super.parse(normalized.replace(/^([^?#]+)\/([?#].*)?$/, '$1$2'));
  }

  serialize(tree: UrlTree): string {
    const url = super.serialize(tree);
    const suffixIndex = url.search(/[?#]/);
    const path = suffixIndex === -1 ? url : url.slice(0, suffixIndex);
    const suffix = suffixIndex === -1 ? '' : url.slice(suffixIndex);
    return (path.endsWith('/') ? path : path + '/') + suffix;
  }
}
