import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormNewUserComponent } from './form-new-user/form-new-user.component';
import { NewUserService  } from './new-user.service';


@NgModule({
  declarations: [
    AppComponent,
    FormNewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [NewUserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
