import { ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventUpdateComponent } from './event-update.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../services/event.service';
import { DatePipe } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

describe('Update: Working', () => {
    let eventUpdate: EventUpdateComponent;
    let fixture: ComponentFixture<EventUpdateComponent>;
    const fakeActivatedRoute = {
        snapshot: { data: { } }
      } as ActivatedRoute;
    const fakeDatePipe = new DatePipe('en-US');

    
    beforeEach(() => {

        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, HttpClientModule, RouterTestingModule],
            declarations: [EventUpdateComponent],
            providers: [ {provide: ActivatedRoute, useValue: fakeActivatedRoute}, {provide: DatePipe, useValue: fakeDatePipe},
                         EventService ],
        }).compileComponents();

        // create component and test fixture
        fixture = TestBed.createComponent(EventUpdateComponent);
        
        //get test component from the fixture
        eventUpdate = fixture.componentInstance;
    });

    afterEach(() => {
        eventUpdate = null;
    });

    it('form invalid when empty', () => {
        expect(eventUpdate.formEvent.valid).toBeFalsy();
    })

    it('name field validity', () => {
        let errors = {};
        let name = eventUpdate.formEvent.controls['name'];
        expect(name.valid).toBeFalsy();

        // Name field is required
        errors = name.errors || {};
        expect(errors['required']).toBeTruthy();

        // Set name to sth
        name.setValue("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        errors = name.errors || {};
        expect(errors['required']).toBeFalsy();

        // Set name to sth correct
        name.setValue("FCB vs RMD");
        errors = name.errors || {}
        expect(errors['required']).toBeFalsy();
        expect(errors['maxLength']).toBeFalsy();

    });

    it('street field validity', () => {
        let errors = {};
        let street = eventUpdate.formEvent.controls['street'];
        expect(street.valid).toBeFalsy();

        // Street field is required
        errors = street.errors || {};
        expect(errors['required']).toBeTruthy();

        // Set street to sth
        street.setValue("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        errors = street.errors || {};
        expect(errors['required']).toBeFalsy();

        // Set street to sth correct
        street.setValue("Camp Nou, Barcelona");
        errors = street.errors || {}
        expect(errors['required']).toBeFalsy();
        expect(errors['maxLength']).toBeFalsy();   
    });

    it('hourIni field validity', () => {
        let errors = {};
        let hourIni = eventUpdate.formEvent.controls['hourIni'];
        expect(hourIni.valid).toBeFalsy();

        // hourIni field is required
        errors = hourIni.errors || {};
        expect(errors['required']).toBeTruthy();

        // Set hourIni to sth
        hourIni.setValue("23:00");
        errors = hourIni.errors || {};
        expect(errors['required']).toBeFalsy();  
    });

    it('hourEnd field validity', () => {
        let errors = {};
        let hourEnd = eventUpdate.formEvent.controls['hourIni'];
        expect(hourEnd.valid).toBeFalsy();

        // hourEnd field is required
        errors = hourEnd.errors || {};
        expect(errors['required']).toBeTruthy();

        // Set hourEnd to sth
        hourEnd.setValue("23:00");
        errors = hourEnd.errors || {};
        expect(errors['required']).toBeFalsy();  
    });

    it('minPrice and maxPrice field validity', () => {
        let errors = {}
        let minPrice = eventUpdate.formEvent.controls['minPrice'];
        let maxPrice = eventUpdate.formEvent.controls['minPrice'];

        // MinPrice field is required
        errors = minPrice.errors || {};
        expect(errors['required']).toBeTruthy();

        // MaxPrice field is required
        errors = maxPrice.errors || {};
        expect(errors['required']).toBeTruthy();

        minPrice.setValue(300);
        maxPrice.setValue(200);
        expect(minPrice < maxPrice).toBeFalsy();
    });


})