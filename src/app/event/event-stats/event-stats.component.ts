import {Component, OnInit} from '@angular/core';
import {Event} from '../../models/event';
import {EventService} from '../../services/event.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ChartDataSets} from 'chart.js';
import {Color, Label} from 'ng2-charts';

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
  options = {
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

  dataGroups: ChartDataSets[] = [
    {data: [], label: 'Groups'},
  ];

  labelsGroup: Label[] = ['1', '2', '3', '4'];

  colorsGroup: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgb(224,189,13)',
    },
  ];

  legendGroup = true;
  pluginGroup = [];
  typeGroup = undefined;


  dataCapacity: ChartDataSets[] = [
    {data: [], label: 'Capacity'},
  ];

  labelsCapacity: Array<any> = ['Occupied', 'Covid', 'Free'];

  colorsCapacity: Color[] = [
    {
      borderColor: ['#F7464A', '#949494', '#10ab11'],
      backgroundColor: ['#FF5A5E', '#aeaeae', '#15c116'],
      borderWidth: 2,
    },
  ];

  legendCapacity = true;
  pluginCapacity = [];


  constructor(private eventService: EventService,
              protected activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.eventId = params.id;
      this.eventService.get(this.eventId).subscribe((event) => {
        this.event = event;
        this.auxRoomName = this.event.id_room.split('_')[0];
        this.seats = this.event.matrix;
        this.doGrouping(this.seats);
        this.doCapacity(this.seats);
      });
    });
  }

  public chartClicked(): void {
  }

  public chartHovered(): void {
  }

  private doGrouping(seats: string[][]): void {
    this.typeGroup = 'bar';
    const plainArray = seats.join(',').split(',');
    const assistents = {
      T: undefined,
      F: undefined
    };
    plainArray.forEach(x => {
      assistents[x] = (assistents[x] || 0) + 1;
    });
    delete assistents.T;
    delete assistents.F;
    const groups = [0, 0, 0, 0];
    Object.entries(assistents).forEach((entry) => {
      const [, value] = entry;
      groups[value - 1]++;
    });
    this.dataGroups = [
      {data: groups, label: 'Groups'},
    ];
  }

  private doCapacity(seats: string[][]): void {
    const plainArray = seats.join(',').split(',');
    const covid = plainArray.filter(x => x === 'F').length;
    const free = plainArray.filter(x => x === 'T').length;
    const occupied = plainArray.length - covid - free;
    const capacity = [occupied, covid, free];
    console.log(capacity);
    this.dataCapacity = [
      {data: capacity, label: 'Capacity'}
    ];
    console.log(capacity);
  }

  public redirectToRoomSelf = (id: any) => {
    this.router.navigate([`/room/${id}/details`]).then(() => console.log('redirect to event status'));
  }
}
