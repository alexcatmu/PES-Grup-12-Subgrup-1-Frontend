import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';


import {EventRoutingModule} from './event-routing.module';
import {EventComponent} from './event.component';
import {EventUpdateComponent} from './event-update.component';
import {EventDetailComponent} from './event-detail.component';
import {SharedModule} from '../shared/shared.module';
import {MatSliderModule} from '@angular/material/slider';
import {TranslateModule} from '@ngx-translate/core';
import { EventStatusComponent } from './event-status/event-status.component';


@NgModule({
  declarations: [
    EventComponent,
    EventUpdateComponent,
    EventDetailComponent,
    EventStatusComponent
  ],
    imports: [
        CommonModule,
        EventRoutingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        SharedModule,
        MatSliderModule,
        TranslateModule,
        FormsModule
    ],
  providers: [DatePipe]
})
export class EventModule {
}
