import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'input-output',
    loadChildren: () => import('./input-output/input-output.module').then(m => m.InputOutputModule)
  },
  {
    path: 'dependency-injection',
    loadChildren: () =>
      import('./dependency-injection/dependency-injection.module').then(m => m.DependencyInjectionModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('./forms-demo/forms-demo.module').then(m => m.FormsDemoModule)
  },
  {
    path: 'modules',
    loadChildren: () => import('./modules-demo/modules.module').then(m => m.ModulesModule)
  },
  {
    path: 'routes',
    loadChildren: () => import('./routes/routes.module').then(m => m.RoutesModule)
  },
  {
    path: 'kitchen-sink',
    loadChildren: () => import('./kitchen-sink/kitchen-sink.module').then(m => m.KitchenSinkModule)
  },
  {
    path: '**',
    redirectTo: 'input-output'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
