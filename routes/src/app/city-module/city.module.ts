import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CityComponent } from './city.component';
import { CityOneComponent } from './city-one.component';
import { CityTwoComponent } from './city-two.component';
import { CityThreeComponent } from './city-three.component';

@NgModule({
  imports: [
    RouterModule.forChild([
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
        ],
      },
    ])
  ],
  exports: [
    CityComponent,
    CityOneComponent,
    CityTwoComponent,
    CityThreeComponent
  ],
  declarations: [
    CityComponent,
    CityOneComponent,
    CityTwoComponent,
    CityThreeComponent
  ]
})
export class CityModule {
}
