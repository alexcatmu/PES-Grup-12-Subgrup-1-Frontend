import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {EventComponent} from './event.component';
import {EventUpdateComponent} from './event-update.component';
import {EventDetailComponent} from './event-detail.component';
import {EventStatusComponent} from './event-status/event-status.component';
import {EventStatsComponent} from './event-stats/event-stats.component';
import {EventCommentsComponent} from './event-comments/event-comments.component';

const routes: Routes = [
  {path: '', component: EventComponent},
  {path: ':id/update', component: EventUpdateComponent},
  {path: ':id/details', component: EventDetailComponent},
  {path: ':id/status', component: EventStatusComponent},
  {path: ':id/stats', component: EventStatsComponent},
  {path: ':id/comments', component: EventCommentsComponent},
  {path: 'new', component: EventUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule {
}
