import { Injectable } from '@angular/core';
import { LoginForm } from 'src/app/models/login-form';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { AuthResponse } from 'src/app/models/auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint = environment.API_URL + '/api/auth';

  constructor(private http: HttpClient) { }

  logIn(loginForm: LoginForm) {
    return this.http.post<AuthResponse>(this.endpoint, loginForm);
  }

  authenticate(token: string) {
    let payload = this.decodeJwt(token);
    localStorage.setItem('token', token)   
    localStorage.setItem('id', payload['id']),
    localStorage.setItem('username', payload['username']),
    localStorage.setItem('email', payload['email']),
    localStorage.setItem('role', payload['role'])    
  }

  signOut() {
    // clear local storage data
    localStorage.clear();
  }

  decodeJwt(token: string) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  }
}
