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
  appStorage = localStorage;

  constructor(private userService: UserService) { }

  ngOnInit(): void {}

  search() {
    this.userService.getUsers().subscribe(
      res => this.users = res
    )
  }

}
