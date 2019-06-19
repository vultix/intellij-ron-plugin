import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BadUrlComponent } from './bad-url/bad-url.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { LicenseComponent } from './license/license.component';
import { QuickStartComponent } from './quick-start/quick-start.component';
import { SharedModule } from './shared/shared.module';

// Reminder: When adding / changing routes, add them to /prerenderer/prerenderer.ts and app.component.ts
const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: HomeComponent, data: {
      description: 'RON (Rusty Object Notation) language plugin for IntelliJ Idea',
      title: 'IntelliJ-RON Plugin'
    }
  },
  {
    path: 'license', component: LicenseComponent, data: {
      description: 'IntelliJ-RON plugin license',
      title: 'RON Plugin License'
    }
  },
  {
    path: 'features', component: FeaturesComponent, data: {
      description: 'IntelliJ-RON (Rusty Object Notation) plugin features, keyboard shortcuts, and examples.',
      title: 'Features'
    }
  },
  {
    path: 'quickstart', component: QuickStartComponent, data: {
      description: 'Getting started guide for using the RON (Rusty Object Notation) plugin with IntelliJ Idea.',
      title: 'Quick Start'
    }
  },
  {
    path: '404', component: BadUrlComponent, data: {
      description: '404 Page Not Found',
      title: '404 Page Not Found'
    }
  },
  {path: '**', redirectTo: '/404'}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LicenseComponent,
    BadUrlComponent,
    FeaturesComponent,
    QuickStartComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'documentation'
    }),
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
