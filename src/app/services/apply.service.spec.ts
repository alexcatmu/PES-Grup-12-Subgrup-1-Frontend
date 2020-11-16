import { TestBed } from '@angular/core/testing';

import { ApplyService } from './apply.service';
import {CommonModule} from '@angular/common';
import {RoomRoutingModule} from '../room/room-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {TranslateModule} from '@ngx-translate/core';

describe('ApplyService', () => {
  let service: ApplyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, HttpClientModule, TranslateModule.forRoot()]
    });
    service = TestBed.inject(ApplyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
