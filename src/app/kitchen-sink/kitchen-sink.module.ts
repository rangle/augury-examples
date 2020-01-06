import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { KitchenSinkRoutingModule } from './kitchen-sink-routing.module';

// demos
import { HomeComponent } from './home';
import { CounterComponent, InputOutputComponent } from './input-output';
import { MyFormComponent, ControlFormComponent, Form2Component } from './forms';
import { DI_TREE_SERVICES, DI_TREE_COMPONENTS } from './di-tree';
import { ANGULAR_DIRECTIVES_COMPONENTS } from './angular-directives';
import { CHANGE_DETECTION_COMPONENTS } from './change-detection';
import { STRESS_TESTER_COMPONENTS } from './stress-tester';
import { METADATA_TEST_COMPONENTS } from './metadata-test';
import { TODO_APP_SERVICES, TODO_APP_COMPONENTS } from './todo-app';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent,
    InputOutputComponent,
    CounterComponent,
    MyFormComponent,
    ControlFormComponent,
    Form2Component,
    ...DI_TREE_COMPONENTS,
    ...ANGULAR_DIRECTIVES_COMPONENTS,
    ...CHANGE_DETECTION_COMPONENTS,
    ...STRESS_TESTER_COMPONENTS,
    ...METADATA_TEST_COMPONENTS,
    ...TODO_APP_COMPONENTS
  ],
  imports: [FormsModule, ReactiveFormsModule, CommonModule, KitchenSinkRoutingModule],
  providers: [...DI_TREE_SERVICES, ...TODO_APP_SERVICES]
})
export class KitchenSinkModule {}
