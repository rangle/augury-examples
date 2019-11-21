import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'input-output',
    loadChildren: () => import('./input-output/input-output.module').then(m => m.InputOutputModule)
  },
  {
    path: 'dependency-injection',
    loadChildren: () => import('./dependency-injection/dependency-injection.module').then(m => m.DependencyInjectionModule)
  },
  {
    path: '**',
    redirectTo: 'input-output'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
