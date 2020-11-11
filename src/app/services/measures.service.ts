import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Measure} from '../models/measures';

@Injectable({
  providedIn: 'root'
})
export class MeasuresService {
  baseURL = environment.apiURL + 'measures/';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Measure[]> {
    return this.http.get<Measure[]>(this.baseURL);
  }

}
