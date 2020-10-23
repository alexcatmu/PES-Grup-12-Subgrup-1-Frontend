import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';
import { EventUpdateComponent } from './event-update.component';


@NgModule({
  declarations: [EventComponent, EventUpdateComponent],
  imports: [
    CommonModule,
    EventRoutingModule,
  ],
})
export class EventModule { }
