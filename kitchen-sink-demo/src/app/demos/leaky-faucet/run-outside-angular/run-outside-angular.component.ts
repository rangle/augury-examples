import { Component, NgZone } from '@angular/core';
import {  } from '@angular/forms';

@Component({
  selector: 'app-run-outside-angular',
  templateUrl: './run-outside-angular.component.html',
  styleUrls: ['./run-outside-angular.component.css']
})
export class RunOutsideAngularComponent {

  numberChildren = 0;
  status = 'change me';

  constructor(private _ngZone: NgZone) {}

  onSubmit() {
    this.status = 'starting runOutsideAngular(fn)';
    this._ngZone.runOutsideAngular(() => {
      const el = document.getElementById('populateChildren');
      clearEl(el);
      addChildrenTo(el, this.numberChildren);
    });
  }

  clearChildren() {
    const el = document.getElementById('populateChildren');
    clearEl(el);
    this.status = 'cleared';
  }
}

// utility vanilla JS functions
function addChildrenTo(el: Element, count: number) {
  for (let i = 0; i < count; i++) {
    const text = makeString(Math.ceil(Math.random() * 10));
    const timeout = Math.ceil(Math.random() * 1000);
    setTimeout(() => {
      addInputTo(el, 'child' + i, text);
      update_status('child' + i + ' =  ' + text);
    }, timeout);
  }
}

function clearEl(el: Element) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

function addInputTo(el: Element, name: string, value: string) {
  const box = document.createElement('input');
  const attrName = document.createAttribute('name');
  attrName.value = name;
  const attrValue = document.createAttribute('value');
  attrValue.value = value;
  box.setAttributeNode(attrName);
  box.setAttributeNode(attrValue);
  el.appendChild(box);
}

function update_status(text: string) {
  const el_status = document.getElementById('status');
  el_status.value = text;
}

function makeString(numCharacters: number) {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < numCharacters; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
