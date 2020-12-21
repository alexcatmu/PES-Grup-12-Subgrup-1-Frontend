import { Component, OnInit } from '@angular/core';
import {Event} from '../../models/event';
import {EventService} from '../../services/event.service';
import {RoomService} from '../../services/room.service';
import {ActivatedRoute} from '@angular/router';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-event-stats',
  templateUrl: './event-stats.component.html',
  styleUrls: ['./event-stats.component.css']
})
export class EventStatsComponent implements OnInit {

  eventId: string;
  event: Event = new Event();
  capacity: number;
  seats: string[][];
  auxRoomName: string;
  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

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
      });
    });
  }
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}
