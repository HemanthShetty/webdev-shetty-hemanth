import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {

  nameYoutube: String;
  textYoutube: String;
  pageId: String;
  widgetId: String;
  widgetEdit: Boolean;
  widget = {};
  urlYoutube: String;
  widthYoutube: String;
  userId: String;
  websiteId: String;

  constructor(private widgetService: WidgetService,
              private activatedRoutes: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
      if (this.widgetId) {
        this.widgetService.findWidgetById(this.widgetId)
          .subscribe(
            (data: any) => {
              if ( data != null) {
                this.widgetEdit = true;
                this.nameYoutube = this.widget['name'];
                this.textYoutube = this.widget['text'];
                this.urlYoutube = this.widget['url'];
                this.widthYoutube = this.widget['width'];
              }
            },
            (error: any) => {
            }
          );
      }
    });
  }

  createWidget() {
    this.widget['widgetType'] = 'YOUTUBE';
    this.widget['name'] = this.nameYoutube;
    this.widget['text'] = this.textYoutube;
    this.widget['url'] = this.urlYoutube;
    this.widget['width'] = this.widthYoutube;
    this.widget['pageId'] = this.pageId;
    this.widgetService.createWidget(this.pageId, this.widget)
      .subscribe(
        (data: any) => {
        },
        (error: any) => {
        }
      );
  }

  updateWidget() {
    this.widget['widgetType'] = 'YOUTUBE';
    this.widget['name'] = this.nameYoutube;
    this.widget['text'] = this.textYoutube;
    this.widget['url'] = this.urlYoutube;
    this.widget['width'] = this.widthYoutube;
    this.widgetService.updateWidget(this.widgetId, this.widget)
      .subscribe(
        (data: any) => {

        },
        (error: any) => {
        }
      );
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe(
        (data: any) => {

        },
        (error: any) => {
        }
      );
  }

}
