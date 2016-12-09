/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YathraComponent } from './yathra.component';

describe('YathraComponent', () => {
  let component: YathraComponent;
  let fixture: ComponentFixture<YathraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YathraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YathraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
