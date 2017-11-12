import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {Website} from '../models/website.model.client';


@Injectable()

export class WebsiteService {

  constructor(private _http: Http) { }

  baseUrl = environment.baseUrl;

  createWebsite(userId, website) {
    return this._http.post(this.baseUrl + '/api/user/' + userId + '/website', website)
      .map((res: Response) => {
          return res.json();
        }
      );
  }


  findWebsitesByUser(userId) {
    return this._http.get(this.baseUrl + '/api/user/' + userId + '/website')
      .map((res: Response) => {
          return res.json();
        }
      );
  }


  findWebsiteById(websiteId: String) {
    return this._http.get(this.baseUrl + '/api/website/' + websiteId)
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  updateWebsite(websiteId, website: Website) {
    return this._http.put(this.baseUrl + '/api/website/' + websiteId, website)
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  deleteWebsite(websiteId) {
    return this._http.delete(this.baseUrl + '/api/website/' + websiteId)
      .map((res: Response) => {
          return res.json();
        }
      );
  }



}

