import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  @ViewChild('f') registrationForm: NgForm;


  user: User;
  verifyPassword: String;
  errorFlag: Boolean;
  errorMsg: String;

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.user = new User('', '' , '' , '' , '', '' );
  }

  createUser() {
    if (this.registrationForm.valid) {
      this.user.username = this.registrationForm.value.userName;
      this.user.password = this.registrationForm.value.password;
      this.user.firstName = this.registrationForm.value.firstName;
      this.user.lastName = this.registrationForm.value.lastName;
      this.user.email = this.registrationForm.value.email;
      const user = this.userService.createUser(this.user);
      if (user) {
        this.router.navigate(['/user', user._id]);
      } else {
        this.errorFlag = true;
        this.errorMsg = 'Failed to create the user';
      }
    } else {
      this.errorFlag = true;
      this.errorMsg = 'Please enter the correct values';
    }
  }

  isPasswordVerified() {
    return (this.registrationForm.value.password === this.registrationForm.value.verifyPassword);
  }
}
