import { Injectable } from '@angular/core';
import { LoginForm } from 'src/app/models/login-form';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  logIn(loginForm: LoginForm) {
    localStorage.setItem('id', '1'),
    localStorage.setItem('user', 'nkhaskho')
  }

  signOut() {
    // clear local storage data
    localStorage.clear();
  }
}
