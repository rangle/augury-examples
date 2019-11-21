import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { BaseComponent } from './base/base.component';

const routes: Routes = [
  { path: '', component: BaseComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsDemoRoutingModule { }
