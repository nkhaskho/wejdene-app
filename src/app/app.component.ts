import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Wimbee';
  activeRoute: string = "dashboard";
  appStorage = localStorage;

  constructor(private router: Router,
              private authService: AuthService) {}

  ngOnInit(): void {
    if (!localStorage.getItem('token')) {
      this.authService.signOut();
      this.router.navigate(['/login']);
    }
  }

  navigate(route: string) {
    this.activeRoute = route;
    try {
      this.router.navigate([route]); 
    } catch (error) {
      this.router.navigate(['dashboard']);
    }
  }

  logOut() {
    this.authService.signOut();
    this.router.navigate(['login']);
  }
  
}
