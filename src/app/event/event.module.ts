import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';
import { EventUpdateComponent } from './event-update.component';
import { EventDetailComponent } from './event-detail.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    EventComponent,
    EventUpdateComponent,
    EventDetailComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SharedModule
  ],
  providers: [DatePipe]
})
export class EventModule { }
