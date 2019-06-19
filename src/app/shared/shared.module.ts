import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/pro-regular-svg-icons';
import { VxButtonModule, VxMenuModule } from 'vx-components';

// TODO: Remove this when the following is fixed: https://github.com/FortAwesome/angular-fontawesome/issues/48
import { config } from '@fortawesome/fontawesome-svg-core';
import { OSService } from './os.service';
import { SeoService } from './seo.service';
import { VideoDirective } from './video.directive';
config.autoAddCss = false;

@NgModule({
  declarations: [VideoDirective],
  imports: [
    CommonModule,
    VxButtonModule,
    VxMenuModule,
    FontAwesomeModule
  ],
  exports: [
    CommonModule,
    VxButtonModule,
    VxMenuModule,
    FontAwesomeModule,
    VideoDirective
  ]
})
export class SharedModule {
  constructor() {
    library.add(faBars, faGithub);
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        OSService,
        SeoService
      ]
    };
  }
}
