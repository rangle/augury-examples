import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ModelFormComponent } from './model-form/model-form.component';
import { LoginModelFormComponent } from './login-model-form/login-model-form.component';
import { ArrayFormComponent } from './array-form/array-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelFormComponent,
    LoginModelFormComponent,
    ArrayFormComponent
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
