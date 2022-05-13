import { TestBed } from '@angular/core/testing';

import { GetProductService } from './get-product.service';

describe('GetProductService', () => {
  let service: GetProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
