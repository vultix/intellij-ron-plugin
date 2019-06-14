import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LicenseComponent } from './license/license.component';
import { SharedModule } from './shared/shared.module';
import { BadUrlComponent } from './bad-url/bad-url.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'license', component: LicenseComponent},
  {path: '404', component: BadUrlComponent},
  {path: '**', redirectTo: '/404'}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LicenseComponent,
    BadUrlComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'documentation'
    }),
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
