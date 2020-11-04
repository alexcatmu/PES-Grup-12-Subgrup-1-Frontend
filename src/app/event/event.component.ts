import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from '../models/event';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {Router} from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit, AfterViewInit {

  public displayedColumns = ['name', 'date', 'hourIni', 'price_range', 'actions'];

  selectedEvent: Event;
  public events: Event[];
  public dataSource = new MatTableDataSource<Event>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(protected eventService: EventService,
              private router: Router) { }

  ngOnInit(): void {
    this.fetchData();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  fetchData(): void {
    this.eventService.getAll().subscribe(events => {
      console.log(events);
      this.events = events;
      this.dataSource.data = events;
    }, error => {
      console.error('Ha habido un error al hacer get de eventos', error);
    });
  }

  delete(id: string): void {
    this.eventService.delete(id).subscribe(() => {

      console.log('Evento con id: ' + id + ' borrado');
      this.fetchData();
    }, error => {
      console.error('Ha habido un error al hacer delete del evento', error);
    });
  }

  onSelect(event: Event): void {
    this.selectedEvent = event;
  }

  public doFilter = (event: any) => {
    this.dataSource.filter = event.target.value.trim().toLocaleLowerCase();
  }

  public customSort = (event) => {
    console.log(event);
  }

  public redirectToDetails = (id: string) => {
    this.router.navigate([`/event/${id}/details`]).then(() => console.log('redirect to event details'));
  }

  public redirectToUpdate = (id: any) => {
    this.router.navigate([`/event/${id}/update`]).then(() => console.log('redirect to event update'));
  }
}
