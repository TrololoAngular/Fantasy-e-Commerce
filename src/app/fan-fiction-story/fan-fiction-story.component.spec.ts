/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FanFictionStoryComponent } from './fan-fiction-story.component';

describe('FanFictionStoryComponent', () => {
  let component: FanFictionStoryComponent;
  let fixture: ComponentFixture<FanFictionStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanFictionStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanFictionStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
