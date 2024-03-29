import {
  Component,
  Input,
} from '@angular/core';

import {
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'stress-rec-item',
  template: `
    <ul *ngFor="let each of tree">
        <li *ngIf="each.length > 0">
            <stress-rec-item [tree]="each"></stress-rec-item>
        </li>
    </ul>
  `
})
export class StressRecItem {
  @Input() tree: Array<any> = [];
}

@Component({
  selector: 'stress-tester',
  template: `
  <div>
    <p>Deep Tree Test</p>
    <form (submit)="onSubmit()" novalidate>
      <div>
        <label>Branching factor of tree:
          <input type="number" id="branching-factor" [formControl]="branchingFactor">
        </label>
        <label>Branching depth of tree:
          <input type="number" [formControl]="depth">
        </label>
      </div>
      <button type="submit">Run</button>
    </form>
    <br>
    <div *ngIf="tree">
      <stress-rec-item [tree]="tree"></stress-rec-item>
    </div>
  </div>
  `
})
export class StressTesterComponent {
  branchingFactor: FormControl = new FormControl();
  depth: FormControl = new FormControl();
  tree: Array<any> = [];

  onSubmit() {
    const branchingFactor = this.branchingFactor.value;
    const depth = this.depth.value;

    let accum = [];
    let i = depth;
    while (i--) {
      const innerAccum: any[] = [];

      let j = branchingFactor;
      while (j--) {
        innerAccum.push([...accum]);
      }
      accum = innerAccum;
    }
    this.tree = accum;
  }
}
