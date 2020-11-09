import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Event} from '../models/event';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  baseURL = environment.apiURL + 'events/';
  headers = new HttpHeaders({
    Authorization: 'Token ' + this.storageService.getCurrentSession().token,
  });

  constructor(private http: HttpClient, private storageService: StorageService) {
  }

  getAll(): Observable<Event[]> {
    return this.http.get<Event[]>(this.baseURL, {headers: this.headers});
  }

  get(id: string): Observable<Event> {
    const url = this.baseURL + id;
    return this.http.get<Event>(url, {headers: this.headers});
  }

  create(event: Event): Observable<Event> {
    return this.http.post<Event>(this.baseURL, event, {headers: this.headers});
  }

  delete(id: string): Observable<Event> {
    return this.http.delete<Event>(this.baseURL + id, {headers: this.headers});
  }

}
