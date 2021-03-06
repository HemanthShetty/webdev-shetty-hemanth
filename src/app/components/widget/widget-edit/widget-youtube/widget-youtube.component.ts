import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

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
                this.nameYoutube = data['name'];
                this.textYoutube = data['text'];
                this.urlYoutube = data['url'];
                this.widthYoutube = data['width'];
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
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
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
