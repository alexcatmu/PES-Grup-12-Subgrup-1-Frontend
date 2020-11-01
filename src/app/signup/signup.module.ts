import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignupComponent} from './signup.component';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {SignupRoutingModule} from './signup-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    SignupRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SharedModule,
    MatSliderModule
  ]
})
export class SignupModule {
}
