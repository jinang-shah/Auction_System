import { TestBed } from '@angular/core/testing';

import { ComplainDetailsService } from './complain-details.service';

describe('ComplainDetailsService', () => {
  let service: ComplainDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplainDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
