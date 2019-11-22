import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseComponent } from './base/base.component';
import { HomeComponent } from './home/home.component';
import { ParksComponent } from './parks/parks.component';
import { ParkOneComponent } from './park-one/park-one.component';
import { ParkTwoComponent } from './park-two/park-two.component';
import { ParkThreeComponent } from './park-three/park-three.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'parks',
        component: ParksComponent,
        children: [
          {
            path: 'park1',
            component: ParkOneComponent,
            outlet: 'parkit'
          },
          {
            path: 'park2',
            component: ParkTwoComponent,
            outlet: 'parkit'
          },
          {
            path: 'park3',
            component: ParkThreeComponent,
            outlet: 'parkit'
          }
        ]
      },
      {
        path: 'cities',
        loadChildren: () => import('./city-module/city.module').then(m => m.CityModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule {
}
