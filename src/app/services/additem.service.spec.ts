import { TestBed } from '@angular/core/testing';

import { AdditemService } from './additem.service';

describe('AdditemService', () => {
  let service: AdditemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdditemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
