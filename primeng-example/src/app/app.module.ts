import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PRIME_NG_COMPONENTS } from './prime-ng';
import { PRIME_NG_MODULES } from './prime-ng';


@NgModule({
  declarations: [
    AppComponent,
    ...PRIME_NG_COMPONENTS,
  ],
  imports: [
    BrowserModule,
    ...PRIME_NG_MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
