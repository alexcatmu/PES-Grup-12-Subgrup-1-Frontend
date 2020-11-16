import { TestBed } from '@angular/core/testing';

import { MeasuresService } from './measures.service';
import {CommonModule} from '@angular/common';
import {RoomRoutingModule} from '../room/room-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {TranslateModule} from '@ngx-translate/core';

describe('MeasuresService', () => {
  let service: MeasuresService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, HttpClientModule, TranslateModule.forRoot()]

    });
    service = TestBed.inject(MeasuresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
