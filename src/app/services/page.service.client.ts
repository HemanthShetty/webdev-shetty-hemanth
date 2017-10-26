import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class PageService {

  constructor(private _http: Http) { }
  baseUrl = environment.baseUrl;

  createPage(websiteId, page) {
    return this._http.post(this.baseUrl + '/api/website/' + websiteId + '/page', page)
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  findPageByWebsiteId(websiteId) {
    return this._http.get(this.baseUrl + '/api/website/' + websiteId + '/page')
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  findPageById(pageId: String) {
    return this._http.get(this.baseUrl + '/api/page/' +  pageId)
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  updatePage(pageId, page) {
    return this._http.put(this.baseUrl + '/api/page/' +  pageId, page)
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  deletePage(pageId) {
    return this._http.delete(this.baseUrl + '/api/page/' +  pageId)
      .map((res: Response) => {
          return res.json();
        }
      );
  }

}
