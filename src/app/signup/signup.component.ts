import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EqualPasswordFields } from '../shared/equal-password-fields.directive';
import { CrossFieldErrorMatcher } from '../shared/cross-field-error-matcher.directive';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formSignup: FormGroup;
  errorMatcher = new CrossFieldErrorMatcher();

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.formSignup = this.fb.group({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      passwordConfirmation: new FormControl(null, [Validators.required])
    }, {validators: EqualPasswordFields});
  }

  ngOnInit(): void {
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.formSignup.controls[controlName].hasError(errorName);
  }

  // tslint:disable-next-line:typedef
  onSubmit(value: any) {
    const signup = {
      username: value.username,
      password: value.password,
      passwordConfirmation: value.passwordConfirmation
    };
  }
}
