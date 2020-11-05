import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Login} from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL = environment.apiURL + 'auth/';
  loginURL = this.baseURL + 'login';
  logoutURL = this.baseURL + 'logout';
  constructor(private http: HttpClient) {}

  login(login): Observable<Login>{
    return this.http.post<Login>(this.loginURL, {
      username: login.username,
      password: login.password,
    });
  }

  logout(): Observable<any> {
    return this.http.post<any>(this.logoutURL, {}, {
      headers: new HttpHeaders({
        Authorization: 'Token ' + localStorage.getItem('token'),
      })
    });
  }
}
