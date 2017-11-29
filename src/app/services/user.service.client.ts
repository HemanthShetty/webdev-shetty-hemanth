import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class UserService {

  constructor(private _http: Http) { }

  options: RequestOptions = new RequestOptions();
  baseUrl = environment.baseUrl;

  api = {
    'createUser'   : this.createUser,
    'findUserById' : this.findUserById
  };

  register(username, password) {
    this.options.withCredentials = true;
    const credentials = {
      username : username,
      password : password,
    };
    return this._http.post(this.baseUrl + '/api/register', credentials, this.options)
      .map((res: Response) => {
          return res.json();
        }
      );
  }
  login(username, password) {
    this.options.withCredentials = true;
    const credentials = {
      username : username,
      password : password,
    };
    return this._http.post(this.baseUrl + '/api/login', credentials, this.options)
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  createUser(user: any) {
    const userDetails = {
            username: user.username,
            password: user.password,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
    };
    return this._http.post(this.baseUrl + '/api/user', userDetails)
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  findUserById(userId: String) {
    return this._http.get(this.baseUrl + '/api/user/' + userId)
      .map((res: Response) => {
        return res.json();
      });
  }

  findUserByUsername(username: String) {
    return this._http.get(this.baseUrl + '/api/user?username=' + username)
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  findUserByCredentials(username: String, password: String) {
    return this._http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password)
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  updateUser(userId, user) {
    return this._http.put(this.baseUrl + '/api/user/' + userId, user)
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  deleteUser(userId) {
    return this._http.delete(this.baseUrl + '/api/user/' + userId)
      .map((res: Response) => {
          return res.json();
        }
      );
  }
}

