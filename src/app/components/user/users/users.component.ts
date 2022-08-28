import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  loggedUser = new User();

  constructor(private userService: UserService) { }

  ngOnInit(): void { }

  search() {
    this.users = this.userService.getUsers();
  }

}
