import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { BaseComponent } from './base/base.component';
import { Logger } from './services/logger.service';
import { ReposModule } from './repos/repos.module';

@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ModulesRoutingModule,
    ReposModule
  ],
  providers: [Logger],
  bootstrap: [BaseComponent]
})
export class ModulesModule { }
