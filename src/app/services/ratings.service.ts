import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Ratings} from '../models/ratings';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class RatingsService {

  baseURL = environment.apiURL + 'ratings/';
  headers = new HttpHeaders({
    Authorization: 'Token ' + this.storageService?.getCurrentSession()?.token,
  });

  constructor(private http: HttpClient, private storageService: StorageService) {
  }
    get(id: string): Observable<Ratings> {
      const url = this.baseURL + id;
      return this.http.get<Ratings>(url, {headers: this.headers});
    }
}
