import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainDetailsComponent } from './complain-details.component';

describe('ComplainDetailsComponent', () => {
  let component: ComplainDetailsComponent;
  let fixture: ComponentFixture<ComplainDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplainDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
