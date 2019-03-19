import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { User } from './user.class'

const url = 'http://localhost:61260/api'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  change(user: User): Observable<any> {
    return this.http.put(`${url}/users/${user.id}`, user) as Observable<any>;
  }
  create(user: User): Observable<any> {
    return this.http.post(`${url}/users`, user) as Observable<any>;
  }
  get(id: string): Observable<User> {
    return this.http.get(`${url}/users/${id}`) as Observable<User>;
  }
  remove(user: User): Observable<any> {
    return this.http.delete(`${url}/users/${user.id}`) as Observable<any>;
  }
  list(): Observable<User[]> {
    return this.http.get(`${url}/users`) as Observable<User[]>;
  }
  login(username:string, password: string): Observable<User>{
    return this.http.get(`${url}/users/auth/${username}/${password}`) as Observable<User>
  }
  constructor(private http: HttpClient) { }
}