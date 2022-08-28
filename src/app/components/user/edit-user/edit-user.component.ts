import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormResponse } from 'src/app/models/form-response';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  formResponse = new FormResponse();

  user = new User();

  constructor(private userService: UserService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    let userId = await this.activatedRoute.snapshot.params['id'];
    if (userId != 'new') {
      await this.userService.getUserById(parseInt(userId)).subscribe(
        res => this.user = res
      )
    }

  }

  async save() {
    //console.log(this.user);
    if (this.user.id > 0) {
      // Update existing user
      await this.userService.updateUser(this.user).subscribe(
        res => {
          this.user = res;
          this.formResponse.setMessage('Update saved.');
        }
      )
    }
    else {
      // add new user
      await this.userService.addUser(this.user).subscribe(
        res => {
          this.user = new User();
          this.formResponse.setMessage('User added successfully.');
          this.router.navigate([`users/edit/${res.id}`])
        },
        err => this.formResponse.setError('Form validation error')
      )
    }
  }

}
