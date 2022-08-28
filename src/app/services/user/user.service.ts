import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from 'src/app/models/user';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint = environment.API_URL + '/api/users';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(this.endpoint);
  }

  getUserById(id: number) {
    return this.http.get<User>(`${this.endpoint}/${id}`);
  }

  addUser(user: User) {
    return this.http.post<User>(this.endpoint, user);
  }

  updateUser(user: User) {
    return this.http.put<User>(`${this.endpoint}/${user.id}`, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.endpoint}/${id}`);
  }

}
