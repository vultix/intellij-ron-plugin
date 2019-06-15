import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { cache } from '../cache';

export type OS = 'win' | 'mac';
@Injectable()
export class OSService {
  @cache()
  get os(): OS {
    const isBrowser = isPlatformBrowser(this.platformId);
    const macTests = ['Mac', 'iPhone', 'iPad', 'iPod'];

    if (isBrowser && macTests.find(test => window.navigator.platform.includes(test))) {
      return 'mac';
    } else {
      return 'win';
    }
  }

  constructor(@Inject(PLATFORM_ID) private platformId: any) {

  }
}
