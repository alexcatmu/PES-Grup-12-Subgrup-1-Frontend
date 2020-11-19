import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApplicationFormComponent} from './application-form.component';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ApplicationFormRoutingModule} from './application-form-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSliderModule} from '@angular/material/slider';
import {TranslateModule} from '@ngx-translate/core';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [ApplicationFormComponent],
    imports: [
        CommonModule,
        ApplicationFormRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        SharedModule,
        MatSliderModule,
        TranslateModule,
        MatDialogModule
    ]
})
export class ApplicationFormModule {
}
