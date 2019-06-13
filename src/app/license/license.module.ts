import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LicenseComponent } from './license.component';

const routes: Routes = [
  {path: '', component: LicenseComponent}
];

@NgModule({
  declarations: [LicenseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LicenseModule { }
