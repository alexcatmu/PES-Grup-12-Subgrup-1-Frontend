import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomStatusComponent } from './room-status.component';
import {CommonModule} from '@angular/common';
import {RoomRoutingModule} from '../room-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {TranslateModule} from '@ngx-translate/core';

describe('RoomStatusComponent', () => {
  let component: RoomStatusComponent;
  let fixture: ComponentFixture<RoomStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomStatusComponent ],
      imports: [CommonModule, RoomRoutingModule, HttpClientModule, RouterTestingModule, TranslateModule.forRoot()]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
