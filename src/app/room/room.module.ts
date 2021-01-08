import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './room.component';
import { RoomUpdateComponent } from './room-update/room-update.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import { RoomStatusComponent } from './room-status/room-status.component';
import { RoomStatsComponent } from './room-stats/room-stats.component';
import {ChartsModule} from 'ng2-charts';


@NgModule({
  declarations: [RoomComponent, RoomUpdateComponent, RoomDetailComponent, RoomStatusComponent, RoomStatsComponent],
  imports: [
    CommonModule,
    RoomRoutingModule,
    TranslateModule,
    SharedModule,
    ChartsModule,
    ReactiveFormsModule
  ]
})
export class RoomModule { }
