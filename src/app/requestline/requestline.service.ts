import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Requestline } from './requestline.class'

const url = 'http://localhost:61260/api'

@Injectable({
  providedIn: 'root'
})
export class RequestlineService {
  change(requestline: Requestline): Observable<any> {
    return this.http.put(`${url}/requestlines/${requestline.id}`, requestline) as Observable<any>;
  }
  create(requestline: Requestline): Observable<any> {
    return this.http.post(`${url}/requestlines`, requestline) as Observable<any>;
  }
  get(id: string): Observable<Requestline> {
    return this.http.get(`${url}/requestlines/${id}`) as Observable<Requestline>;
  }
  remove(requestline: Requestline): Observable<any> {
    return this.http.delete(`${url}/requestlines/${requestline.id}`) as Observable<any>;
  }
  list(): Observable<Requestline[]> {
    return this.http.get(`${url}/requestLines`) as Observable<Requestline[]>;
  }
  constructor(private http: HttpClient) { }
}