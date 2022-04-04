import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotiitemComponent } from './notiitem.component';

describe('NotiitemComponent', () => {
  let component: NotiitemComponent;
  let fixture: ComponentFixture<NotiitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotiitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotiitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
