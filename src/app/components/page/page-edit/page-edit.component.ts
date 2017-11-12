import {Component, OnInit, ViewChild} from '@angular/core';
import { PageService } from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Page} from '../../../models/page.model.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  userId: String;
  websiteId: String;
  pageId: String;
  pages = [{}];
  errorFlag: boolean;
  errorMsg: String;
  updatedPageDetails: Page;
  @ViewChild('f') websiteForm: NgForm;

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.updatedPageDetails = new Page('', '' , '' , '');
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
        }
      );
    this.pageService.findPageByWebsiteId(this.websiteId)
      .subscribe(
        (data: any) => {
          this.pages = data;
        },
        (error: any) => {
        }
      );
    this.pageService.findPageById(this.pageId)
      .subscribe(
        (data: any) => {
          if (data == null) {
            this.errorFlag = true;
            this.errorMsg = 'Error Fetching Website details' ;
          }else {
            this.updatedPageDetails = data;
          }
        },
        (error: any) => {
          this.errorFlag = true;
          this.errorMsg = 'Error Fetching Website details' ;
        }
      );
  }
  updatePage() {
    if (this.websiteForm.valid) {
      this.updatedPageDetails.name = this.websiteForm.value.pageName;
      this.updatedPageDetails.description = this.websiteForm.value.pageDescription;
      this.updatedPageDetails.websiteId = this.websiteId.toString();
      this.pageService.updatePage(this.pageId, this.updatedPageDetails)
        .subscribe(
          (data: any) => {
            if (data == null) {
              this.errorFlag = true;
              this.errorMsg = 'Error Updating Page details' ;
            } else {
              this.router.navigate(['/user', this.userId , 'website' , this.websiteId , 'page']);
            }
          },
          (error: any) => {
            this.errorFlag = true;
            this.errorMsg = 'Error Updating Page details' ;
          }
        );
    } else {
      this.errorMsg = 'Please Enter The Correct Values';
      this.errorFlag = true ;
    }
  }

  deletePage() {
    this.pageService.deletePage(this.pageId)
      .subscribe(
        (data: any) => {
          if (data.success) {
            this.router.navigate(['/user', this.userId , 'website' , this.websiteId , 'page']);
          } else {
            this.errorFlag = true;
            this.errorMsg = 'Error Deleting Page' ;
          }
        },
        (error: any) => {
        }
      );
  }


}
