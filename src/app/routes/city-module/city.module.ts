import { NgModule } from '@angular/core';

import { CityRoutingModule } from './city-routing.module';
import { CityComponent } from './city.component';
import { CityOneComponent } from './city-one.component';
import { CityTwoComponent } from './city-two.component';
import { CityThreeComponent } from './city-three.component';

@NgModule({
  declarations: [
    CityComponent,
    CityOneComponent,
    CityTwoComponent,
    CityThreeComponent
  ],
  imports: [
    CityRoutingModule
  ]
})
export class CityModule {
}
