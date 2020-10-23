import { Component, OnInit } from '@angular/core';
import {EventService} from '../services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(protected eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getAll().subscribe((events) => {
      console.log(events);
    });
  }

}
