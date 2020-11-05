import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {StorageService} from '../services/storage.service';
import {Login} from '../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private storageService: StorageService) {
    this.formLogin = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.formLogin.controls[controlName].hasError(errorName);
  }

  onSubmit(value: any): void {
    const login = {
      username: value.username,
      password: value.password,
    };

    this.authService.login(login).subscribe((data: Login) => {
      console.log(data);
      this.storageService.setCurrentSession(data);
    }, (error => {
      console.error('Error with login', error);
    }));
  }
}
