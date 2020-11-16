import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoomComponent} from './room.component';
import {RoomUpdateComponent} from './room-update/room-update.component';
import {RoomDetailComponent} from './room-detail/room-detail.component';

const routes: Routes = [
  {path: '', component: RoomComponent},
  {path: ':id/update', component: RoomUpdateComponent},
  {path: ':id/details', component: RoomDetailComponent},
  {path: 'new', component: RoomUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule { }
