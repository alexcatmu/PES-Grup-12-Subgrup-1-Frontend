import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Room} from '../../models/room';
import {RoomService} from '../../services/room.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {
  roomId: string;
  room: Room;

  constructor(private roomService: RoomService, protected activatedRoute: ActivatedRoute,
              private _location: Location) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.roomId = params.id;
      this.roomService.get(this.roomId).subscribe((room) => {
        this.room = room[0];
      });
    });
  }

  goBack(): void {
    this._location.back();
  }

}
