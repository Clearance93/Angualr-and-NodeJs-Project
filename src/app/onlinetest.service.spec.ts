import { TestBed } from '@angular/core/testing';

import { OnlinetestService } from './onlinetest.service';

describe('OnlinetestService', () => {
  let service: OnlinetestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlinetestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
