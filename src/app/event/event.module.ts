import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';
import { EventUpdateComponent } from './event-update.component';
import { EventDetailComponent } from '../event-detail/event-detail.component';
import { EventCreationComponent } from '../event-creation/event-creation.component';



@NgModule({
  declarations: [
    EventComponent,
    EventUpdateComponent,
    EventDetailComponent,
    EventCreationComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule
  ],
})
export class EventModule { }
