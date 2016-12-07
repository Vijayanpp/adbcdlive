/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmallloaderComponent } from './smallloader.component';

describe('SmallloaderComponent', () => {
  let component: SmallloaderComponent;
  let fixture: ComponentFixture<SmallloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
