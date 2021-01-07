import {Component, OnInit} from '@angular/core';
import {EventService} from '../../services/event.service';
import {RoomService} from '../../services/room.service';
import {ActivatedRoute} from '@angular/router';
import {Room} from '../../models/room';
import {Event} from '../../models/event';

@Component({
  selector: 'app-room-stats',
  templateUrl: './room-stats.component.html',
  styleUrls: ['./room-stats.component.css']
})
export class RoomStatsComponent implements OnInit {
  roomId: string;
  room: Room;
  events: Event[];
  public chartType: string = 'line';

  public chartDatasets: Array<any> = [];

  public chartLabels: Array<string> = [];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgb(246,0,0)',
      borderColor: 'rgb(171,0,0)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(145,145,145,0.2)',
      borderColor: 'rgba(81,81,81,0.7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgb(31,202,0)',
      borderColor: 'rgb(30,122,0)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
          beginAtZero: true,
          precision: 0
        }
      }]
    }
  };

  constructor(private eventService: EventService, private roomService: RoomService,
              protected activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.roomId = params.id;
      this.roomService.get(this.roomId).subscribe((room) => {
        this.room = room[0];
        this.roomService.getEvents(this.room._id).subscribe((events) => {
          this.events = events;
          console.log(this.room);
          this.chartLabels = this.events.map((e) => {
            return e.name;
          });
          const covid = this.events.map((e) => {
            console.log(e);
            return e.seats.split('F').length - 1;
          });
          const free = this.events.map((e) => {
            return e.seats.split('T').length - 1;
          });
          const occupied = this.events.map((e) => {
            const cov = e.seats.split('F').length - 1;
            const fr = e.seats.split('T').length - 1;
            return this.room.capacity - cov - fr;
          });
          console.log(covid);
          console.log(free);
          console.log(occupied);
          this.chartDatasets = [
            { data: occupied, label: 'Occupied' },
            { data: covid, label: 'Covid'},
            { data: free, label: 'Free'}
          ];
        });
      });
    });
  }

  public chartClicked(e: any): void {
  }

  public chartHovered(e: any): void {
  }

}
