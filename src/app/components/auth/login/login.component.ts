import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from 'src/app/models/login-form';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new LoginForm();

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {}

  login() {
    // todo
    this.authService.logIn(this.loginForm);
    this.router.navigate(['dashboard']);
  }

}
