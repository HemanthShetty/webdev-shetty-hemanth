import {Component, OnInit, ViewChild} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Website} from '../../../models/website.model.client';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  userId: String;
  websites = [{}];
  websiteDetails: Website;
  errorFlag: boolean;
  errorMsg: String;
  @ViewChild('f') websiteForm: NgForm;

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
        }
      );

    this.websiteService.findWebsitesByUser(this.userId)
      .subscribe(
        (data: any) => {
          this.websites = data;
        },
        (error: any) => {
        }
      );
    this.websiteDetails = new Website('', '' , '' , '' );
  }
  createWebsite() {
    if (this.websiteForm.valid) {
      this.websiteDetails.name = this.websiteForm.value.websiteName;
      this.websiteDetails.description = this.websiteForm.value.websiteDescription;
      this.websiteService.createWebsite(this.userId, this.websiteDetails)
        .subscribe(
          (data: any) => {
            this.router.navigate(['/user', this.userId , 'website' ]);
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
