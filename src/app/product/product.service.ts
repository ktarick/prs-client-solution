import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Product } from './product.class'

const url = 'http://localhost:61260/api'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  change(product: Product): Observable<any> {
    return this.http.put(`${url}/products/${product.id}`, product) as Observable<any>;
  }
  create(product: Product): Observable<any> {
    return this.http.post(`${url}/products`, product) as Observable<any>;
  }
  get(id: string): Observable<Product> {
    return this.http.get(`${url}/products/${id}`) as Observable<Product>;
  }
  remove(product: Product): Observable<any> {
    return this.http.delete(`${url}/products/${product.id}`) as Observable<any>;
  }
  list(): Observable<Product[]> {
    return this.http.get(`${url}/products`) as Observable<Product[]>;
  }
  constructor(private http: HttpClient) { }
}