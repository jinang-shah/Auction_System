import { TestBed } from '@angular/core/testing';

import { GetProductByIdService } from './get-product-by-id.service';

describe('GetProductByIdService', () => {
  let service: GetProductByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProductByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
