import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { Logger } from './services/logger.service';

import { ReposModule } from './modules/repos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReposModule
  ],
  providers: [Logger],
  bootstrap: [AppComponent]
})
export class AppModule { }
