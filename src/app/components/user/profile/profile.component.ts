import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';
import { Validators } from '@angular/forms';
import {User} from '../../../models/user.model.client';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userId: String ;
  user: User = new User('', '', '', '', '', '');
  notificationMessage: String;
  isInvalid: boolean;
  @ViewChild('f') profileForm: NgForm;
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => { this.userId = params['userId']; });
    this.userService.findUserById(this.userId)
      .subscribe(
        (data: any) => {
          this.user = data;
          if (!this.user) {
            this.router.navigate(['/login']);
          }
          },
        (error: any) => {
          this.isInvalid = true;
          this.notificationMessage = 'Error fetching users profile information' ;
        }
        );

  }

  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }

  editProfile() {
    if (this.profileForm.valid) {
      this.user.username = this.profileForm.value.username;
      this.user.email = this.profileForm.value.email;
      this.user.firstName = this.profileForm.value.firstname;
      this.user.lastName = this.profileForm.value.lastname;
      this.userService.updateUser(this.userId, this.user).subscribe(
        (data: any) => {
          if (data == null) {
            this.isInvalid = true;
            this.notificationMessage = 'Error updating profile information' ;
          } else {
            this.isInvalid = false;
          }
        },
        (error: any) => {
          this.isInvalid = true;
          this.notificationMessage = 'Error updating profile information' ;
        }
      );
    } else {
      this.notificationMessage = 'Please Enter The Correct Values';
      this.isInvalid = true ;
    }
  }

}
