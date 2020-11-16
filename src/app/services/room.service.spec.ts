import { TestBed } from '@angular/core/testing';

import { RoomService } from './room.service';
import {RoomDetailComponent} from '../room/room-detail/room-detail.component';
import {CommonModule} from '@angular/common';
import {RoomRoutingModule} from '../room/room-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {TranslateModule} from '@ngx-translate/core';

describe('RoomService', () => {
  let service: RoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, RoomRoutingModule, HttpClientModule, RouterTestingModule, TranslateModule.forRoot()]
    });
    service = TestBed.inject(RoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
