import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {Widget} from "../../../models/widget.model.client";

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css'],
})
export class WidgetEditComponent implements OnInit {

  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;
  widget: {};

  constructor(private widgetService: WidgetService,
              private activatedRoutes: ActivatedRoute) {
  }

  ngOnInit() {
    this.widget = new Widget('', '' , '');
    this.activatedRoutes.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
      this.widgetService.findWidgetById(this.widgetId)
        .subscribe(
          (data: any) => {
            if ( data != null) {
              this.widget = data;
            }
          },
          (error: any) => {
          }
        );
    });
  }
}
