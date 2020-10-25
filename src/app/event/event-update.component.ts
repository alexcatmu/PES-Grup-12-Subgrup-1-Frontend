import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../models/event';
import {EventService} from '../services/event.service';

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

  public create(): void {
    const event: Event = {
      _id: 333,
      name: 'Formula 1',
      street: 'barna',
      date: '2020_10_24',
      hourEnd: '10:00',
      hourIni: '09:00',
      price_range: '30-100',
    };
    this.eventService.create(event).subscribe((response) => {
      console.log(event);
    }, error => {
      console.error('Ha habido un error al hacer create de evento', error);
    });
  }

  public delete(id:number): void {
    this.eventService.delete(id).subscribe((response) => {
      console.log("Evento con id: " + id + "borrado");
    }, error => {
      console.error("Ha habido un error al hacer delete del evento", error);
    })
  }
}
