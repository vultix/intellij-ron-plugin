import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageService } from './page.service';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {path: '', pathMatch: 'full', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)}
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
    SharedModule
  ],
  providers: [PageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
