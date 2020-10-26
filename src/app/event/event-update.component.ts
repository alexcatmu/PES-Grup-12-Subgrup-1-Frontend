import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
})

export class EventUpdateComponent implements OnInit {
  eventId: number;

  constructor(protected activatedRoute: ActivatedRoute, private eventService: EventService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.eventId = params.id;
      if (this.eventId) {
        console.log('estamos en el update');
      } else {
        console.log('estamos en el new');
      }
    });
  }
}
