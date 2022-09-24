import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  search: string = '';
  selectedRole: string = 'user';

  users: User[] = [];
  selectedUser: User = new User();
  appStorage = localStorage;

  constructor(private userService: UserService) { }

  ngOnInit(): void {}

  searchUsers() {
    this.userService.getUsers(this.selectedRole, this.search).subscribe(
      res => this.users = res
    )
  }

}
