import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Http, RequestOptions, Response } from '@angular/http';
// injecting service into module
@Injectable()

export class WidgetService {

  constructor(private _http: Http) {
  }
  baseUrl = environment.baseUrl;
  createWidget(pageId, widget) {
    return this._http.post(this.baseUrl + '/api/page/' + pageId + '/widget', widget)
      .map(function (res) {
        return res.json();
      });
  }

  findWidgetsByPageId(pageId) {
    return this._http.get(this.baseUrl + '/api/page/' +  pageId + '/widget')
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  findWidgetById(widgetId) {
    return this._http.get(this.baseUrl + '/api/widget/' + widgetId)
      .map(function (res) {
        return res.json();
      });
  }

  updateWidget(widgetId, widget) {
    return this._http.put(this.baseUrl + '/api/widget/' + widgetId, widget)
      .map(function (res) {
        return res.json();
      });
    }

  deleteWidget(widgetId) {
    return this._http.delete(this.baseUrl + '/api/widget/' + widgetId)
      .map(function (res) {
        return res.json();
      });
  }
}
