import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event';
import { EventService } from '../services/event.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css', '../app.detail.component.css']
})

export class EventDetailComponent implements OnInit {

  eventId: string;
  event: Event;

  constructor(private eventService: EventService, protected activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.eventId = params.id;
      this.eventService.get(this.eventId).subscribe((event) => {
        this.event = event[0];
      });
    });
  }
}
