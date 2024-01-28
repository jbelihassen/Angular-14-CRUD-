/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EmpCardComponent } from './emp-card.component';

describe('EmpCardComponent', () => {
  let component: EmpCardComponent;
  let fixture: ComponentFixture<EmpCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
