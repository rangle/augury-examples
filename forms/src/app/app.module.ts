import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ModelFormComponent } from './model-form/model-form.component';
import { LoginModelFormComponent } from './login-model-form/login-model-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    ModelFormComponent,
    LoginModelFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
