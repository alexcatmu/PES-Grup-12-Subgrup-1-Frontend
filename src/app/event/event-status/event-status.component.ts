import {Component, OnInit} from '@angular/core';
import {EventService} from '../../services/event.service';
import {RoomService} from '../../services/room.service';
import {ActivatedRoute} from '@angular/router';
import {Event} from '../../models/event';

@Component({
  selector: 'app-event-status',
  templateUrl: './event-status.component.html',
  styleUrls: ['./event-status.component.css']
})
export class EventStatusComponent implements OnInit {

  eventId: string;
  event: Event = new Event();
  capacity: number;
  seats: string[][];
  auxRoomName: string;

  constructor(private eventService: EventService, private roomService: RoomService,
              protected activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.eventId = params.id;
      this.eventService.get(this.eventId).subscribe((event) => {
        this.event = event;
        this.auxRoomName = this.event.id_room.split('_')[0];
        this.seats = this.event.matrix;
        this.roomService.get(this.event.id_room).subscribe((room) => {
          this.capacity = room[0].capacity;
        });
      });
    });
  }

}
