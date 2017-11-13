import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {

  pageId: String;
  widgetId: String;
  widgetEdit: Boolean;
  userId: String;
  websiteId: String;
  widget = {};
  text: String;
  rows: number;
  name: String;
  formatted: boolean;
  placeholder: String;

  constructor(private widgetService: WidgetService,
              private activatedRoutes: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
      this.formatted = false;
      this.text = 'Hello' ;
      this.name = 'Hello' ;
      this.rows = 1 ;
      if (this.widgetId) {
        this.widgetService.findWidgetById(this.widgetId)
          .subscribe(
            (data: any) => {
              if ( data != null) {
                this.widget = data;
                this.widgetEdit = true;
                this.text = this.widget['text'];
                this.rows = this.widget['rows'];
                this.name = this.widget['name'];
                this.formatted = this.widget['formatted'];
                this.placeholder = this.widget['placeholder'];
              }
            },
            (error: any) => {
            }
          );
      }
    });
  }

  createWidget() {
    this.widget['widgetType'] = 'TEXT';
    this.widget['text'] = this.text;
    this.widget['rows'] = this.rows;
    this.widget['name'] = this.name;
    this.widget['formatted'] = this.formatted;
    this.widget['placeholder'] = this.placeholder;
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
    this.widget['widgetType'] = 'TEXT';
    this.widget['text'] = this.text;
    this.widget['rows'] = this.rows;
    this.widget['name'] = this.name;
    this.widget['formatted'] = this.formatted;
    this.widget['placeholder'] = this.placeholder;
    this.widget['pageId'] = this.pageId;
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
