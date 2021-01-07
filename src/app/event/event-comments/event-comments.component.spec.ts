import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCommentsComponent } from './event-comments.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {MaterialModule} from '../../material/material.module';
import {TranslateModule} from '@ngx-translate/core';
import {EventService} from '../../services/event.service';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {RatingsService} from '../../services/ratings.service';

describe('EventCommentsComponent', () => {
  let component: EventCommentsComponent;
  let fixture: ComponentFixture<EventCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventCommentsComponent ],
      imports: [ReactiveFormsModule, HttpClientModule, RouterTestingModule, MaterialModule, TranslateModule.forRoot()],
      providers: [RatingsService, {
        provide: ActivatedRoute,
        useValue: { // Mock
          params: of(
            {
              id: 'nombre_sala'
            }
          )
        }
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
