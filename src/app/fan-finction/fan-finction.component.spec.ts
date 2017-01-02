/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FanFinctionComponent } from './fan-finction.component';

describe('FanFinctionComponent', () => {
  let component: FanFinctionComponent;
  let fixture: ComponentFixture<FanFinctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanFinctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanFinctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
