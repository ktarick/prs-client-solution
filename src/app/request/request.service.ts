import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Request } from './request.class'

const url = 'http://localhost:61260/api'

@Injectable({
  providedIn: 'root'
})
  export class RequestService {
  change(request: Request): Observable<any> {
    return this.http.put(`${url}/requests/${request.id}`, request) as Observable<any>;
  }
  create(request: Request): Observable<any> {
    return this.http.post(`${url}/requests`, request) as Observable<any>;
  }
  get(id: string): Observable<Request> {
    return this.http.get(`${url}/requests/${id}`) as Observable<Request>;
  }
  remove(request: Request): Observable<any> {
    return this.http.delete(`${url}/requests/${request.id}`) as Observable<any>;
  }
  list(): Observable<Request[]> {
    return this.http.get(`${url}/requests`) as Observable<Request[]>;
  }
  listReview(): Observable<Request[]> {
    return this.http.get(`${url}/requests/review`) as Observable<Request[]>;
  }
  constructor(private http: HttpClient) { }
}