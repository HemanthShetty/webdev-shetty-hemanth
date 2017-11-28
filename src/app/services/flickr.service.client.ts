import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Http, Response} from '@angular/http';
import {environment} from '../../environments/environment';

// injecting service into module
@Injectable()

export class FlickrService {

  key = '30da698f6b5d2c8fa6f024ff13838104';
  secret = 'c106b21b49a69026';
  urlBase = 'https://api.flickr.com/services/rest/?method=' +
    'flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';

  constructor(private _http: Http) {}

  searchPhotos(searchTerm: any) {
    const url = this.urlBase
      .replace('API_KEY', this.key)
      .replace('TEXT', searchTerm);
    return this._http.get(url);
  }
}
