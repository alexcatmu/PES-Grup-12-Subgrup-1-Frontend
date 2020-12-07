import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {StorageService} from './storage.service';
import {Observable} from 'rxjs';
import {Event} from '../models/event';
import {Room} from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  baseURL = environment.apiURL + 'rooms/';
  headers = new HttpHeaders({
    Authorization: 'Token ' + this.storageService?.getCurrentSession()?.token,
  });

  constructor(private http: HttpClient, private storageService: StorageService) {
  }

  getAll(): Observable<Room[]> {
    return this.http.get<Room[]>(this.baseURL, {headers: this.headers});
  }

  get(id: string): Observable<Room> {
    const url = this.baseURL + id;
    return this.http.get<Room>(url, {headers: this.headers});
  }

  create(room: Room): Observable<Room> {
    return this.http.post<Room>(this.baseURL, room, {headers: this.headers});
  }

  delete(id: string): Observable<Room> {
    return this.http.delete<Room>(this.baseURL + id, {headers: this.headers});
  }

  getEvents(id: string): Observable<Event[]> {
    const url = this.baseURL + id + '/events';
    console.log(url);
    return this.http.get<Event[]>(url, {headers: this.headers});
  }
}
