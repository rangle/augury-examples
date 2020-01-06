import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { map, filter } from 'rxjs/operators';

const TITLES = {
  '': 'Home',
  home: 'Home',
  'control-form': 'Control Form',
  'my-form': 'Form Component',
  form2: 'NgModel Form',
  'input-output': 'Input Output',
  'todo-app': 'Todo App',
  'di-tree': 'DI Tree',
  'angular-directives': 'Angular Directives',
  'change-detection': 'Change Detection'
};
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title: string;
  constructor(private router: Router) {
    router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: NavigationEnd) => {
      const path = e.url.replace('/kitchen-sink', '').replace('/', '');
      this.title = TITLES[path];
    });
  }
}
