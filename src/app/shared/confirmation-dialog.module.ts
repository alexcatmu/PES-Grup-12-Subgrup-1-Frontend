import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';
import {ConfirmationDialogComponent} from './confirmation-dialog.component';

@NgModule({
  declarations: [ConfirmationDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    SharedModule,
    TranslateModule
  ]
})
export class ConfirmationDialogModule {
}
