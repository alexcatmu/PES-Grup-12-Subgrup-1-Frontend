import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event';
import { EventService } from '../services/event.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styles: ['span {  margin-right: 50px }']
})

export class EventDetailComponent implements OnInit {
  
  eventId: string;
  event: Event;

  constructor(private eventService: EventService, protected activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.eventId = params.id;
      console.log('estamos en el details con id: ' + this.eventId);
      this.eventService.get(Number(this.eventId)).subscribe((event) => {
        this.event = event[0];
      });
    });
  }
}
