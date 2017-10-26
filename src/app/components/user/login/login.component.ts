import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;
  notificationMessage: String;
  isInvalid: boolean;


  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }
  login(username: String, password: String) {
    this.userService.findUserByCredentials(this.username, this.password)
      .subscribe(
        (data: any) => {
          if ( data == null) {
            this.notificationMessage = 'Please Enter a Valid User Name and Password';
            this.isInvalid = true ;
          } else {
            this.isInvalid = false;
            this.router.navigate(['/user', data._id]);
          }
             } ,
        (error: any) => {
          this.notificationMessage = 'Please Enter a Valid User Name and Password';
          this.isInvalid = true ;
        });
  }
  register() {
    this.router.navigate(['/register']);
  }

}
