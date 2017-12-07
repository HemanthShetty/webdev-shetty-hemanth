import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {SharedService} from "./shared.service.client";

// injecting service into module
@Injectable()

export class UserService {

  constructor(private _http: Http, private sharedService: SharedService, private router: Router) { }

  options: RequestOptions = new RequestOptions();
  baseUrl = environment.baseUrl;


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

  loggedIn() {
    this.options.withCredentials = true;
    return this._http.post(this.baseUrl + '/api/loggedIn', '', this.options)
      .map(
        (res: Response) => {
          const user = res.json();
          if (user !== 0) {
            this.sharedService.user = user; // setting user so as to share with all components
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
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

  logout() {
    this.options.withCredentials = true;
    return this._http.post(this.baseUrl + '/api/logout', '', this.options)
      .map(
        (res: Response) => {
          const data = res;
        }
      );
  }
}

