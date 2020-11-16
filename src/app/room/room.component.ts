import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {RoomService} from '../services/room.service';
import {Room} from '../models/room';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {Router} from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit, AfterViewInit {
  public displayedColumns = ['name', 'capacity', 'street', 'actions'];

  selectedRoom: Room;
  public rooms: Room[];
  public dataSource = new MatTableDataSource<Room>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private roomService: RoomService, private router: Router) { }

  ngOnInit(): void {
    this.fetchData();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  fetchData(): void {
    this.roomService.getAll().subscribe(rooms => {
      this.rooms = rooms;
      this.dataSource.data = rooms;
    }, error => {
      console.error('Ha habido un error al hacer get de eventos', error);
    });
  }

  delete(id: string): void {
    this.roomService.delete(id).subscribe(() => {

      console.log('Evento con id: ' + id + ' borrado');
      this.fetchData();
    }, error => {
      console.error('Ha habido un error al hacer delete del evento', error);
    });
  }

  onSelect(room: Room): void {
    this.selectedRoom = room;
  }

  public doFilter = (room: any) => {
    this.dataSource.filter = room.target.value.trim().toLocaleLowerCase();
  }

  public redirectToDetails = (id: string) => {
    this.router.navigate([`/room/${id}/details`]).then(() => console.log('redirect to room details'));
  }

  public redirectToUpdate = (id: any) => {
    this.router.navigate([`/room/${id}/update`]).then(() => console.log('redirect to room update'));
  }

}
