import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL = environment.apiURL + 'auth/';
  loginURL = this.baseURL + 'login';
  logoutURL = this.baseURL + 'logout';
  constructor(private http: HttpClient) {}

  login(): Observable<any>{
    return this.http.post<any>(this.loginURL, {
      username: 'Alex',
      password: '1234'
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
