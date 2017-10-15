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
    const user = this.userService.findUserByUsername(username);
    if (user == null) {
      this.notificationMessage = 'Please Enter a Valid User Name';
      this.isInvalid = true ;
    }
    if (user.password === password) {
      this.isInvalid = false;
      this.router.navigate(['/user', user._id]);
    } else {
      this.notificationMessage = 'Please Enter a Valid Password';
      this.isInvalid = true ;
    }
  }
  register() {
    this.router.navigate(['/register']);
  }

}
