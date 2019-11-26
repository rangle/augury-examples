import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BaseComponent } from './base/base.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ModelFormComponent } from './model-form/model-form.component';
import { LoginModelFormComponent } from './login-model-form/login-model-form.component';
import { FormsDemoRoutingModule } from './forms-demo-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BaseComponent,
    LoginFormComponent,
    ModelFormComponent,
    LoginModelFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FormsDemoRoutingModule
  ],
})
export class FormsDemoModule { }
