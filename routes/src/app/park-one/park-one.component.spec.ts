/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ParkOneComponent } from './park-one.component';

describe('ParkOneComponent', () => {
  let component: ParkOneComponent;
  let fixture: ComponentFixture<ParkOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
