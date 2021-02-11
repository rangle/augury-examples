import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  links = [{
    title: 'Input Output',
    href:'/input-output'
  }, {
    title: 'Dependency Injection',
    href:'/dependency-injection'
  }, {
    title: 'Forms',
    href:'/forms'
  }, {
    title: 'Modules',
    href:'/modules'
  }, {
    title: 'Routes',
    href:'/routes'
  }, {
    title: 'Kitchen Sink',
    href:'/kitchen-sink'
  }]
}
