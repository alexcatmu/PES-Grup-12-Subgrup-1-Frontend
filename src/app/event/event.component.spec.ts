import {ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {EventUpdateComponent} from './event-update.component';
import {EventRoutingModule} from './event-routing.module';
import {EventComponent} from './event.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {TranslateModule} from '@ngx-translate/core';
import {of} from 'rxjs';
import {EventService} from '../services/event.service';

describe('EventComponent', () => {

  let eventService;
  let component: EventComponent;
  let fixture: ComponentFixture<EventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventComponent, EventUpdateComponent],
      imports: [CommonModule, EventRoutingModule, HttpClientModule, RouterTestingModule, TranslateModule.forRoot()],
      providers: [EventService]
    })
    .compileComponents();
  });


  beforeEach(inject([EventService], s => {
    eventService = s;
    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should call getAll and return list of events', (() => {
    const response: Event[] = [];

    spyOn(eventService, 'getAll').and.returnValue(of(response));

    component.fetchData();

    fixture.detectChanges();

    // @ts-ignore
    expect(component.events).toEqual(response);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
