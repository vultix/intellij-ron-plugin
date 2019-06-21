import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { FaIconService } from '@fortawesome/angular-fontawesome';
import { filter, map, mergeMap } from 'rxjs/operators';
import { SeoService } from './shared/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  routes = [
    {name: 'Home', route: '/'},
    {name: 'Changelog', route: '/changelog'},
    {name: 'Features', route: '/features'},
    {name: 'Quick Start Guide', route: '/quickstart'},
    // {name: 'Plugin License', route: '/license'},
  ];

  constructor(private faService: FaIconService,
              private seoService: SeoService,
              private router: Router,
              private activatedRoute: ActivatedRoute, @Inject(PLATFORM_ID) private platform: any) {
    faService.defaultPrefix = 'far';
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        if (isPlatformBrowser(this.platform)) {
          const scrolling = document.scrollingElement || document.body;
          scrolling.scrollTop = 0;
        }

        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      mergeMap(route => route.data)
    )
      .subscribe((event) => {
        this.seoService.setTitle(event.title);
        this.seoService.setDescription(event.description);
      });
  }
}
