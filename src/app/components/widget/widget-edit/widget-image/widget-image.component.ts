import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {

  nameImage: String;
  textImage: String;
  urlImage: String;
  widthImage: String;
  uploadImage: String;
  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;
  widgetEdit: Boolean;
  widget = {};

  constructor(private widgetService: WidgetService,
              private activatedRoutes: ActivatedRoute, private router: Router) {
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
                this.nameImage = data['name'];
                this.textImage = data['text'];
                this.urlImage = data['url'];
                this.widthImage = data['width'];
                this.uploadImage = data['upload'];
              }
            },
            (error: any) => {
            }
          );
      }
    });
  }

  createWidget() {
    this.widget['widgetType'] = 'IMAGE';
    this.widget['text'] = this.textImage;
    this.widget['url'] = this.urlImage;
    this.widget['width'] = this.widthImage;
    this.widget['upload'] = this.uploadImage;
    this.widget['name'] = this.nameImage;
    this.widget['pageId'] = this.pageId;
    this.widgetService.createWidget(this.pageId, this.widget)
      .subscribe(
        (data: any) => {
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        },
        (error: any) => {
        }
      );
  }

  updateWidget() {
    this.widget['widgetType'] = 'IMAGE';
    this.widget['text'] = this.textImage;
    this.widget['url'] = this.urlImage;
    this.widget['width'] = this.widthImage;
    this.widget['upload'] = this.uploadImage;
    this.widget['name'] = this.nameImage;
    this.widgetService.updateWidget(this.widgetId, this.widget)
      .subscribe(
        (data: any) => {
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        },
        (error: any) => {
        }
      );
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe(
        (data: any) => {
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        },
        (error: any) => {
        }
      );
  }

}
