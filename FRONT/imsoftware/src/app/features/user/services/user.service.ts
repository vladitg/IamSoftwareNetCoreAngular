import { Injectable } from '@angular/core';
import { AddUserRequest } from '../models/add-user-request.model';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl:string = 'https://localhost:7054/api/users';

  constructor(private http: HttpClient) { }

  getList():Observable<User[]>{
    return this.http.get<User[]>(`${this.apiUrl}`);
  }

  addUser(model: AddUserRequest): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/add`, model);
  }

  update(model: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/update`, model);
  }

  delete(model: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/delete`, model);
  }
}
