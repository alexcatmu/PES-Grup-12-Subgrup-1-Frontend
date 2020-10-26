import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../models/event';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
})

export class EventDetailComponent implements OnInit {
  
  @Input() event: Event

  constructor() { }

  ngOnInit(): void {
  }

}
