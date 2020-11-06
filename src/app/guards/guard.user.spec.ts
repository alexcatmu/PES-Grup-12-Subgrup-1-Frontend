import { TestBed } from '@angular/core/testing';

import { GuardUser } from './guard.user';

describe('GuardService', () => {
  let service: GuardUser;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardUser);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
