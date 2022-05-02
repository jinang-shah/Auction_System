import { TestBed } from '@angular/core/testing';

import { ComplainlistService } from './complainlist.service';

describe('ComplainlistService', () => {
  let service: ComplainlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplainlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
