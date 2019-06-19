import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mapTo } from 'rxjs/operators';

@Injectable()
export class SeoService {
  constructor(private title: Title, private meta: Meta) {}

  setTitle(title: string) {
    this.title.setTitle(title);
  }

  setDescription(desc: string) {
    this.meta.updateTag({ name: 'description', content: desc })
  }
}
