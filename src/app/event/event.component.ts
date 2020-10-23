import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from '../models/event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  public events: Event[];
  constructor(protected eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getAll().subscribe((events) => {
      console.log(events);
      this.events = events;
    }, error => {
      console.error('Ha habido un error al hacer get de eventos');
    });
  }

}
