import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ParksComponent } from './parks/parks.component';
import { ParkOneComponent } from './park-one/park-one.component';
import { ParkTwoComponent } from './park-two/park-two.component';
import { ParkThreeComponent } from './park-three/park-three.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParksComponent,
    ParkOneComponent,
    ParkTwoComponent,
    ParkThreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
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
    ], {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
