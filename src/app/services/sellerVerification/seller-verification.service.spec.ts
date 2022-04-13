import { TestBed } from '@angular/core/testing';

import { SellerVerificationService } from './seller-verification.service';

describe('SellerVerificationService', () => {
  let service: SellerVerificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellerVerificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
