import { Component } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'form2',
  template: `
    <div>
      <form (submit)="onSubmit(myform)">
        <div class="flex pa2">
          <label class="w-third">Description</label>
          <input type="text" [(ngModel)]="myform.description" name="description" required class="ba pa2 w-50" />
        </div>
        <div class="flex pa2">
          <label class="w-third">Points</label>
          <input
            type="number"
            min="1"
            max="10"
            step="1"
            required
            name="points"
            [(ngModel)]="myform.points"
            class="ba pa2 w-50"
          />
        </div>
        <div class="flex pa2">
          <label class="w-third">Status</label>
          <select [(ngModel)]="myform.status" class="ba pa2 w-50" name="status">
            <option value="0">Pending</option>
            <option value="1">Started</option>
            <option value="2">Finished</option>
            <option value="3">Overdue</option>
          </select>
        </div>
        <div class="flex pa2">
          <label class="w-third">Priority</label>
          <select [(ngModel)]="myform.priority" class="ba pa2 w-50" name="priority">
            <option value="0">Low</option>
            <option value="1">Medium</option>
            <option value="2">High</option>
          </select>
        </div>
        <div class="flex pa2">
          <label class="w-third">Date</label>
          <input type="date" [(ngModel)]="myform.targetDate" class="ba pa2 w-50" name="targetDate" />
        </div>
        <div class="flex pa2">
          <label class="w-third"></label>
          <button type="submit" class="br4 pt2 pb2 pl4 pr4 bn white bg-dark-green">Submit</button>
        </div>
      </form>
    </div>
  `
})
export class Form2Component {
  public myform: any = {};

  onSubmit(myform: any) {
    console.log(myform);
  }
}
