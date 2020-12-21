import { Component, OnInit } from '@angular/core';
import {Event} from '../../models/event';
import {ChartDataSets} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {EventService} from '../../services/event.service';
import {RoomService} from '../../services/room.service';
import {ActivatedRoute} from '@angular/router';
import {Room} from '../../models/room';

@Component({
  selector: 'app-room-stats',
  templateUrl: './room-stats.component.html',
  styleUrls: ['./room-stats.component.css']
})
export class RoomStatsComponent implements OnInit {
  roomId: string;
  room: Room;
  public chartType: string = 'line';

  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset' }
  ];

  public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };

  constructor(private eventService: EventService, private roomService: RoomService,
              protected activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.roomId = params.id;
      this.roomService.get(this.roomId).subscribe((room) => {
        this.room = room[0];
      });
    });
  }
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}
