import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventStatsComponent } from './event-stats.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {MaterialModule} from '../../material/material.module';
import {TranslateModule} from '@ngx-translate/core';

describe('EventStatsComponent', () => {
  let component: EventStatsComponent;
  let fixture: ComponentFixture<EventStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventStatsComponent ],
      imports: [ReactiveFormsModule, HttpClientModule, RouterTestingModule, MaterialModule, TranslateModule.forRoot()]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
