import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  get(name: string): string {
    if (!isPlatformBrowser(this.platformId)) {
      return '';
    }

    const prefix = `${encodeURIComponent(name)}=`;
    const cookie = this.document.cookie
      .split(';')
      .map(value => value.trim())
      .find(value => value.startsWith(prefix));

    return cookie ? decodeURIComponent(cookie.slice(prefix.length)) : '';
  }

  set(name: string, value: string, expires?: Date, path?: string): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const expiration = expires ? `;expires=${expires.toUTCString()}` : '';
    const cookiePath = path ? `;path=${path}` : '';
    this.document.cookie =
      `${encodeURIComponent(name)}=${encodeURIComponent(value)}${expiration}${cookiePath};SameSite=Lax`;
  }

  delete(name: string, path?: string): void {
    this.set(name, '', new Date(0), path);
  }
}
