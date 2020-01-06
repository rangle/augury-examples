import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { TodoModel } from '../models/todo.model';
import { FormatService } from '../services/format.service';

@Component({
  selector: 'todo-input',
  template: `
    <div>
      <form (ngSubmit)="onSubmit()" class="flex">
        <input type="text" [(ngModel)]="todoModel.title" required class="ba pa2" name="title" />
        &nbsp;&nbsp;
        <button class="bn br4 pt2 pb2 pl4 pr4 white bg-dark-blue">Add Todo</button>
      </form>
    </div>
  `
})
export class TodoInputComponent {
  todoModel: TodoModel = new TodoModel();

  constructor(public todoService: TodoService, public formatService: FormatService) {}

  onSubmit() {
    this.todoService.addTodo(this.todoModel);
    this.todoModel = new TodoModel();
  }

  onClick(logMessage) {
    const tm = new TodoModel();
    tm.title = logMessage.value;
    this.todoService.addTodo(tm);
    logMessage.value = '';
  }
}
