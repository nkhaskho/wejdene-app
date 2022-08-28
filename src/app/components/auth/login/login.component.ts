import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormResponse } from 'src/app/models/form-response';
import { LoginForm } from 'src/app/models/login-form';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new LoginForm();
  formResponse = new FormResponse();

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {}

  login() {
    this.authService.logIn(this.loginForm).subscribe(
      async res => {
        await this.authService.authenticate(res.token);
        this.router.navigate(['dashboard']);
      },
      err => this.formResponse.setError('Username or password incorrect!')
    )
  }

}
