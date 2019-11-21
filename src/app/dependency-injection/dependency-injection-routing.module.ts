import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { BaseComponent } from './base.component';

const routes: Routes = [
  { path: '', component: BaseComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DependencyInjectionRoutingModule { }
