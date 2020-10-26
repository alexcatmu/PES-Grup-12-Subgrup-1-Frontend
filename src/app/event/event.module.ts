import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';
import { EventUpdateComponent } from './event-update.component';
import { EventDetailComponent } from './event-detail.component';


@NgModule({
  declarations: [
    EventComponent,
    EventUpdateComponent,
    EventDetailComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    ReactiveFormsModule
  ],
})
export class EventModule { }
