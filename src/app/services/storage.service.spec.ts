import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';
import {ActivatedRoute} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {DatePipe} from '@angular/common';

describe('StorageService', () => {
  let service: StorageService;
  const fakeActivatedRoute = {
    snapshot: { data: { } }
  } as ActivatedRoute;
  const fakeDatePipe = new DatePipe('en-US');
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [ {provide: ActivatedRoute, useValue: fakeActivatedRoute}, {provide: DatePipe, useValue: fakeDatePipe} ],
    });
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
