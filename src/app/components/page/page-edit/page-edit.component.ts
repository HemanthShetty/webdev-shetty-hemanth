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
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
        }
      );
    this.pages = this.pageService.findPageByWebsiteId(this.websiteId);
    this.updatedPageDetails = this.pageService.findPageById(this.pageId);
  }
  updatePage() {
    if (this.websiteForm.valid) {
      this.updatedPageDetails.name = this.websiteForm.value.pageName;
      this.updatedPageDetails.description = this.websiteForm.value.pageDescription;
      this.pageService.updatePage(this.pageId, this.updatedPageDetails);
      this.router.navigate(['/user', this.userId , 'website' , this.websiteId , 'page']);
    } else {
      this.errorMsg = 'Please Enter The Correct Values';
      this.errorFlag = true ;
    }
  }

  deletePage() {
    this.pageService.deletePage(this.pageId);
    this.router.navigate(['/user', this.userId , 'website' , this.websiteId , 'page']);
  }


}
