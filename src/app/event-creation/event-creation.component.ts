import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event-creation',
  templateUrl: './event-creation.component.html',
  styleUrls: ['./event-creation.component.css']
})
export class EventCreationComponent implements OnInit {

  event: Event

  constructor(private eventService: EventService) {
  }

  ngOnInit(): void {

  }

  public create(name, street, date, hourIni, hourEnd): void {
    this.event = {
      _id: Math.floor((Math.random() * 100) + 1),
      name: name, 
      street: street, 
      date: date,
      hourEnd: hourIni, 
      hourIni: hourEnd, 
      price_range: '200'
    };

    this.eventService.create(this.event).subscribe((response) => {
      console.log(this.event);
    }, error => {
      console.error('Ha habido un error al hacer create de evento', error);
    });
  }

}
