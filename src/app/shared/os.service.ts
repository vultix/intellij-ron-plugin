import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { cache } from 'decorator-cache-getter';

export type OS = 'win' | 'mac';
@Injectable()
export class OSService {
  @cache
  get os(): OS {
    const isBrowser = isPlatformBrowser(this.platformId);
    console.log('Getting value')

    if (isBrowser && window.navigator.platform.includes('Mac')) {
      return 'mac';
    } else {
      return 'win';
    }
  }

  constructor(@Inject(PLATFORM_ID) private platformId: any) {

  }
}
