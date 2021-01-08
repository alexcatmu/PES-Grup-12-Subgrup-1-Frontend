import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginRoutingModule} from './login-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSliderModule} from '@angular/material/slider';
import {TranslateModule} from '@ngx-translate/core';
import {RecaptchaFormsModule, RecaptchaModule} from 'ng-recaptcha';

@NgModule({
  declarations: [LoginComponent],
    imports: [
        CommonModule,
        LoginRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        SharedModule,
        MatSliderModule,
        TranslateModule,
        RecaptchaModule,
        RecaptchaFormsModule,
    ]
})
export class LoginModule {
}
