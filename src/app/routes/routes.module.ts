import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { BaseComponent } from './base/base.component';
import { HomeComponent } from './home/home.component';
import { ParksComponent } from './parks/parks.component';
import { ParkOneComponent } from './park-one/park-one.component';
import { ParkTwoComponent } from './park-two/park-two.component';
import { ParkThreeComponent } from './park-three/park-three.component';
import { RoutesRoutingModule } from './routes-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BaseComponent,
    HomeComponent,
    ParksComponent,
    ParkOneComponent,
    ParkTwoComponent,
    ParkThreeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RoutesRoutingModule,
    SharedModule
  ]
})
export class RoutesModule { }
