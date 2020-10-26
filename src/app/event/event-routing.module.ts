import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventComponent } from './event.component';
import { EventUpdateComponent } from './event-update.component';
import { EventCreationComponent } from '../event-creation/event-creation.component';

const routes: Routes = [
  { path: '', component: EventComponent },
  { path: ':id/update', component: EventUpdateComponent },
  { path: 'new', component: EventUpdateComponent },
  { path: 'event-creation', component: EventCreationComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
