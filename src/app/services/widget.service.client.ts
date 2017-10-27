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
  widgets = [
    {'_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 2, 'text': 'GIZMODO'},
    {'_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    {
      '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%',
      'url': 'https://i.pinimg.com/originals/a2/2a/0a/a22a0a7e624943303b23cc326598c167.jpg'
    },
    {'_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'},
    {'_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    {
      '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%',
      'url': 'https://www.youtube.com/embed/vlDzYIIOYmM'
    },
    {'_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'}
  ];

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
