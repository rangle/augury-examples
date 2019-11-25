import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputOutputRoutingModule } from './input-output-routing.module';
import { MessageEntryComponent } from './message-entry/message-entry.component';
import { BaseComponent } from './base/base.component';
import { CounterComponent } from './counter/counter.component';
import { MessageBoardComponent } from './message-board/message-board.component';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  declarations: [
    BaseComponent,
    CounterComponent,
    MessageBoardComponent,
    MessageEntryComponent,
    ToggleComponent
  ],
  imports: [
    CommonModule,
    InputOutputRoutingModule,
    FormsModule,
  ],
})
export class InputOutputModule { }
