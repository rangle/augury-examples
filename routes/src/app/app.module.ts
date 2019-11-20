import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ParksComponent } from './parks/parks.component';
import { ParkOneComponent } from './park-one/park-one.component';
import { ParkTwoComponent } from './park-two/park-two.component';
import { ParkThreeComponent } from './park-three/park-three.component';
import { AppRoutingModule } from './app-routing.module';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
