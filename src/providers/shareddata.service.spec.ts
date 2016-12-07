/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShareddataService } from './shareddata.service';

describe('Service: Shareddata', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShareddataService]
    });
  });

  it('should ...', inject([ShareddataService], (service: ShareddataService) => {
    expect(service).toBeTruthy();
  }));
});
