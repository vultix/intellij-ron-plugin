import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComingSoonComponent } from './coming-soon.component';

const routes: Routes = [
  {path: '', component: ComingSoonComponent}
];

@NgModule({
  declarations: [ComingSoonComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ComingSoonModule { }
