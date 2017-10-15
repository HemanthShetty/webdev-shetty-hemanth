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
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
        }
      );
    this.websites = this.websiteService.findWebsitesByUser(this.userId);
    this.website = this.websiteService.findWebsiteById(this.websiteId);
    this.websiteDetails = new Website('', '' , '' , '' );
  }
  updateWebsite() {
    if (this.websiteForm.valid) {
      this.websiteDetails.name = this.websiteForm.value.websiteName;
      this.websiteDetails.description = this.websiteForm.value.websiteDescription;
      this.websiteService.updateWebsite(this.websiteId, this.websiteDetails);
      this.router.navigate(['/user', this.userId , 'website' ]);
    } else {
      this.errorMsg = 'Please Enter The Correct Values';
      this.errorFlag = true ;
    }
  }

  deleteWebsite() {
    this.websiteService.deleteWebsite(this.websiteId);
    this.router.navigate(['/user', this.userId , 'website' ]);
  }


}
