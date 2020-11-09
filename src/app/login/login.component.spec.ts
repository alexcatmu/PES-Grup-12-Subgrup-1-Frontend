import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {MaterialModule} from '../material/material.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TranslateModule} from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';
import {DatePipe} from '@angular/common';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const fakeActivatedRoute = {
    snapshot: {data: {}}
  } as ActivatedRoute;
  const fakeDatePipe = new DatePipe('en-US');
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule, HttpClientModule, RouterTestingModule, MaterialModule, NoopAnimationsModule,
        TranslateModule.forRoot()],
      providers: [{provide: ActivatedRoute, useValue: fakeActivatedRoute}, {provide: DatePipe, useValue: fakeDatePipe}],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
