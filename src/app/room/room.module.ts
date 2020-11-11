import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './room.component';
import { RoomUpdateComponent } from './room-update/room-update.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [RoomComponent, RoomUpdateComponent, RoomDetailComponent],
  imports: [
    CommonModule,
    RoomRoutingModule,
    TranslateModule,
    SharedModule
  ]
})
export class RoomModule { }
