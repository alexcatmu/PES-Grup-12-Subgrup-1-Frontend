import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomUpdateComponent } from './room-update.component';
import {RoomDetailComponent} from '../room-detail/room-detail.component';
import {CommonModule} from '@angular/common';
import {RoomRoutingModule} from '../room-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {TranslateModule} from '@ngx-translate/core';
import {ReactiveFormsModule} from '@angular/forms';

describe('RoomUpdateComponent', () => {
  let component: RoomUpdateComponent;
  let fixture: ComponentFixture<RoomUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomUpdateComponent ],
      imports: [CommonModule, RoomRoutingModule, HttpClientModule, RouterTestingModule, TranslateModule.forRoot(), ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
