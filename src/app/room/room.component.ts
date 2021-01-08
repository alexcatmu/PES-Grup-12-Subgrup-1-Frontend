import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {RoomService} from '../services/room.service';
import {Room} from '../models/room';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {Router} from '@angular/router';
import {DialogConfirmationComponent} from '../components/dialog-confirmation/dialog-confirmation.component';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit, AfterViewInit {
  public displayedColumns = ['name', 'capacity', 'street', 'actions', 'viewEvents'];

  selectedRoom: Room;
  public rooms: Room[];
  public dataSource = new MatTableDataSource<Room>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private roomService: RoomService, private router: Router, public dialog: MatDialog) { }

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

    this.dialog
      .open(DialogConfirmationComponent)
      .afterClosed()
      .subscribe((confirm: Boolean) => {
        if (confirm) {
          this.roomService.getEvents(id).subscribe(events => {
            if (events.length === 0) {
              this.roomService.delete(id).subscribe(() => {
                console.log('Evento con id: ' + id + ' borrado');
                this.fetchData();
                alert('¡La sala "' + id.split('_')[0] + '" se borro correctamente!');
              }, error => {
                console.error('Ha habido un error al hacer delete del evento', error);
              });
            } else {
              alert("Esta sala no se puede eliminar, contiene eventos")
            }
          }, error => {
            console.error('Ha habido un error al hacer get de eventos de una sala', error);
          });
        }
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

  public redirectToStatus = (id: any) => {
    this.router.navigate([`/room/${id}/status`]).then(() => console.log('redirect to room status'));
  }
  public redirectToStats = (id: any) => {
    this.router.navigate([`/room/${id}/stats`]).then(() => console.log('redirect to room status'));
  }

}
