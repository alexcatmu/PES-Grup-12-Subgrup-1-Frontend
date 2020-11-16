import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {StorageService} from '../../services/storage.service';
import {RoomService} from '../../services/room.service';
import {Room} from '../../models/room';

@Component({
  selector: 'app-room-update',
  templateUrl: './room-update.component.html',
  styleUrls: ['./room-update.component.css']
})
export class RoomUpdateComponent implements OnInit {

  formRoom: FormGroup;
  room: Room;
  roomId: string;
  titleForm = 'Room.Create';

  constructor(protected activatedRoute: ActivatedRoute,
              private roomService: RoomService,
              private route: Router,
              private fb: FormBuilder,
              private storageService: StorageService) {

    this.formRoom = this.fb.group({
      name: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(60)])),
      street: new FormControl('', [Validators.required]),
      capacity: new FormControl('', [Validators.required]),
      rows: new FormControl('', [Validators.required]),
      columns: new FormControl(null, [Validators.required]),
      distance_between_seats: new FormControl(null, [Validators.required]),
      seats_size: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.roomId = params.id;
      if (this.roomId) {
        this.roomService.get(this.roomId).subscribe((room) => {
          room = room[0];
          this.updateForm(room);
          this.titleForm = 'Room.Update';
        });
      }
    });
  }

  onSubmit(room: Room): void {
    this.room = {
      _id: this.roomId ? this.roomId : room.name + '_' + this.storageService.getCurrentUser().id,
      id_manager: this.storageService.getCurrentUser().id,
      name: room.name,
      street: room.street,
      capacity: room.capacity,
      rows: room.rows,
      columns: room.columns,
      distance_between_seats: room.distance_between_seats,
      seats_size: room.seats_size,
    };

    this.roomService.create(this.room).subscribe(() => {
      this.route.navigate(['/room']).then(() => console.log('Go to room'));
    }, error => {
      console.error('Ha habido un error al hacer create de room', error);
    });

  }

  public hasError = (controlName: string, errorName: string) => {
    return this.formRoom.controls[controlName].hasError(errorName);
  }

  private updateForm(room: Room): void {
    this.formRoom.patchValue(room);
  }
}
