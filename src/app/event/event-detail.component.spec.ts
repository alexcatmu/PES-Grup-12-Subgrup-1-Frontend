import {ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {EventRoutingModule} from './event-routing.module';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {TranslateModule} from '@ngx-translate/core';
import {EventDetailComponent} from './event-detail.component';
import {EventService} from '../services/event.service';
import {of} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

describe('EventDetailComponent', () => {

  let eventService: EventService;
  let component: EventDetailComponent;
  let fixture: ComponentFixture<EventDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventDetailComponent],
      imports: [CommonModule, EventRoutingModule, HttpClientModule, RouterTestingModule, TranslateModule.forRoot()],
      providers: [EventService, {
        provide: ActivatedRoute,
        useValue: { // Mock
          params: of(
            {
              id: 'Presentacio PES_2021-01-17_12:02'
            }
          )
        }
      }]
    })
      .compileComponents();
  });

  beforeEach(inject([EventService], s => {
    eventService = s;
    fixture = TestBed.createComponent(EventDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should call get and return an event', (() => {
    const response: Event = null;

    // @ts-ignore
    spyOn(eventService, 'get').withArgs('Presentacio PES_2021-01-17_12:02').and.returnValue(of(response));

    component.ngOnInit();

    fixture.detectChanges();

    // @ts-ignore
    expect(component.event).toEqual(response);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
