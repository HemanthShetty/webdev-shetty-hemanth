webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_23__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_24__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_25__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_26__services_widget_service_client__["a" /* WidgetService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/**
 * Created by sesha on 7/26/17.
 */



















var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__["a" /* TestComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:userId', component: __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:userId/website', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:uid/website/new', component: __WEBPACK_IMPORTED_MODULE_7__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:uid/website/:wid', component: __WEBPACK_IMPORTED_MODULE_8__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:uid/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:uid/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_10__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_11__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/heading', component: __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/youtube', component: __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/image', component: __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/html', component: __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>\n    Angular 4 MEAN stack app\n  </h1>\n\n\n  <h3>\n    App works\n  </h3>\n\n\n  <h4>\n    <a href=\"test\">Test MongoDB</a>\n  </h4>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-4 col-md-4 col-lg-4 hidden-xs\">\n        <p class=\"navbar-text pull-left\">\n          <a [routerLink]= \" [ '/user' , userId, 'website', websiteId,'page']\" class=\"glyphicon glyphicon-chevron-left\"></a>\n        </p>\n\n        <p class=\"navbar-text\">\n          <a href=\"#\"><b>Pages</b></a>\n        </p>\n\n        <p class=\"navbar-text pull-right\">\n          <a href=\"page-new.html\" class=\"glyphicon glyphicon-plus\"></a>\n        </p>\n      </div>\n      <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n        <p class=\"navbar-text pull-left hidden-sm hidden-md hidden-lg\">\n          <a href=\"page-list.html\" class=\"glyphicon glyphicon-chevron-left\"></a>\n        </p>\n\n        <div class=\"d-inline col-xs-6\">\n        <p class=\"navbar-text\">\n          <a href=\"#\"><b>Edit Page</b></a>\n        </p>\n        </div>\n\n        <div class=\"d-inline col-xs-4 pull-right\">\n        <p class=\"navbar-text pull-right\">\n          <a (click)=\"updatePage()\" class=\"glyphicon glyphicon-ok\"></a>\n        </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</nav>\n\n\n\n<div class=\"row container-fluid\">\n  <div class=\"hidden-xs col-sm-4 col-md-4 col-lg-4 pull-left\">\n    <div class=\"container-fluid\" *ngFor=\"let page of pages\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\"><a [routerLink]= \" [ '/user' , userId , 'website' , websiteId ,'page', page._id , 'widget']\"><b>{{page.name}}</b></a>\n          <a [routerLink]= \" [ '/user' , userId , 'website' , websiteId ,'page',page._id ]\"> <span class=\"pull-right glyphicon glyphicon-cog\"></span></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8 pull-right\">\n    <div class=\"container-fluid\">\n      <form #f=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"pageName\">Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"pageName\" name=\"pageName\" ngModel=\"\" #pageName=\"ngModel\"  [(ngModel)]=this.updatedPageDetails.name  required>\n          <span class=\"help-block\"\n                *ngIf=\"!pageName.valid && pageName.touched\">\n            Enter a valid website name!!\n          </span>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"pageDescription\">Description</label>\n          <textarea id=\"pageDescription\" name=\"pageDescription\" class=\"form-control\" rows=\"5\" [(ngModel)]=this.updatedPageDetails.description ngModel=\"\" #pageDescription=\"ngModel\" required></textarea>\n          <span class=\"help-block\"\n                *ngIf=\"!pageDescription.valid && pageDescription.touched\">\n            You need to enter some description for the website!!\n          </span>\n        </div>\n        <div *ngIf=\"errorFlag\"\n             class=\"alert alert-danger\">\n          {{errorMsg}}\n        </div>\n        <div class=\"form-group\">\n          <a class=\"btn btn-danger btn-block\"\n             (click)=\"deletePage()\" >Delete</a>\n        </div>\n      </form>\n    </div>\n  </div>\n\n</div>\n\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]= \" [ '/user' , userId ] \">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_page_model_client__ = __webpack_require__("../../../../../src/app/models/page.model.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageEditComponent = (function () {
    function PageEditComponent(pageService, activatedRoute, router) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pages = [{}];
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updatedPageDetails = new __WEBPACK_IMPORTED_MODULE_4__models_page_model_client__["a" /* Page */]('', '', '', '');
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
        this.pageService.findPageByWebsiteId(this.websiteId)
            .subscribe(function (data) {
            _this.pages = data;
        }, function (error) {
        });
        this.pageService.findPageById(this.pageId)
            .subscribe(function (data) {
            if (data == null) {
                _this.errorFlag = true;
                _this.errorMsg = 'Error Fetching Website details';
            }
            else {
                _this.updatedPageDetails = data;
            }
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'Error Fetching Website details';
        });
    };
    PageEditComponent.prototype.updatePage = function () {
        var _this = this;
        if (this.websiteForm.valid) {
            this.updatedPageDetails.name = this.websiteForm.value.pageName;
            this.updatedPageDetails.description = this.websiteForm.value.pageDescription;
            this.pageService.updatePage(this.pageId, this.updatedPageDetails)
                .subscribe(function (data) {
                if (data == null) {
                    _this.errorFlag = true;
                    _this.errorMsg = 'Error Updating Page details';
                }
                else {
                    _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page']);
                }
            }, function (error) {
                _this.errorFlag = true;
                _this.errorMsg = 'Error Updating Page details';
            });
        }
        else {
            this.errorMsg = 'Please Enter The Correct Values';
            this.errorFlag = true;
        }
    };
    PageEditComponent.prototype.deletePage = function () {
        var _this = this;
        this.pageService.deletePage(this.pageId)
            .subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page']);
            }
            else {
                _this.errorFlag = true;
                _this.errorMsg = 'Error Deleting Page';
            }
        }, function (error) {
        });
    };
    return PageEditComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], PageEditComponent.prototype, "websiteForm", void 0);
PageEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object])
], PageEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=page-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back mark-->\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink]= \" [ '/user' , userId, 'website']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Pages</b>\n      </a>\n    </p>\n\n    <!--plus mark-->\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]= \" [ '/user' , userId , 'website' , websiteId , 'page' ,'new']\" class=\"navbar-link\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n<div class=\"container-fluid\" *ngFor=\"let page of pages\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\"><a [routerLink]= \" [ '/user' , userId , 'website' , websiteId ,'page', page._id , 'widget']\"><b>{{page.name}}</b></a>\n      <a [routerLink]= \" [ '/user' , userId , 'website' , websiteId ,'page',page._id ]\"> <span class=\"pull-right glyphicon glyphicon-cog\"></span></a>\n    </li>\n  </ul>\n</div>\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]= \" [ '/user' , userId ] \">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageListComponent = (function () {
    function PageListComponent(pageService, activatedRoute, router) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pages = [{}];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
        this.pageService.findPageByWebsiteId(this.websiteId)
            .subscribe(function (data) {
            _this.pages = data;
        }, function (error) {
        });
    };
    return PageListComponent;
}());
PageListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], PageListComponent);

var _a, _b, _c;
//# sourceMappingURL=page-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-4 col-md-4 col-lg-4 hidden-xs\">\n        <p class=\"navbar-text pull-left\">\n          <a [routerLink]= \" [ '/user' , userId, 'website', websiteId,'page']\" class=\"glyphicon glyphicon-chevron-left\"></a>\n        </p>\n\n        <p class=\"navbar-text\">\n          <a href=\"#\"><b>Pages</b></a>\n        </p>\n\n        <p class=\"navbar-text pull-right\">\n          <a href=\"page-new.html\" class=\"glyphicon glyphicon-plus\"></a>\n        </p>\n      </div>\n      <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n        <p class=\"navbar-text pull-left hidden-sm hidden-md hidden-lg\">\n          <a href=\"page-list.html\" class=\"glyphicon glyphicon-chevron-left\"></a>\n        </p>\n\n        <p class=\"navbar-text\">\n          <a href=\"#\"><b>New Page</b></a>\n        </p>\n\n        <p class=\"navbar-text pull-right\">\n          <a (click)=\"createPage()\" class=\"glyphicon glyphicon-ok\"></a>\n        </p>\n      </div>\n    </div>\n  </div>\n</nav>\n\n\n\n<div class=\"row container-fluid\">\n  <div class=\"hidden-xs col-sm-4 col-md-4 col-lg-4 pull-left\">\n    <div class=\"container-fluid\" *ngFor=\"let page of pages\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\"><a [routerLink]= \" [ '/user' , userId , 'website' , websiteId ,'page', page._id , 'widget']\"><b>{{page.name}}</b></a>\n          <a [routerLink]= \" [ '/user' , userId , 'website' , websiteId ,'page',page._id ]\"> <span class=\"pull-right glyphicon glyphicon-cog\"></span></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8 pull-right\">\n    <div class=\"container-fluid\">\n      <form #f=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"pageName\">Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"pageName\" name=\"pageName\" ngModel=\"\" #pageName=\"ngModel\"  [(ngModel)]=this.pageDetails.name  required>\n          <span class=\"help-block\"\n                *ngIf=\"!pageName.valid && pageName.touched\">\n            Enter a valid website name!!\n          </span>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"pageDescription\">Description</label>\n          <textarea id=\"pageDescription\" name=\"pageDescription\" class=\"form-control\" rows=\"5\" [(ngModel)]=this.pageDetails.description ngModel=\"\" #pageDescription=\"ngModel\" required></textarea>\n          <span class=\"help-block\"\n                *ngIf=\"!pageDescription.valid && pageDescription.touched\">\n            You need to enter some description for the website!!\n          </span>\n        </div>\n        <div *ngIf=\"errorFlag\"\n             class=\"alert alert-danger\">\n          {{errorMsg}}\n        </div>\n      </form>\n    </div>\n  </div>\n\n</div>\n\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]= \" [ '/user' , userId ] \">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_page_model_client__ = __webpack_require__("../../../../../src/app/models/page.model.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageNewComponent = (function () {
    function PageNewComponent(pageService, activatedRoute, router) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pages = [{}];
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
        this.pageService.findPageByWebsiteId(this.websiteId)
            .subscribe(function (data) {
            _this.pages = data;
        }, function (error) {
        });
        this.pageDetails = new __WEBPACK_IMPORTED_MODULE_4__models_page_model_client__["a" /* Page */]('', '', '', '');
    };
    PageNewComponent.prototype.createPage = function () {
        var _this = this;
        if (this.websiteForm.valid) {
            this.pageDetails.name = this.websiteForm.value.pageName;
            this.pageDetails.description = this.websiteForm.value.pageDescription;
            this.pageDetails.websiteId = this.websiteId.toString();
            this.pageService.createPage(this.websiteId, this.pageDetails)
                .subscribe(function (data) {
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page']);
            }, function (error) {
                _this.errorMsg = 'Please Enter The Correct Values';
                _this.errorFlag = true;
            });
        }
        else {
            this.errorMsg = 'Please Enter The Correct Values';
            this.errorFlag = true;
        }
    };
    return PageNewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], PageNewComponent.prototype, "websiteForm", void 0);
PageNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object])
], PageNewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=page-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>Test</h1>\n\n  <div *ngIf=\"alertMessage\"\n       class=\"alert alert-danger\">\n    \"Failed to create\"\n  </div>\n\n  <div *ngIf=\"successMessage\"\n       class=\"alert alert-success\">\n    \"Succesfully created/deleted\"\n  </div>\n\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>Test Message</th>\n      <th>&nbsp;</th>\n    </tr>\n\n\n    <tr>\n      <td>\n        <input [(ngModel)]=\"message\"\n               placeholder=\"message\"\n               class=\"form-control\"/>\n      </td>\n\n\n      <td>\n        <button (click)=\"createMessage()\"\n                class=\"btn btn-primary pull-right\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </button>\n      </td>\n    </tr>\n    </thead>\n\n\n    <tbody>\n    <tr *ngFor=\"let message of messages\">\n      <td>\n        {{message.message}}\n      </td>\n      <td>\n        <button (click)=\"deleteMessage(message._id)\"\n                class=\"btn btn-danger pull-right\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Login</h1>\n  <input placeholder=\"username\"\n         [(ngModel)]=\"username\"\n         type=\"text\"\n         class=\"form-control\"/>\n  <input placeholder=\"password\"\n         [(ngModel)]=\"password\"\n         type=\"password\"\n         class=\"form-control\"/>\n  <div *ngIf=\"isInvalid\"\n       class=\"alert alert-danger\">\n    {{notificationMessage}}\n  </div>\n  <a class=\"btn btn-primary btn-block\" (click)=\"login(username,password)\">Login</a>\n  <a class=\"btn btn-success btn-block\" (click)=\"register()\">Register</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        this.userService.findUserByCredentials(this.username, this.password)
            .subscribe(function (data) {
            if (data == null) {
                _this.notificationMessage = 'Please Enter a Valid User Name and Password';
                _this.isInvalid = true;
            }
            else {
                _this.isInvalid = false;
                _this.router.navigate(['/user', data._id]);
            }
        }, function (error) {
            _this.notificationMessage = 'Please Enter a Valid User Name and Password';
            _this.isInvalid = true;
        });
    };
    LoginComponent.prototype.register = function () {
        this.router.navigate(['/register']);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a [routerLink]= \" [ '/user' , userId]\" class=\"navbar-brand thick\">\n        <b>Profile</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a  (click)=\"editProfile()\" class=\"navbar-link\" >\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<div class=\"container-fluid\">\n  <form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\" name=\"username\" class=\"form-control\" id=\"username\" [(ngModel)]=\"user.username\"  ngModel=\"\" required #username=\"ngModel\">\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n      </span>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email </label>\n      <input type=\"email\" name=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"user.email\" ngModel=\"\" email #email=\"ngModel\">\n      <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">\n      Please enter a valid email!\n      </span>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input type=\"text\" name=\"firstname\" class=\"form-control\" id=\"first-name\" [(ngModel)]=\"user.firstName\" ngModel=\"\" required #firstname=\"ngModel\">\n      <span class=\"help-block\" *ngIf=\"!firstname.valid && firstname.touched\">\n      Please enter a valid first name!\n      </span>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input type=\"text\" name=\"lastname\" class=\"form-control\" id=\"last-name\" [(ngModel)]=\"user.lastName\" ngModel=\"\" required #lastname=\"ngModel\">\n      <span class=\"help-block\" *ngIf=\"!lastname.valid && lastname.touched\">\n      Please enter a valid second name!\n      </span>\n    </div>\n\n    <div *ngIf=\"isInvalid\"\n         class=\"alert alert-danger\">\n      {{notificationMessage}}\n    </div>\n\n    <a class=\"btn btn-primary btn-block\"\n       [routerLink]= \" [ '/user' , userId, 'website']\">Websites</a>\n    <a class=\"btn btn-danger btn-block \"\n       routerLink=\"/login\" >Logout</a>\n\n  </form>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a href=\"profile.html\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(route, userService, router) {
        this.route = route;
        this.userService = userService;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user_model_client__["a" /* User */]('', '', '', '', '', '');
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { _this.userId = params['userId']; });
        this.userService.findUserById(this.userId)
            .subscribe(function (data) {
            _this.user = data;
            if (!_this.user) {
                _this.router.navigate(['/login']);
            }
        }, function (error) {
            _this.isInvalid = true;
            _this.notificationMessage = 'Error fetching users profile information';
        });
    };
    ProfileComponent.prototype.editProfile = function () {
        var _this = this;
        if (this.profileForm.valid) {
            this.user.username = this.profileForm.value.username;
            this.user.email = this.profileForm.value.email;
            this.user.firstName = this.profileForm.value.firstname;
            this.user.lastName = this.profileForm.value.lastname;
            this.userService.updateUser(this.userId, this.user).subscribe(function (data) {
                if (data == null) {
                    _this.isInvalid = true;
                    _this.notificationMessage = 'Error updating profile information';
                }
                else {
                    _this.isInvalid = false;
                }
            }, function (error) {
                _this.isInvalid = true;
                _this.notificationMessage = 'Error updating profile information';
            });
        }
        else {
            this.notificationMessage = 'Please Enter The Correct Values';
            this.isInvalid = true;
        }
    };
    return ProfileComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], ProfileComponent.prototype, "profileForm", void 0);
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form (ngSubmit)=\"createUser()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input name=\"userName\"\n             id=\"userName\"\n             ngModel=\"\"\n             required=\"\"\n             placeholder=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             #userName=\"ngModel\"/>\n      <span class=\"help-block\"\n            *ngIf=\"!userName.valid && userName.touched\">\n            Please enter username!\n      </span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input name=\"email\"\n             id=\"email\"\n             ngModel=\"\"\n             required=\"\"\n             placeholder=\"email\"\n             type=\"email\"\n             class=\"form-control\"\n             #email=\"ngModel\"\n             email/>\n      <span class=\"help-block\"\n            *ngIf=\"!email.valid && email.touched\">\n            Please enter email!\n          </span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name</label>\n      <input name=\"firstName\"\n             id=\"firstName\"\n             ngModel=\"\"\n             required=\"\"\n             placeholder=\"First Name\"\n             type=\"text\"\n             class=\"form-control\"\n             #firstName=\"ngModel\"/>\n      <span class=\"help-block\"\n            *ngIf=\"!firstName.valid && firstName.touched\">\n            Please enter firstName!\n          </span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"lastName\">Last Name</label>\n      <input name=\"lastName\"\n             id=\"lastName\"\n             ngModel=\"\"\n             required=\"\"\n             placeholder=\"Last Name\"\n             type=\"text\"\n             class=\"form-control\"\n             #lastName=\"ngModel\"/>\n      <span class=\"help-block\"\n            *ngIf=\"!lastName.valid && lastName.touched\">\n            Please enter lastName!\n          </span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input name=\"password\"\n             id=\"password\"\n             ngModel=\"\"\n             required=\"\"\n             placeholder=\"password\"\n             type=\"password\"\n             class=\"form-control\"\n             #password=\"ngModel\"/>\n      <span class=\"help-block\"\n            *ngIf=\"!password.valid && password.touched\">\n            Please enter a password!\n          </span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"verifyPassword\">Verify Password</label>\n      <input name=\"verifyPassword\"\n             id=\"verifyPassword\"\n             ngModel=\"\"\n             required\n             placeholder=\"verify password\"\n             type=\"password\"\n             class=\"form-control\"\n             #verifyPassword=\"ngModel\"/>\n      <span class=\"help-block\"\n            *ngIf=\"!verifyPassword.valid && verifyPassword.touched && isPasswordVerified()\">\n            Your passwords do not match!!\n          </span>\n    </div>\n    <div *ngIf=\"errorFlag\"\n         class=\"alert alert-danger\">\n      {{errorMsg}}\n    </div>\n    <div class=\"form-group\">\n      <button type=\"submit\" class=\"btn btn-primary btn-block\"\n              [disabled]=\"!f.valid\">\n        Register\n      </button>\n    </div>\n    <div class=\"form-group\">\n      <a class=\"btn btn-danger btn-block\"\n         routerLink=\"/login\">\n        Cancel\n      </a>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user_model_client__["a" /* User */]('', '', '', '', '', '');
    };
    RegisterComponent.prototype.createUser = function () {
        var _this = this;
        if (this.registrationForm.valid) {
            this.user.username = this.registrationForm.value.userName;
            this.user.password = this.registrationForm.value.password;
            this.user.firstName = this.registrationForm.value.firstName;
            this.user.lastName = this.registrationForm.value.lastName;
            this.user.email = this.registrationForm.value.email;
            this.userService.createUser(this.user)
                .subscribe(function (data) {
                _this.user = data;
                if (_this.user) {
                    _this.router.navigate(['/user', _this.user._id]);
                }
                else {
                    _this.errorFlag = true;
                    _this.errorMsg = 'Failed to create the user';
                }
            }, function (error) {
                _this.errorFlag = true;
                _this.errorMsg = 'Please enter the correct values';
            });
        }
        else {
            this.errorFlag = true;
            this.errorMsg = 'Please enter the correct values';
        }
    };
    RegisterComponent.prototype.isPasswordVerified = function () {
        return (this.registrationForm.value.password === this.registrationForm.value.verifyPassword);
    };
    return RegisterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "registrationForm", void 0);
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-4 col-md-4 col-lg-4 hidden-xs\">\n        <p class=\"navbar-text pull-left\">\n          <a [routerLink]= \" [ '/user' , userId, 'website']\" class=\"glyphicon glyphicon-chevron-left\"></a>\n        </p>\n\n        <p class=\"navbar-text\">\n          <a href=\"#\"><b>Websites</b></a>\n        </p>\n\n        <p class=\"navbar-text pull-right\">\n          <a href=\"website-list\" class=\"glyphicon glyphicon-plus\"></a>\n        </p>\n      </div>\n      <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n        <p class=\"navbar-text pull-left hidden-sm hidden-md hidden-lg\">\n          <a href=\"website-list\" class=\"glyphicon glyphicon-chevron-left\"></a>\n        </p>\n\n        <div class=\"d-inline col-xs-6\">\n        <p class=\"navbar-text\">\n          <a href=\"#\"><b>Edit Website</b></a>\n        </p>\n        </div>\n\n        <div class=\"d-inline col-xs-4 pull-right\">\n        <p class=\"navbar-text pull-right\">\n          <a (click)=\"updateWebsite()\" class=\"glyphicon glyphicon-ok\"></a>\n        </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</nav>\n\n\n\n<div class=\"row container-fluid\">\n  <div class=\"hidden-xs col-sm-4 col-md-4 col-lg-4 pull-left\">\n    <div class=\"container-fluid\" *ngFor=\"let site of websites\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\"><a [routerLink]= \" [ '/user' , userId , 'website' , site._id ,'page']\"><b>{{site.name}}</b></a>\n          <a [routerLink]= \" [ '/user' , userId , 'website' , site._id ]\"> <span class=\"pull-right glyphicon glyphicon-cog\"></span></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8 pull-right\">\n    <div class=\"container-fluid\">\n      <form #f=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"websiteName\">Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"websiteName\" name=\"websiteName\" ngModel=\"\" #websiteName=\"ngModel\"  [(ngModel)]=this.website.name  required>\n          <span class=\"help-block\"\n                *ngIf=\"!websiteName.valid && websiteName.touched\">\n            Enter a valid website name!!\n          </span>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"websiteDescription\">Description</label>\n          <textarea id=\"websiteDescription\"  class=\"form-control\" name=\"websiteDescription\" rows=\"5\"  #websiteDescription=\"ngModel\" [(ngModel)]=this.website.description required></textarea>\n          <span class=\"help-block\"\n                *ngIf=\"!websiteDescription.valid && websiteDescription.touched\">\n            You need to enter some description for the website!!\n          </span>\n        </div>\n        <div *ngIf=\"errorFlag\"\n             class=\"alert alert-danger\">\n          {{errorMsg}}\n        </div>\n        <div class=\"form-group\">\n          <a class=\"btn btn-danger btn-block\"\n             (click)=\"deleteWebsite()\" >Delete</a>\n        </div>\n      </form>\n    </div>\n  </div>\n\n</div>\n\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]= \" [ '/user' , userId ] \">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_website_model_client__ = __webpack_require__("../../../../../src/app/models/website.model.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebsiteEditComponent = (function () {
    function WebsiteEditComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.websites = [{}];
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.website = new __WEBPACK_IMPORTED_MODULE_4__models_website_model_client__["a" /* Website */]('', '', '', '');
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
        this.websiteService.findWebsitesByUser(this.userId)
            .subscribe(function (data) {
            _this.websites = data;
        }, function (error) {
        });
        this.websiteService.findWebsiteById(this.websiteId)
            .subscribe(function (data) {
            _this.website = data;
            if (data == null) {
                _this.errorFlag = true;
                _this.errorMsg = 'Error Fetching Website details';
            }
            else {
                _this.website = data;
            }
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'Error Fetching Website details';
        });
        this.websiteDetails = new __WEBPACK_IMPORTED_MODULE_4__models_website_model_client__["a" /* Website */]('', '', '', '');
    };
    WebsiteEditComponent.prototype.updateWebsite = function () {
        var _this = this;
        if (this.websiteForm.valid) {
            this.websiteDetails.name = this.websiteForm.value.websiteName;
            this.websiteDetails.description = this.websiteForm.value.websiteDescription;
            this.websiteService.updateWebsite(this.websiteId, this.websiteDetails)
                .subscribe(function (data) {
                if (data == null) {
                    _this.errorFlag = true;
                    _this.errorMsg = 'Error Updating Website details';
                }
                else {
                    _this.router.navigate(['/user', _this.userId, 'website']);
                }
            }, function (error) {
                _this.errorFlag = true;
                _this.errorMsg = 'Error Updating Website details';
            });
        }
        else {
            this.errorMsg = 'Please Enter The Correct Values';
            this.errorFlag = true;
        }
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        var _this = this;
        this.websiteService.deleteWebsite(this.websiteId)
            .subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['/user', _this.userId, 'website']);
            }
            else {
                _this.errorFlag = true;
                _this.errorMsg = 'Error Deleting Website';
            }
        }, function (error) {
        });
    };
    return WebsiteEditComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], WebsiteEditComponent.prototype, "websiteForm", void 0);
WebsiteEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object])
], WebsiteEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=website-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <!--back mark-->\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink]= \" [ '/user' , userId]\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Websites</b>\n      </a>\n    </p>\n\n    <!--plus mark-->\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]= \" [ '/user' , userId , 'website' , 'new']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n<div class=\"container-fluid\" *ngFor=\"let website of websites\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\"><a [routerLink]= \" [ '/user' , userId , 'website' , website._id ,'page']\"><b>{{website.name}}</b></a>\n      <a [routerLink]= \" [ '/user' , userId , 'website' , website._id ]\"> <span class=\"pull-right glyphicon glyphicon-cog\"></span></a>\n    </li>\n  </ul>\n</div>\n\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]= \" [ '/user' , userId ] \">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteListComponent = (function () {
    function WebsiteListComponent(websiteService, activatedRoute) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.websites = [{}];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
        });
        this.websiteService.findWebsitesByUser(this.userId)
            .subscribe(function (data) {
            _this.websites = data;
        }, function (error) {
        });
    };
    return WebsiteListComponent;
}());
WebsiteListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], WebsiteListComponent);

var _a, _b;
//# sourceMappingURL=website-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-4 col-md-4 col-lg-4 hidden-xs\">\n        <p class=\"navbar-text pull-left\">\n          <a [routerLink]= \" [ '/user' , userId, 'website']\" class=\"glyphicon glyphicon-chevron-left\"></a>\n        </p>\n\n        <p class=\"navbar-text\">\n          <a href=\"#\"><b>Websites</b></a>\n        </p>\n\n        <p class=\"navbar-text pull-right\">\n          <a href=\"website-new.html\" class=\"glyphicon glyphicon-plus\"></a>\n        </p>\n      </div>\n      <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n        <p class=\"navbar-text pull-left hidden-sm hidden-md hidden-lg\">\n          <a href=\"page-list.html\" class=\"glyphicon glyphicon-chevron-left\"></a>\n        </p>\n\n        <p class=\"navbar-text\">\n          <a href=\"#\"><b>New Website</b></a>\n        </p>\n\n        <p class=\"navbar-text pull-right\">\n          <a (click)=\"createWebsite()\" class=\"glyphicon glyphicon-ok\"></a>\n        </p>\n      </div>\n    </div>\n  </div>\n</nav>\n\n\n\n<div class=\"row container-fluid\">\n  <div class=\"hidden-xs col-sm-4 col-md-4 col-lg-4 pull-left\">\n    <div class=\"container-fluid\" *ngFor=\"let website of websites\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\"><a [routerLink]= \" [ '/user' , userId , 'website' , website._id ,'page']\"><b>{{website.name}}</b></a>\n          <a [routerLink]= \" [ '/user' , userId , 'website' , website._id ]\"> <span class=\"pull-right glyphicon glyphicon-cog\"></span></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8 pull-right\">\n    <div class=\"container-fluid\">\n      <form #f=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"websiteName\">Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"websiteName\" name=\"websiteName\" placeholder=\"Name\" ngModel=\"\" #websiteName=\"ngModel\" required>\n          <span class=\"help-block\"\n                *ngIf=\"!websiteName.valid && websiteName.touched\">\n            Enter a valid website name!!\n          </span>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"websiteDesc\">Description</label>\n          <textarea id=\"websiteDesc\" class=\"form-control\" name=\"websiteDescription\" rows=\"5\" placeholder=\"Description\" ngModel=\"\" #websiteDescription=\"ngModel\" required></textarea>\n          <span class=\"help-block\"\n                *ngIf=\"!websiteDescription.valid && websiteDescription.touched\">\n            You need to enter some description for the website!!\n          </span>\n        </div>\n        <div *ngIf=\"errorFlag\"\n             class=\"alert alert-danger\">\n          {{errorMsg}}\n        </div>\n      </form>\n    </div>\n  </div>\n\n</div>\n\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]= \" [ '/user' , userId ] \">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_website_model_client__ = __webpack_require__("../../../../../src/app/models/website.model.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebsiteNewComponent = (function () {
    function WebsiteNewComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.websites = [{}];
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.websiteService.findWebsitesByUser(this.userId)
            .subscribe(function (data) {
            _this.websites = data;
        }, function (error) {
        });
        this.websiteDetails = new __WEBPACK_IMPORTED_MODULE_4__models_website_model_client__["a" /* Website */]('', '', '', '');
    };
    WebsiteNewComponent.prototype.createWebsite = function () {
        var _this = this;
        if (this.websiteForm.valid) {
            this.websiteDetails.name = this.websiteForm.value.websiteName;
            this.websiteDetails.description = this.websiteForm.value.websiteDescription;
            this.websiteService.createWebsite(this.userId, this.websiteDetails)
                .subscribe(function (data) {
                _this.router.navigate(['/user', _this.userId, 'website']);
            }, function (error) {
                _this.errorMsg = 'Please Enter The Correct Values';
                _this.errorFlag = true;
            });
        }
        else {
            this.errorMsg = 'Please Enter The Correct Values';
            this.errorFlag = true;
        }
    };
    return WebsiteNewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], WebsiteNewComponent.prototype, "websiteForm", void 0);
WebsiteNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object])
], WebsiteNewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=website-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <!--back sign-->\n\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand \">\n        <b>Choose Widget</b>\n      </a>\n    </p>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid\">\n\n  <ul class=\"list-group\">\n    <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new', 'heading']\"\n       class=\"list-group-item\">\n      Header\n    </a>\n    <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new', 'image']\"\n       class=\"list-group-item\">\n      Image\n    </a>\n    <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new', 'youtube']\"\n       class=\"list-group-item\">\n      Youtube\n    </a>\n  </ul>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <p class=\"navbar-brand pull-right\">\n    <a [routerLink]=\"['/user', userId]\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetChooserComponent = (function () {
    function WidgetChooserComponent(activatedRoutes) {
        this.activatedRoutes = activatedRoutes;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
    };
    return WidgetChooserComponent;
}());
WidgetChooserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-chooser',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object])
], WidgetChooserComponent);

var _a;
//# sourceMappingURL=widget-chooser.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widget['widgetType']\">\n\n  <div *ngSwitchCase=\"'HEADING'\">\n    <app-widget-header></app-widget-header>\n  </div>\n\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n\n  <div *ngSwitchCase=\"'HTML'\">\n    <app-widget-html></app-widget-html>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetEditComponent = (function () {
    function WidgetEditComponent(widgetService, activatedRoutes) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.widget = _this.widgetService.findWidgetById(_this.widgetId);
        });
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], WidgetEditComponent);

var _a, _b;
//# sourceMappingURL=widget-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"widgetEdit;then editWidget else newWidget\"></div>\n<ng-template #editWidget>\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-right right-margin-fix\">\n        <a (click)=\"updateWidget()\"\n           [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-left left-margin-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>Widget Edit</b>\n        </a>\n      </p>\n    </div>\n  </nav>\n</ng-template>\n<ng-template #newWidget>\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-right right-margin-fix\">\n        <a (click)=\"createWidget()\"\n           [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-left left-margin-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>New Widget</b>\n        </a>\n      </p>\n    </div>\n  </nav>\n</ng-template>\n\n<div class=\"container-fluid\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"textHeader\">\n        Text\n      </label>\n      <input [(ngModel)]=\"textHeader\"\n             name=\"textHeader\"\n             required\n             type=\"text\"\n             class=\"form-control\"\n             id=\"textHeader\"\n             placeholder=\"Home Page\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"sizeHeader\">\n        Size\n      </label>\n      <input [(ngModel)]=\"sizeHeader\"\n             required\n             name=\"sizeHeader\"\n             type=\"number\"\n             class=\"form-control\"\n             id=\"sizeHeader\"\n             placeholder=\"3\">\n    </div>\n\n    <div class=\"form-group\">\n      <a (click)=\"deleteWidget()\"\n         class=\"btn btn-danger btn-block \"\n         [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\">\n        Delete\n      </a>\n    </div>\n  </form>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <p class=\"navbar-brand pull-right\">\n    <a [routerLink]=\"['/user', userId]\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetHeaderComponent = (function () {
    function WidgetHeaderComponent(widgetService, activatedRoutes) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.widget = {};
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.textHeader = 'Home Page';
            _this.sizeHeader = '2';
            _this.widgetId = params['wgid'];
            if (_this.widgetId) {
                _this.widget = _this.widgetService.findWidgetById(_this.widgetId);
                _this.widgetEdit = true;
                _this.textHeader = _this.widget['text'];
                _this.sizeHeader = _this.widget['size'];
            }
        });
    };
    WidgetHeaderComponent.prototype.createWidget = function () {
        this.widget['widgetType'] = 'HEADING';
        this.widget['text'] = this.textHeader;
        this.widget['size'] = this.sizeHeader;
        this.widgetService.createWidget(this.pageId, this.widget);
    };
    WidgetHeaderComponent.prototype.updateWidget = function () {
        this.widget['widgetType'] = 'HEADING';
        this.widget['text'] = this.textHeader;
        this.widget['size'] = this.sizeHeader;
        this.widgetService.updateWidget(this.widgetId, this.widget);
    };
    WidgetHeaderComponent.prototype.deleteWidget = function () {
        this.widgetService.deleteWidget(this.widgetId);
    };
    return WidgetHeaderComponent;
}());
WidgetHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], WidgetHeaderComponent);

var _a, _b;
//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"widgetEdit;then edit else new\"></div>\n<ng-template #edit>\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-right right-margin-fix\">\n        <a (click)=\"updateWidget()\"\n           [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-left left-margin-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>Widget Edit</b>\n        </a>\n      </p>\n    </div>\n  </nav>\n</ng-template>\n<ng-template #new>\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-right right-margin-fix\">\n        <a (click)=\"createWidget()\"\n           [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-left left-margin-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>New Widget</b>\n        </a>\n      </p>\n    </div>\n  </nav>\n</ng-template>\n\n<div class=\"container-fluid\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"textHtml\">\n        Text\n      </label>\n      <input [(ngModel)]=\"textHtml\"\n             name=\"textHtml\"\n             required\n             type=\"text\"\n             class=\"form-control\"\n             id=\"textHtml\"\n             placeholder=\"Home Page\">\n    </div>\n\n    <div class=\"form-group\">\n      <a (click)=\"deleteWidget()\"\n         class=\"btn btn-danger btn-block \"\n         [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\">\n        Delete\n      </a>\n    </div>\n  </form>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <p class=\"navbar-brand pull-right\">\n    <a [routerLink]=\"['/user', userId]\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetHtmlComponent = (function () {
    function WidgetHtmlComponent(widgetService, activatedRoutes) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.widget = {};
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.textHtml = '<p> Home Page</p>';
            _this.widgetId = params['wgid'];
            if (_this.widgetId) {
                _this.widget = _this.widgetService.findWidgetById(_this.widgetId);
                _this.widgetEdit = true;
                _this.textHtml = _this.widget['text'];
            }
        });
    };
    WidgetHtmlComponent.prototype.createWidget = function () {
        this.widget['widgetType'] = 'HTML';
        this.widget['text'] = this.textHtml;
        this.widgetService.createWidget(this.pageId, this.widget);
    };
    WidgetHtmlComponent.prototype.updateWidget = function () {
        this.widget['widgetType'] = 'HTML';
        this.widget['text'] = this.textHtml;
        this.widgetService.updateWidget(this.widgetId, this.widget);
    };
    WidgetHtmlComponent.prototype.deleteWidget = function () {
        this.widgetService.deleteWidget(this.widgetId);
    };
    return WidgetHtmlComponent;
}());
WidgetHtmlComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-html',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], WidgetHtmlComponent);

var _a, _b;
//# sourceMappingURL=widget-html.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"widgetEdit;then edit else new\"></div>\n<ng-template #edit>\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-right right-margin-fix\">\n        <a (click)=\"updateWidget()\"\n           [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-left left-margin-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>Widget Edit</b>\n        </a>\n      </p>\n    </div>\n  </nav>\n</ng-template>\n\n<ng-template #new>\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-right right-margin-fix\">\n        <a (click)=\"createWidget()\"\n           [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-left left-margin-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>New Widget</b>\n        </a>\n      </p>\n    </div>\n  </nav>\n</ng-template>\n\n<div class=\"container-fluid\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"nameImage\">\n        Name\n      </label>\n      <input [(ngModel)]=\"nameImage\"\n             required\n             name=\"nameImage\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"nameImage\"\n             placeholder=\"\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"textImage\">\n        Text\n      </label>\n      <input [(ngModel)]=\"textImage\"\n             required\n             name=\"textImage\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"textImage\"\n             placeholder=\"\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"urlImage\">\n        URL\n      </label>\n      <input [(ngModel)]=\"urlImage\"\n             required\n             name=\"urlImage\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"urlImage\"\n             placeholder=\"https://www.youtube.com/watch?v=ue80QwXMRHg\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"widthImage\">\n        Width\n      </label>\n      <input [(ngModel)]=\"widthImage\"\n             required\n             name=\"widthImage\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"widthImage\"\n             placeholder=\"\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"uploadImage\">\n        Upload\n      </label>\n      <input [(ngModel)]=\"uploadImage\"\n             required\n             name=\"uploadImage\"\n             type=\"file\"\n             class=\"form-control\"\n             id=\"uploadImage\"\n             value=\"100%\">\n    </div>\n\n    <div class=\"form-group\">\n      <button class=\"form-control btn btn-primary\">\n        Upload Image\n      </button>\n    </div>\n\n    <div class=\"form-group\">\n      <a (click)=\"deleteWidget()\"\n         class=\"btn btn-danger btn-block \"\n         [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\">\n        Delete\n      </a>\n    </div>\n  </form>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <p class=\"navbar-brand pull-right\">\n    <a [routerLink]=\"['/user', userId]\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetImageComponent = (function () {
    function WidgetImageComponent(widgetService, activatedRoutes) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.widget = {};
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            if (_this.widgetId) {
                _this.widget = _this.widgetService.findWidgetById(_this.widgetId);
                _this.widgetEdit = true;
                _this.nameImage = _this.widget['name'];
                _this.textImage = _this.widget['text'];
                _this.urlImage = _this.widget['url'];
                _this.widthImage = _this.widget['width'];
                _this.uploadImage = _this.widget['upload'];
            }
        });
    };
    WidgetImageComponent.prototype.createWidget = function () {
        this.widget['widgetType'] = 'IMAGE';
        this.widget['text'] = this.textImage;
        this.widget['url'] = this.urlImage;
        this.widget['width'] = this.widthImage;
        this.widget['upload'] = this.uploadImage;
        this.widget['name'] = this.nameImage;
        this.widgetService.createWidget(this.pageId, this.widget);
    };
    WidgetImageComponent.prototype.updateWidget = function () {
        this.widget['widgetType'] = 'IMAGE';
        this.widget['text'] = this.textImage;
        this.widget['url'] = this.urlImage;
        this.widget['width'] = this.widthImage;
        this.widget['upload'] = this.uploadImage;
        this.widget['name'] = this.nameImage;
        this.widgetService.updateWidget(this.widgetId, this.widget);
    };
    WidgetImageComponent.prototype.deleteWidget = function () {
        this.widgetService.deleteWidget(this.widgetId);
    };
    return WidgetImageComponent;
}());
WidgetImageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], WidgetImageComponent);

var _a, _b;
//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"widgetEdit;then editWidget else newWidget\"></div>\n<ng-template #editWidget>\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-right right-margin-fix\">\n        <a (click)=\"updateWidget()\"\n           [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-left left-margin-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>Widget Edit</b>\n        </a>\n      </p>\n    </div>\n  </nav>\n</ng-template>\n<ng-template #newWidget>\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-right right-margin-fix\">\n        <a (click)=\"createWidget()\"\n           [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-left left-margin-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>New Widget</b>\n        </a>\n      </p>\n    </div>\n  </nav>\n</ng-template>\n\n\n<div class=\"container-fluid\">\n  <form action=\"profile.html\" method=\"post\">\n    <div class=\"form-group\">\n      <label for=\"nameYoutube\">\n        Name\n      </label>\n      <input [(ngModel)]=\"nameYoutube\"\n             name=\"nameYoutube\"\n             required\n             type=\"text\"\n             class=\"form-control\"\n             id=\"nameYoutube\"\n             placeholder=\"\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"textYoutube\">\n        Text\n      </label>\n      <input [(ngModel)]=\"textYoutube\"\n             name=\"textYoutube\"\n             required\n             type=\"text\"\n             class=\"form-control\"\n             id=\"textYoutube\"\n             placeholder=\"\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"urlYoutube\">\n        URL\n      </label>\n      <input [(ngModel)]=\"urlYoutube\"\n             name=\"urlYoutube\"\n             required\n             type=\"text\"\n             class=\"form-control\"\n             id=\"urlYoutube\"\n             placeholder=\"https://www.youtube.com/watch?v=ue80QwXMRHg\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"widthYoutube\">\n        Width\n      </label>\n      <input [(ngModel)]=\"widthYoutube\"\n             name=\"widthYoutube\"\n             required\n             type=\"text\"\n             class=\"form-control\"\n             id=\"widthYoutube\"\n             placeholder=\"\">\n    </div>\n\n    <div class=\"form-group\">\n      <a (click)=\"deleteWidget()\"\n         class=\"btn btn-danger btn-block \"\n         [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\">\n        Delete\n      </a>\n    </div>\n  </form>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <p class=\"navbar-brand pull-right\">\n    <a [routerLink]=\"['/user', userId]\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetYoutubeComponent = (function () {
    function WidgetYoutubeComponent(widgetService, activatedRoutes) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.widget = {};
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            if (_this.widgetId) {
                _this.widget = _this.widgetService.findWidgetById(_this.widgetId);
                _this.widgetEdit = true;
                _this.nameYoutube = _this.widget['name'];
                _this.textYoutube = _this.widget['text'];
                _this.urlYoutube = _this.widget['url'];
                _this.widthYoutube = _this.widget['width'];
            }
        });
    };
    WidgetYoutubeComponent.prototype.createWidget = function () {
        this.widget['widgetType'] = 'YOUTUBE';
        this.widget['name'] = this.nameYoutube;
        this.widget['text'] = this.textYoutube;
        this.widget['url'] = this.urlYoutube;
        this.widget['width'] = this.widthYoutube;
        this.widgetService.createWidget(this.pageId, this.widget);
    };
    WidgetYoutubeComponent.prototype.updateWidget = function () {
        this.widget['widgetType'] = 'YOUTUBE';
        this.widget['name'] = this.nameYoutube;
        this.widget['text'] = this.textYoutube;
        this.widget['url'] = this.urlYoutube;
        this.widget['width'] = this.widthYoutube;
        this.widgetService.updateWidget(this.widgetId, this.widget);
    };
    WidgetYoutubeComponent.prototype.deleteWidget = function () {
        this.widgetService.deleteWidget(this.widgetId);
    };
    return WidgetYoutubeComponent;
}());
WidgetYoutubeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], WidgetYoutubeComponent);

var _a, _b;
//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Header-->\n<nav class=\"navbar navbar-default navbar-fixed-top widget-navbar-header\">\n  <div class=\"container-fluid\">\n\n\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink]= \" [ 'user',userId,'website',websiteId,'page']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n\n\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Widgets</b>\n      </a>\n    </p>\n\n\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new']\" class=\"glyphicon glyphicon-plus\"></a>\n    </p>\n\n\n\n\n  </div>\n</nav>\n<!--Header end-->\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <ul class=\"list-group\">\n      <div *ngFor=\"let widget of widgetList\">\n\n        <div [ngSwitch]=\"widget.widgetType\">\n\n          <div *ngSwitchCase=\"'HEADING'\">\n            <li class=\"list-group-item widget-list\">\n              <div class=\"container-fluid\">\n                <div [ngSwitch]=\"widget['size']\">\n                  <div *ngSwitchCase=\"1\">\n                    <h1>{{widget['text']}}</h1>\n                  </div>\n                  <div *ngSwitchCase=\"2\">\n                    <h2>{{widget['text']}}</h2>\n                  </div>\n                  <div *ngSwitchCase=\"3\">\n                    <h3>{{widget['text']}}</h3>\n                  </div>\n                  <div *ngSwitchCase=\"4\">\n                    <h4>{{widget['text']}}</h4>\n                  </div>\n                  <div *ngSwitchCase=\"5\">\n                    <h5>{{widget['text']}}</h5>\n                  </div>\n                  <div *ngSwitchCase=\"6\">\n                    <h6>{{widget['text']}}</h6>\n                  </div>\n                </div>\n                <div class=\"hsm-wdv-toolbar\">\n                  <a class=\"glyphicon glyphicon-align-justify widget-option pull-right color-black\"></a>\n                  <a class=\"glyphicon glyphicon-cog pull-right widget-option color-blue\"\n                     routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/1/{{widget['_id']}}\"></a>\n                </div>\n              </div>\n            </li>\n          </div>\n\n          <div *ngSwitchCase=\"'IMAGE'\">\n            <li class=\"list-group-item widget-list\">\n              <div class=\"container-fluid\">\n                <img class=\"image widget-image\" [src]=\"widget['url']\" [style.width]=\"widget['width'] + '%'\">\n                <div class=\"hsm-wdv-toolbar\">\n                  <a class=\"glyphicon glyphicon-align-justify widget-option pull-right color-black\"></a>\n                  <a class=\"glyphicon glyphicon-cog pull-right widget-option color-blue\"\n                     routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/2/{{widget['_id']}}\"></a>\n                </div>\n              </div>\n            </li>\n          </div>\n\n          <div *ngSwitchCase=\"'YOUTUBE'\">\n            <li class=\"list-group-item widget-list\">\n              <div class=\"container-fluid\">\n                <div class=\"hsm-wdv-toolbar\">\n                  <a class=\"glyphicon glyphicon-align-justify widget-option pull-right color-black\"></a>\n                  <a class=\"glyphicon glyphicon-cog pull-right widget-option color-blue\"\n                     routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/3/{{widget['_id']}}\"></a>\n                </div>\n                <iframe class=\"video-frame\" [style.width]=\"widget['width'] + '%'\" [src]=\"sanitizedURL(widget['url'])\" frameborder=\"0\" allowfullscreen></iframe>\n              </div>\n            </li>\n          </div>\n\n          <div *ngSwitchCase=\"'HTML'\">\n            <li class=\"list-group-item widget-list\">\n              <div class=\"container-fluid\">\n                <div class=\"hsm-wdv-toolbar\">\n                  <a class=\"glyphicon glyphicon-align-justify widget-option pull-right color-black\"></a>\n                  <a class=\"glyphicon glyphicon-cog pull-right widget-option color-blue\"\n                     routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/4/{{widget['_id']}}\"></a>\n                </div>\n                <div [innerHtml]=\"widget['text']\"></div>\n              </div>\n            </li>\n          </div>\n        </div>\n\n      </div>\n    </ul>\n  </div>\n</div>\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom widget-navbar-footer\">\n  <div class=\"container-fluid\">\n\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n<!--footer end-->\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetListComponent = (function () {
    function WidgetListComponent(widgetService, router, activatedRoute, sanitizer) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
        this.widgetList = this.widgetService.findWidgetsByPageId(this.pageId);
    };
    WidgetListComponent.prototype.sanitizedURL = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _d || Object])
], WidgetListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/page.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
var Page = (function () {
    function Page(_id, name, description, websiteId) {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.websiteId = websiteId;
    }
    return Page;
}());

//# sourceMappingURL=page.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(_id, userName, password, firstName, lastName, email) {
        this._id = _id;
        this.username = userName;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return User;
}());

//# sourceMappingURL=user.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/models/website.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Website; });
var Website = (function () {
    function Website(_id, name, description, developerId) {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.developerId = developerId;
    }
    return Website;
}());

//# sourceMappingURL=website.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var PageService = (function () {
    function PageService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl || 'localhost:3100';
    }
    PageService.prototype.createPage = function (websiteId, page) {
        return this._http.post(this.baseUrl + '/api/website/' + websiteId + '/page', page)
            .map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        return this._http.get(this.baseUrl + '/api/website/' + websiteId + '/page')
            .map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.findPageById = function (pageId) {
        return this._http.get(this.baseUrl + '/api/page/' + pageId)
            .map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.updatePage = function (pageId, page) {
        return this._http.put(this.baseUrl + '/api/page/' + pageId, page)
            .map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.deletePage = function (pageId) {
        return this._http.delete(this.baseUrl + '/api/page/' + pageId)
            .map(function (res) {
            return res.json();
        });
    };
    return PageService;
}());
PageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PageService);

var _a;
//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl || 'localhost:3100';
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById
        };
    }
    UserService.prototype.createUser = function (user) {
        return this._http.post(this.baseUrl + '/api/user', user)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        return this._http.get(this.baseUrl + '/api/user?username=' + username)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        return this._http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        return this._http.put(this.baseUrl + '/api/user/' + userId, user)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        return this._http.delete(this.baseUrl + '/api/user/' + userId)
            .map(function (res) {
            return res.json();
        });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteService = (function () {
    function WebsiteService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl || 'localhost:3100';
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        return this._http.post(this.baseUrl + '/api/user/' + userId + '/website', website)
            .map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId + '/website')
            .map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        return this._http.get(this.baseUrl + '/api/website/' + websiteId)
            .map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        return this._http.put(this.baseUrl + '/api/website/' + websiteId, website)
            .map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        return this._http.delete(this.baseUrl + '/api/website/' + websiteId)
            .map(function (res) {
            return res.json();
        });
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], WebsiteService);

var _a;
//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// injecting service into module
var WidgetService = (function () {
    function WidgetService() {
        this.widgets = [
            { '_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 2, 'text': 'GIZMODO' },
            { '_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum' },
            {
                '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%',
                'url': 'https://i.pinimg.com/originals/a2/2a/0a/a22a0a7e624943303b23cc326598c167.jpg'
            },
            { '_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>' },
            { '_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum' },
            {
                '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%',
                'url': 'https://www.youtube.com/embed/vlDzYIIOYmM'
            },
            { '_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>' }
        ];
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        widget['_id'] = Math.floor(Math.random() * 1000) + '';
        widget['pageId'] = pageId;
        this.widgets.push(widget);
        return widget;
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        return this.widgets.filter(function (widget) {
            return widget['pageId'] === pageId;
        });
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        return this.widgets.find(function (widget) {
            return widget['_id'] === widgetId;
        });
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]['_id'] === widgetId) {
                switch (widget['type']) {
                    case 'HEADING':
                        this.widgets[x]['size'] = widget['size'];
                        this.widgets[x]['text'] = widget['text'];
                        break;
                    case 'IMAGE':
                        this.widgets[x]['width'] = widget['width'];
                        this.widgets[x]['url'] = widget['url'];
                        break;
                    case 'YOUTUBE':
                        this.widgets[x]['width'] = widget['width'];
                        this.widgets[x]['url'] = widget['url'];
                        break;
                    case 'HTML':
                        this.widgets[x]['text'] = widget['text'];
                        break;
                }
                this.widgets[x]['_id'] = widgetId;
                return this.widgets[x];
            }
        }
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]['_id'] === widgetId) {
                delete this.widgets[x];
            }
        }
    };
    return WidgetService;
}());
WidgetService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WidgetService);

//# sourceMappingURL=widget.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    //baseUrl : 'http://localhost:3100'
    baseUrl: 'https://webdev-shetty-hemanth.herokuapp.com'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map