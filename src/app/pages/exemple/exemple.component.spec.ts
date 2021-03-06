/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExempleComponent } from './exemple.component';

describe('ExempleComponent', () => {
  let component: ExempleComponent;
  let fixture: ComponentFixture<ExempleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExempleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
