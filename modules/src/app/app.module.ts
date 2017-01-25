import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { Logger } from './services/logger.service';

import { SongsModule } from './modules/songs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SongsModule
  ],
  providers: [Logger],
  bootstrap: [AppComponent]
})
export class AppModule { }
