import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-park-three',
  template: `
  <div>
    <img src="assets/bloordale-toronto-park.jpg" width="600" height="350" />
  </div>
  `,
  styles: []
})
export class ParkThreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
