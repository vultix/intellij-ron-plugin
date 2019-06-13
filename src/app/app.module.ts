import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BadUrlComponent } from './bad-url/bad-url.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'license', loadChildren: () => import('./license/license.module').then(m => m.LicenseModule)},
  {path: 'coming-soon', loadChildren: () => import('./coming-soon/coming-soon.module').then(m => m.ComingSoonModule)},
  {path: '404', component: BadUrlComponent},
  {path: '**', redirectTo: '/404'}
];


@NgModule({
  declarations: [
    AppComponent,
    BadUrlComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
