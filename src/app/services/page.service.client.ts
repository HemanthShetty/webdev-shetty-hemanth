import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class PageService {

  pages = [
              { '_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem' },
              { '_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem' },
              { '_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem' }
          ];


  createPage(websiteId, page) {
    page._id = String(Math.random());
    page.developerId = websiteId;
    this.pages.push(page);
    return page;
  }

  findPageByWebsiteId(websiteId) {
    const result = [];
    let index = 0;
    for (let x = 0 ; x < this.pages.length; x++) {
      if (this.pages[x].websiteId === websiteId) {
        result[index] = this.pages[x];
        index++;
      }
      return result;
    }
  }

  findPageById(pageId: string) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {  return this.pages[x]; }
    }
  }

  updatePage(pageId, page) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        this.pages[x].name = page.firstName;
        this.pages[x].description = page.password;
        return this.pages[x];
      }
    }
  }

  deletePage(pageId) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        delete this.pages[x];
      }
    }
  }

}
