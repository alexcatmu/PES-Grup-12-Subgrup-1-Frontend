import {ReactiveFormsModule, ValidationErrors} from '@angular/forms';
import {ComponentFixture, inject, TestBed} from '@angular/core/testing';
import { EventUpdateComponent } from './event-update.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../services/event.service';
import { DatePipe } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import {MaterialModule} from '../material/material.module';
import {TranslateModule} from '@ngx-translate/core';
import {of} from 'rxjs';
import {RoomService} from '../services/room.service';
import {Room} from '../models/room';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('Update: Working', () => {
    let eventUpdate: EventUpdateComponent;
    let roomService: RoomService;
    let fixture: ComponentFixture<EventUpdateComponent>;

    const fakeActivatedRoute = {
        snapshot: { data: { } }
      } as ActivatedRoute;
    const fakeDatePipe = new DatePipe('en-US');

    let errors: ValidationErrors = {
      required: undefined,
      maxlength: undefined
    };

    beforeEach(() => {

        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, HttpClientModule, RouterTestingModule, MaterialModule, TranslateModule.forRoot(),
              BrowserAnimationsModule],
            declarations: [EventUpdateComponent],
            providers: [ {provide: DatePipe, useValue: fakeDatePipe},
                         EventService, RoomService, {
                provide: ActivatedRoute,
                useValue: { // Mock
                  params: of(
                    {
                      id: 'Presentacio PES_2021-01-17_12:02'
                    }
                  )
                }
              } ],
        }).compileComponents();
    });

    beforeEach(inject([RoomService], s => {
      roomService = s;
      fixture = TestBed.createComponent(EventUpdateComponent);
      eventUpdate = fixture.componentInstance;
      fixture.detectChanges();
    }));

    afterEach(() => {
        eventUpdate = null;
    });

    it('should create', () => {
      expect(eventUpdate).toBeTruthy();
    });

    it('should call getAll and return list of rooms', (() => {
      const response: Room[] = [];

      spyOn(roomService, 'getAll').and.returnValue(of(response));

      eventUpdate.ngOnInit();

      fixture.detectChanges();

      // @ts-ignore
      expect(eventUpdate.rooms).toEqual(response);
    }));

    it('form invalid when empty', () => {
        expect(eventUpdate.formEvent.valid).toBeFalsy();
    });

    it('name field validity', () => {
        const name = eventUpdate.formEvent.controls.name;
        expect(name.valid).toBeFalsy();

        // Name field is required
        errors = name.errors || {};
        expect(errors.required).toBeTruthy();

        // Set name to sth
        name.setValue('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        errors = name.errors || {};
        expect(errors.required).toBeFalsy();
        expect(errors.maxlength).toBeTruthy();

        // Set name to sth correct
        name.setValue('FCB vs RMD');
        errors = name.errors || {};
        expect(errors.required).toBeFalsy();
        expect(errors.maxlength).toBeFalsy();

    });

    it('hourIni field validity', () => {
        const hourIni = eventUpdate.formEvent.controls.hourIni;
        expect(hourIni.valid).toBeFalsy();

        // hourIni field is required
        errors = hourIni.errors || {};
        expect(errors.required).toBeTruthy();

        // Set hourIni to sth
        hourIni.setValue('23:00');
        errors = hourIni.errors || {};
        expect(errors.required).toBeFalsy();
    });

    it('hourEnd field validity', () => {
        const hourEnd = eventUpdate.formEvent.controls.hourEnd;
        expect(hourEnd.valid).toBeFalsy();

        // hourEnd field is required
        errors = hourEnd.errors || {};
        expect(errors.required).toBeTruthy();

        // Set hourEnd to sth
        hourEnd.setValue('23:00');
        errors = hourEnd.errors || {};
        expect(errors.required).toBeFalsy();
    });

    it('minPrice and maxPrice field validity', () => {
        const minPrice = eventUpdate.formEvent.controls.minPrice;
        const maxPrice = eventUpdate.formEvent.controls.minPrice;

        // MinPrice field is required
        errors = minPrice.errors || {};
        expect(errors.required).toBeTruthy();

        // MaxPrice field is required
        errors = maxPrice.errors || {};
        expect(errors.required).toBeTruthy();

        minPrice.setValue(300);
        maxPrice.setValue(200);
        expect(minPrice < maxPrice).toBeFalsy();
    });


});
