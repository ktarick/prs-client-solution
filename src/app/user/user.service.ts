import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { User } from './user.class'

const url = 'http://localhost:61260/api'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  list(): Observable<User[]> {
    return this.http.get(`${url}/user`) as Observable<User[]>;
  }
  get(id: string): Observable<User> {
    return this.http.get(`${url}/user/${id}`) as Observable<User>;
  }
  constructor(private http: HttpClient) { }
}