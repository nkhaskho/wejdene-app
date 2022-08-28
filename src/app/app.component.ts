import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ITM';
  appStorage = localStorage;

  constructor(private router: Router,
              private authService: AuthService) {}

  ngOnInit(): void {
    if (!localStorage.getItem('token')) {
      this.authService.signOut();
      this.router.navigate(['/login']);
    }
  }

  logOut() {
    this.authService.signOut();
    this.router.navigate(['login']);
  }
  
}
