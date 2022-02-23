import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) {}

  getUsers(): Observable<any> {
    const URL = 'https://reqres.in/api/users?page=' + 1;
    return this.http.get(URL);
  }

  searchUsers(data: any): Observable<any> {
    const URL = 'https://reqres.in/api/users/' + data;
    return this.http.get(URL);
  }

  createUser(data: {}): Observable<any> {
    const URL = 'https://reqres.in/api/users';
    return this.http.post(URL,data);
  }

  updateUser(data: {}): Observable<any> {
    const URL = 'https://reqres.in/api/users/' + data;
    return this.http.put(URL, data);
  }

  deleteUser(data: any): Observable<any> {
    const URL = 'https://reqres.in/api/users/' + data;
    return this.http.delete(URL);
  }

}
