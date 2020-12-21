import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoomComponent} from './room.component';
import {RoomUpdateComponent} from './room-update/room-update.component';
import {RoomDetailComponent} from './room-detail/room-detail.component';
import {RoomStatusComponent} from './room-status/room-status.component';
import {RoomStatsComponent} from './room-stats/room-stats.component';

const routes: Routes = [
  {path: '', component: RoomComponent},
  {path: ':id/update', component: RoomUpdateComponent},
  {path: ':id/details', component: RoomDetailComponent},
  {path: ':id/status', component: RoomStatusComponent},
  {path: ':id/stats', component: RoomStatsComponent},
  {path: 'new', component: RoomUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule { }
