import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Event} from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  baseURL = environment.apiURL + 'events/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Event[]>{
    return this.http.get<Event[]>(this.baseURL);
  }


  get(id: string): Observable<Event>{
    const url = this.baseURL + id;
    return this.http.get<Event>(url);
  }
}
