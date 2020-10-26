import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCreationComponent } from './event-creation.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EventCreationComponent', () => {
  let component: EventCreationComponent;
  let fixture: ComponentFixture<EventCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ EventCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
