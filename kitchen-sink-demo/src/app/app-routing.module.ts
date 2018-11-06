import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './demos/home';
import { InputOutputComponent } from './demos/input-output';
import { MyFormComponent, ControlFormComponent, Form2Component } from './demos/forms';
import { DITreeComponent } from './demos/di-tree';
import { AngularDirectivesComponent } from './demos/angular-directives';
import { ChangeDetectionComponent } from './demos/change-detection';
import { StressTesterComponent } from './demos/stress-tester';
import { MetadataTestComponent } from './demos/metadata-test';
import { TodoAppComponent } from './demos/todo-app';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'input-output', component: InputOutputComponent },
  { path: 'lazy-load', loadChildren: 'app/demos/lazy-load/lazy-load.module#LazyLoadModule' },
  { path: 'my-form', component: MyFormComponent },
  { path: 'control-form', component: ControlFormComponent },
  { path: 'form2', component: Form2Component },
  { path: 'di-tree', component: DITreeComponent },
  { path: 'todo-app', component: TodoAppComponent },
  { path: 'angular-directives', component: AngularDirectivesComponent },
  { path: 'change-detection', component: ChangeDetectionComponent },
  { path: 'stress-tester', component: StressTesterComponent },
  { path: 'metadata-test', component: MetadataTestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
