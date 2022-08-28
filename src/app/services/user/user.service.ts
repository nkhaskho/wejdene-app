import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  USERS: User[] = [
    {
      id: 1,
      username: "nkhaskho",
      email: "nkhaskho@email.com",
      password: "",
      role: "admin",
      phone: 12345678
    },
    {
      id: 2,
      username: "wejdene",
      email: "wejdene@email.com",
      password: "",
      role: "agent",
      phone: 12345678
    },
    {
      id: 2,
      username: "foulen",
      email: "foulen@email.com",
      password: "",
      role: "client",
      phone: 12345678
    }
  ]

  constructor() { }

  getUsers() {
    // todo
    return this.USERS;
  }

  getUserById(id: number) {
    // todo
    for (let i = 0; i < this.USERS.length; i++) {
      const user = this.USERS[i];
      if (user.id == id) { return user }
    }
    return new User();
  }
}
