import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class UserService {

  constructor() { }

  users = [
    {_id: '123', username: 'alice', password: 'alice', firstName : 'Alice', lastName : 'Wonder' , email : 'alice@gmail.com' },
    {_id: '234', username: 'bob', password: 'bob', firstName : 'Bob', lastName : 'Marley' , email : 'bob@gmail.com' },
// ... rest of user objects

  ];

  api = {
    'createUser'   : this.createUser,
    'findUserById' : this.findUserById
  };

  createUser(user: any) {
    user._id = String(Math.random());
    this.users.push(user);
    return user;
  }

  findUserById(userId: String) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {  return this.users[x]; }
    }
  }

  findUserByUsername(username: String) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username) {
         return this.users[x];
       }
    }
  }

  updateUser(userId, user) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        this.users[x].firstName = user.firstName;
        this.users[x].lastName = user.lastName;
        this.users[x].username = user.username;
        this.users[x].password = user.password;
        this.users[x].email = user.email;
        return this.users[x];
      }
    }
  }

  deleteUser(userId) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        delete this.users[x];
      }
    }
  }
}

