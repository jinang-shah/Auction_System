import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerVerificationComponent } from './seller-verification.component';

describe('SellerVerificationComponent', () => {
  let component: SellerVerificationComponent;
  let fixture: ComponentFixture<SellerVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerVerificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
