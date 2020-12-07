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
  event: Event;
  capacity: number;
  seats: boolean[][];

  constructor(private eventService: EventService, private roomService: RoomService,
              protected activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.seats = [[true, false, false, true, false, false, true, true, false], [false, true, false, true, true, true, false, true, false],
      [true, false, true, false, true, true, false, true, true], [true, false, false, true, true, false, true, true, false],
      [true, false, false, true, false, true, false, false, true], [false, true, false, true, true, false, true, true, false],
      [true, false, false, true, false, true, false, false, true], [false, true, false, true, true, false, true, true, false]];
    this.activatedRoute.params.subscribe((params) => {
      this.eventId = params.id;
      this.eventService.get(this.eventId).subscribe((event) => {
        this.event = event[0];
        this.roomService.get(this.event.id_room).subscribe((room) => {
          this.capacity = room[0].capacity;
        });
      });
    });
  }

}
