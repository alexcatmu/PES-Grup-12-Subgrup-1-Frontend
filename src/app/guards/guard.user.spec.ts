import { TestBed } from '@angular/core/testing';

import { GuardUser } from './guard.user';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {ActivatedRoute} from '@angular/router';
import {DatePipe} from '@angular/common';

describe('GuardService', () => {
  let service: GuardUser;
  const fakeActivatedRoute = {
    snapshot: { data: { } }
  } as ActivatedRoute;
  const fakeDatePipe = new DatePipe('en-US');
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [ {provide: ActivatedRoute, useValue: fakeActivatedRoute}, {provide: DatePipe, useValue: fakeDatePipe} ],
    });
    service = TestBed.inject(GuardUser);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
