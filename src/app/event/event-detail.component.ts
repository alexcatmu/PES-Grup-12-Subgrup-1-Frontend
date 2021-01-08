import {Component, OnInit} from '@angular/core';
import {Event} from '../models/event';
import {EventService} from '../services/event.service';
import {ActivatedRoute, Router} from '@angular/router';
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
  starsFilled: number;
  starsHalf: number = 0;
  starsEmpty: number;

  constructor(private eventService: EventService, private roomService: RoomService,
              protected activatedRoute: ActivatedRoute, private _location: Location,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.eventId = params.id;
      this.eventService.get(this.eventId).subscribe((event) => {
        this.event = event;
        this.capacity = this.event?.matrix?.length * this.event?.matrix[0]?.length;
        this.occupation = this.capacity - (this.event?.seats?.split('T').length - 1) - (this.event?.seats?.split('F').length - 1);
        this.starsFilled = Math.floor(this.event?.ratings);
        if ((this.event?.ratings - this.starsFilled) >= 0.5) {
          this.starsHalf = 1;
        }
        this.starsEmpty = 5 - this.starsFilled - this.starsHalf;
      });
    });
  }

  goBack(): void {
    this._location.back();
  }

  public redirectToRoomSelf = (id: any) => {
    this.router.navigate([`/room/${id}/details`]).then(() => console.log('redirect to event status'));
  }

  public redirectToStatus = (id: any) => {
    this.router.navigate([`/event/${id}/status`]).then(() => console.log('redirect to event status'));
  }

  public redirectToEventRatings = (id: string) => {
    this.router.navigate([`/event/${id}/comments`]).then(() => console.log('redirect to event status'));
  }
}
