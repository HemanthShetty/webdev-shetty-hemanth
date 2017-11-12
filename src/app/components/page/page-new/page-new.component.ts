import {Component, OnInit, ViewChild} from '@angular/core';
import { PageService } from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Page} from '../../../models/page.model.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  userId: String;
  websiteId: String;
  pages = [{}];
  errorFlag: boolean;
  errorMsg: String;
  pageDetails: Page;
  @ViewChild('f') websiteForm: NgForm;

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
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
    this.pageDetails = new Page('', '' , '' , '' );
  }
  createPage() {
    if (this.websiteForm.valid) {
      this.pageDetails.name = this.websiteForm.value.pageName;
      this.pageDetails.description = this.websiteForm.value.pageDescription;
      this.pageDetails.websiteId = this.websiteId.toString();
      delete this.pageDetails._id;
      this.pageService.createPage(this.websiteId, this.pageDetails)
        .subscribe(
          (data: any) => {
            this.router.navigate(['/user', this.userId , 'website' , this.websiteId , 'page']);
          },
          (error: any) => {
            this.errorMsg = 'Please Enter The Correct Values';
            this.errorFlag = true ;
          }
        );
    } else {
      this.errorMsg = 'Please Enter The Correct Values';
      this.errorFlag = true ;
    }
  }

}
