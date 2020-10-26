import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../services/event.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Event } from '../models/event';


@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
})

export class EventUpdateComponent implements OnInit {

  eventId: string
  event: Event;
  
  formEvent = new FormGroup({
    name: new FormControl(''),
    street: new FormControl(''),
    date: new FormControl(''),
    hourIni: new FormControl(''),
    hourEnd: new FormControl(''),
    price_range: new FormControl(''),
    measures: new FormControl(''),
    ratings: new FormControl(''),
    link: new FormControl('')
  });
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

  public onSubmit(event): void {
    this.event = {
      _id: Math.floor((Math.random() * 100) + 1),
      name: event.name, 
      street: event.street, 
      date: event.date,
      hourEnd: event.hourIni, 
      hourIni: event.hourEnd, 
      price_range: event.price_range,
      measures: event.measures,
      ratings: event.ratings,
      link: event.link
    };

    this.eventService.create(this.event).subscribe((response) => {
      console.log(this.event);
    }, error => {
      console.error('Ha habido un error al hacer create de evento', error);
    });
  }
}
