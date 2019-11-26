import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-park-one',
  template: `
  <div>
    <img src="assets/peyto-lake-banff.jpg" width="600" height="350" />
  </div>
  `,
  styles: []
})
export class ParkOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
