/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewsfetchService } from './newsfetch.service';

describe('Service: Newsfetch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsfetchService]
    });
  });

  it('should ...', inject([NewsfetchService], (service: NewsfetchService) => {
    expect(service).toBeTruthy();
  }));
});
