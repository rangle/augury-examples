import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DependencyInjectionRoutingModule } from './dependency-injection-routing.module';
import { BaseComponent } from './base/base.component';
import { FormNewUserComponent } from './form-new-user/form-new-user.component';
import { NewUserService } from './new-user.service';
import { UserInfoComponent } from './user-info/user-info.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BaseComponent,
    FormNewUserComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    DependencyInjectionRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [NewUserService]
})
export class DependencyInjectionModule { }
