import {Component, OnInit} from '@angular/core';
import {Event} from '../models/event';
import {EventService} from '../services/event.service';
import {ActivatedRoute} from '@angular/router';
import {RoomService} from '../services/room.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})

export class EventDetailComponent implements OnInit {

  eventId: string;
  event: Event;
  capacity: number;
  occupation: number;

  constructor(private eventService: EventService, private roomService: RoomService,
              protected activatedRoute: ActivatedRoute, private _location: Location) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.eventId = params.id;
      this.eventService.get(this.eventId).subscribe((event) => {
        this.event = event;
        this.capacity = this.event.matrix.length * this.event.matrix[0].length;
        /*this.roomService.get(this.event.id_room).subscribe((room) => {
          this.capacity = room[0].capacity;
        });*/
      });
    });
    this.occupation = 0;
    for ( const entry in this.event.matrix){
      if ( entry !== 'F' && entry !== 'T') { this.occupation++; }
    }
  }

  goBack(): void {
    this._location.back();
  }
}
