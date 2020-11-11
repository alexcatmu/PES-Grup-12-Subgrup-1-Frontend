import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Apply} from '../models/apply';

@Injectable({
  providedIn: 'root'
})

export class ApplyService {

  baseUrl = environment.apiURL + 'applies';

  constructor(private http: HttpClient) { }

  send(apply: Apply): Observable<Apply> {
    return this.http.post<Apply>(this.baseUrl, apply);
  }
}
