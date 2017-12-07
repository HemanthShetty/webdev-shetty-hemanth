import {Component, OnInit, ViewChild} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Website} from '../../../models/website.model.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  userId: String;
  websiteId: String;
  websites = [{}];
  websiteDetails: Website;
  errorFlag: boolean;
  errorMsg: String;
  website: Website;
  @ViewChild('f') websiteForm: NgForm;

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.website = new Website('', '' , '' , '' );
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
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
    this.websiteService.findWebsiteById(this.websiteId)
      .subscribe(
        (data: any) => {
          this.website = data;
          if (data == null) {
            this.errorFlag = true;
            this.errorMsg = 'Error Fetching Website details' ;
          }else {
            this.website = data;
          }
        },
        (error: any) => {
          this.errorFlag = true;
          this.errorMsg = 'Error Fetching Website details' ;
        }
      );
    this.websiteDetails = new Website('', '' , '' , '' );
  }

  updateWebsite() {
    if (this.websiteForm.valid) {
      this.websiteDetails.name = this.websiteForm.value.websiteName;
      this.websiteDetails.description = this.websiteForm.value.websiteDescription;
      this.websiteDetails.developerId = this.userId.toString();
      this.websiteService.updateWebsite(this.websiteId, this.websiteDetails)
        .subscribe(
          (data: any) => {
            if (data == null) {
              this.errorFlag = true;
              this.errorMsg = 'Error Updating Website details' ;
            } else {
              this.router.navigate(['/user', this.userId , 'website' ]);
            }
          },
          (error: any) => {
            this.errorFlag = true;
            this.errorMsg = 'Error Updating Website details' ;
          }
        );
    } else {
      this.errorMsg = 'Please Enter The Correct Values';
      this.errorFlag = true ;
    }
  }

  deleteWebsite() {
    this.websiteService.deleteWebsite(this.websiteId)
      .subscribe(
        (data: any) => {
          if (data.success) {
            this.router.navigate(['/user', this.userId , 'website' ]);
          } else {
            this.errorFlag = true;
            this.errorMsg = 'Error Deleting Website' ;
          }
        },
        (error: any) => {
        }
      );
  }


}
