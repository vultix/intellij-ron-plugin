import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/pro-regular-svg-icons';
import { VxButtonModule, VxMenuModule } from 'vx-components';

@NgModule({
  declarations: [],
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
    FontAwesomeModule
  ]
})
export class SharedModule {
  constructor() {
    library.add(faBars, faGithub);
  }
}
