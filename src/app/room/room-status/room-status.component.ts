import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {EventService} from '../../services/event.service';
import {RoomService} from '../../services/room.service';
import {Event} from '../../models/event';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {ActivatedRoute, Router} from '@angular/router';
import {DialogConfirmationComponent} from '../../components/dialog-confirmation/dialog-confirmation.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-room-status',
  templateUrl: './room-status.component.html',
  styleUrls: ['./room-status.component.css']
})
export class RoomStatusComponent implements OnInit, AfterViewInit {

  public displayedColumns = ['name', 'date', 'hourIni', 'hourEnd', 'occupation', 'actions'];

  selectedEvent: Event;
  public roomId: string;
  public events: Event[];
  public dataSource = new MatTableDataSource<Event>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private roomService: RoomService, private activatedRoute: ActivatedRoute,
              private eventService: EventService, private router: Router, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.fetchData();
  }


  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  fetchData(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.roomId = params.id;
      this.roomService.getEvents(this.roomId).subscribe(events => {
        this.events = events;
        let cap: number;
        for (const entry of this.events){
          cap = ((entry.seats.split('\t').length - 1) + (entry.seats.split('\n').length - 1)) + 1;
          entry.occupation = cap - (entry.seats.split('T').length - 1);
          entry.capacity = cap;
        }
        this.dataSource.data = this.events;
      }, error => {
        console.error('Ha habido un error al hacer get de eventos de una sala', error);
      });
    });
  }

  public doFilter = (event: any) => {
    this.dataSource.filter = event.target.value.trim().toLocaleLowerCase();
  }

  delete(id: string): void {
    this.dialog
      .open(DialogConfirmationComponent)
      .afterClosed()
      .subscribe((confirm: Boolean) => {
        if (confirm) {
          this.eventService.delete(id).subscribe(() => {
            console.log('Evento con id: ' + id + ' borrado');
            this.fetchData();
          }, error => {
            console.error('Ha habido un error al hacer delete del evento', error);
          });
        }
      });
  }

  onSelect(event: Event): void {
    this.selectedEvent = event;
  }

  public redirectToDetails = (id: string) => {
    this.router.navigate([`/event/${id}/details`]).then(() => console.log('redirect to event details'));
  }

  public redirectToUpdate = (id: any) => {
    this.router.navigate([`/event/${id}/update`]).then(() => console.log('redirect to event update'));
  }

  public redirectToStatus = (id: any) => {
    this.router.navigate([`/event/${id}/status`]).then(() => console.log('redirect to event status'));
  }

}
