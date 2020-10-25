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

  get(id: number): Observable<Event>{
    const url = this.baseURL + id;
    return this.http.get<Event>(url);
  }

  create(event: Event): Observable<Event>{
    return this.http.post<Event>(this.baseURL, event);
  }

  delete(id: number): Observable<Object>{
    return this.http.delete(this.baseURL+id);
  }

}
