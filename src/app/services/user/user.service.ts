import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from 'src/app/models/user';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint = environment.API_URL + '/api/users';

  constructor(private http: HttpClient) { }

  getUsers(role: string, search: string) {
    let url = `${this.endpoint}?`
    if (search.length>0) url += `search=${search}`
    if (role.length>0) url += `&role=${role}`
    return this.http.get<User[]>(url);
  }

  getUserById(id: number) {
    return this.http.get<User>(`${this.endpoint}/${id}`);
  }

  addUser(user: User) {
    let head = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
    return this.http.post<User>(this.endpoint, user, {headers: head});
  }

  updateUser(user: User) {
    return this.http.put<User>(`${this.endpoint}/${user.id}`, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.endpoint}/${id}`);
  }

}
