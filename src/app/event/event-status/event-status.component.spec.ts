import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventStatusComponent } from './event-status.component';
import { HttpClientModule } from '@angular/common/http';
import { EventService } from '../../services/event.service';
import { RouterTestingModule } from '@angular/router/testing';
import {MaterialModule} from '../../material/material.module';
import {TranslateModule} from '@ngx-translate/core';
import {ReactiveFormsModule} from '@angular/forms';

describe('EventStatusComponent', () => {
  let component: EventStatusComponent;
  let fixture: ComponentFixture<EventStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventStatusComponent ],
      imports: [ReactiveFormsModule, HttpClientModule, RouterTestingModule, MaterialModule, TranslateModule.forRoot()],
      providers: [EventService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
