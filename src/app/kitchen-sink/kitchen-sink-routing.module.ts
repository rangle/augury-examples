import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { InputOutputComponent } from './input-output';
import { MyFormComponent, ControlFormComponent, Form2Component } from './forms';
import { DITreeComponent } from './di-tree';
import { AngularDirectivesComponent } from './angular-directives';
import { ChangeDetectionComponent } from './change-detection';
import { StressTesterComponent } from './stress-tester';
import { MetadataTestComponent } from './metadata-test';
import { TodoAppComponent } from './todo-app';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'input-output', component: InputOutputComponent },
      // { path: 'lazy-load', loadChildren: 'app/lazy-load/lazy-load.module#LazyLoadModule' },
      { path: 'my-form', component: MyFormComponent },
      { path: 'control-form', component: ControlFormComponent },
      { path: 'form2', component: Form2Component },
      { path: 'di-tree', component: DITreeComponent },
      { path: 'todo-app', component: TodoAppComponent },
      { path: 'angular-directives', component: AngularDirectivesComponent },
      { path: 'change-detection', component: ChangeDetectionComponent },
      { path: 'stress-tester', component: StressTesterComponent },
      { path: 'metadata-test', component: MetadataTestComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KitchenSinkRoutingModule {}
