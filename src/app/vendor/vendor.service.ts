import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Vendor } from './vendor.class'

const url = 'http://localhost:61260/api'

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  change(vendor: Vendor): Observable<any> {
    return this.http.put(`${url}/vendors/${vendor.id}`, vendor) as Observable<any>;
  }
  create(vendor: Vendor): Observable<any> {
    return this.http.post(`${url}/vendors`, vendor) as Observable<any>;
  }
  get(id: string): Observable<Vendor> {
    return this.http.get(`${url}/vendors/${id}`) as Observable<Vendor>;
  }
  remove(vendor: Vendor): Observable<any> {
    return this.http.delete(`${url}/vendors/${vendor.id}`) as Observable<any>;
  }
  list(): Observable<Vendor[]> {
    return this.http.get(`${url}/vendors`) as Observable<Vendor[]>;
  }
  constructor(private http: HttpClient) { }
}