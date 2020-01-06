import { Component } from '@angular/core';

import { TodoService } from '../services/todo.service';
import { TodoInputComponent } from './todo-input.component';
import { TodoListComponent } from './todo-list.component';

@Component({
  selector: 'todo-app',
  template: `
    <div>
      <todo-input></todo-input>
      <br />
      <todo-list></todo-list>
    </div>
  `
})
export class TodoAppComponent {}
