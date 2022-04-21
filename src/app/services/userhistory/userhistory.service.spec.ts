import { TestBed } from '@angular/core/testing';

import { UserhistoryService } from './userhistory.service';

describe('UserhistoryService', () => {
  let service: UserhistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserhistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
