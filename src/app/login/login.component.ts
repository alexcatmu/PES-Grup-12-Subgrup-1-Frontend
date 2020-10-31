import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private fb: FormBuilder) {

    this.formLogin = this.fb.group({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

}
