import {ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { RoomComponent } from './room.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {TranslateModule} from '@ngx-translate/core';
import {RoomRoutingModule} from './room-routing.module';
import {EventService} from '../services/event.service';
import {EventComponent} from '../event/event.component';
import {of} from 'rxjs';
import {RoomService} from '../services/room.service';
import {Room} from '../models/room';
import {MatDialogModule} from '@angular/material/dialog';

describe('RoomComponent', () => {

  let roomService: RoomService;
  let component: RoomComponent;
  let fixture: ComponentFixture<RoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomComponent ],
      imports: [CommonModule, RoomRoutingModule, MatDialogModule, HttpClientModule, RouterTestingModule, TranslateModule.forRoot()]
    })
    .compileComponents();
  });


  beforeEach(inject([RoomService], s => {
    roomService = s;
    fixture = TestBed.createComponent(RoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should call getAll and return list of rooms', (() => {
    const response: Room[] = [];

    spyOn(roomService, 'getAll').and.returnValue(of(response));

    component.fetchData();

    fixture.detectChanges();

    // @ts-ignore
    expect(component.rooms).toEqual(response);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
