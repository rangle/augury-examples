import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CityComponent } from './city.component';
import { CityOneComponent } from './city-one.component';
import { CityTwoComponent } from './city-two.component';
import { CityThreeComponent } from './city-three.component';

const routes: Routes = [
  {
    path: '',
    component: CityComponent,
    children: [
      {
        path: 'city1',
        component: CityOneComponent
      },
      {
        path: 'city2',
        component: CityTwoComponent
      },
      {
        path: 'city3',
        component: CityThreeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CityRoutingModule {

}
