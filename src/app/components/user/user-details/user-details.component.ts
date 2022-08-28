import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user = new User();

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let userId = this.activatedRoute.snapshot.params['id'] || '0';
    this.userService.getUserById(parseInt(userId)).subscribe(
      res => this.user = res
    )
  }

}
