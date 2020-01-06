import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'todo-list',
  template: `
    <table class="w-100">
      <tr>
        <th class="ba b--black-40 pa2">Title</th>
        <th class="ba b--black-40 pa2">Status</th>
        <th class="ba b--black-40 pa2">Actions</th>
      </tr>
      <tr *ngFor="let todo of todoService.todos">
        <td class="ba b--black-40 pa2">{{ todo.title }}</td>
        <td class="ba b--black-40 pa2">
          <p class="white bg-dark-red pa2 br2" *ngIf="todo.status == 'started'">Started</p>
          <p class="white bg-dark-green pa2 br2" *ngIf="todo.status == 'completed'">Completed</p>
        </td>
        <td class="ba b--black-40 pa2">
          <button class="bn br4 pt2 pb2 pl4 pr4 white bg-dark-blue" (click)="todo.toggle()">Toggle</button>
        </td>
      </tr>
    </table>
  `
})
export class TodoListComponent {
  constructor(public todoService: TodoService) {}
}
