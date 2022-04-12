import { TestBed } from '@angular/core/testing';

import { ItemcomplainService } from './itemcomplain.service';

describe('ItemcomplainService', () => {
  let service: ItemcomplainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemcomplainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
