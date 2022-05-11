import { TestBed } from '@angular/core/testing';

import { AdminManageUsersService } from './admin-manage-users.service';

describe('AdminManageUsersService', () => {
  let service: AdminManageUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminManageUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
