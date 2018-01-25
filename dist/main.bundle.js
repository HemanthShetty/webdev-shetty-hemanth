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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__directives_sortable_directive__ = __webpack_require__("../../../../../src/app/directives/sortable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_personal_personal_component__ = __webpack_require__("../../../../../src/app/components/personal/personal.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_35__components_personal_personal_component__["a" /* PersonalComponent */],
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
            __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_34__directives_sortable_directive__["a" /* SortableDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_28_ngx_quill_editor__["a" /* QuillEditorModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_23__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_24__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_25__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_26__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_31__services_flickr_service_client__["a" /* FlickrService */], __WEBPACK_IMPORTED_MODULE_32__services_shared_service_client__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_33__services_auth_guard_service__["a" /* AuthGuard */]],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_personal_personal_component__ = __webpack_require__("../../../../../src/app/components/personal/personal.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/**
 * Created by sesha on 7/26/17.
 */























var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__["a" /* TestComponent */] },
    { path: 'personal', component: __WEBPACK_IMPORTED_MODULE_22__components_personal_personal_component__["a" /* PersonalComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
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
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/html', component: __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/text', component: __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/image/search', component: __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */] },
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
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
            this.updatedPageDetails.websiteId = this.websiteId.toString();
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
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], PageEditComponent.prototype, "websiteForm", void 0);
PageEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _d || Object])
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object])
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

module.exports = "<!-- Header -->\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-4 col-md-4 col-lg-4 hidden-xs\">\n        <p class=\"navbar-text pull-left\">\n          <a [routerLink]= \" [ '/user' , userId, 'website', websiteId,'page']\" class=\"glyphicon glyphicon-chevron-left\"></a>\n        </p>\n\n        <p class=\"navbar-text\">\n          <a href=\"#\"><b>Pages</b></a>\n        </p>\n\n        <p class=\"navbar-text pull-right\">\n          <a href=\"page-new.html\" class=\"glyphicon glyphicon-plus\"></a>\n        </p>\n      </div>\n      <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n        <p class=\"navbar-text pull-left hidden-sm hidden-md hidden-lg\">\n          <a href=\"page-list.html\" class=\"glyphicon glyphicon-chevron-left\"></a>\n        </p>\n\n        <div class=\"d-inline col-xs-6\">\n        <p class=\"navbar-text\">\n          <a href=\"#\"><b>New Page</b></a>\n        </p>\n        </div>\n\n        <div class=\"d-inline col-xs-4 pull-right\">\n        <p class=\"navbar-text pull-right\">\n          <a (click)=\"createPage()\" class=\"glyphicon glyphicon-ok\"></a>\n        </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</nav>\n\n\n\n<div class=\"row container-fluid\">\n  <div class=\"hidden-xs col-sm-4 col-md-4 col-lg-4 pull-left\">\n    <div class=\"container-fluid\" *ngFor=\"let page of pages\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\"><a [routerLink]= \" [ '/user' , userId , 'website' , websiteId ,'page', page._id , 'widget']\"><b>{{page.name}}</b></a>\n          <a [routerLink]= \" [ '/user' , userId , 'website' , websiteId ,'page',page._id ]\"> <span class=\"pull-right glyphicon glyphicon-cog\"></span></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8 pull-right\">\n    <div class=\"container-fluid\">\n      <form #f=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"pageName\">Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"pageName\" name=\"pageName\" ngModel=\"\" #pageName=\"ngModel\"  [(ngModel)]=this.pageDetails.name  required>\n          <span class=\"help-block\"\n                *ngIf=\"!pageName.valid && pageName.touched\">\n            Enter a valid website name!!\n          </span>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"pageDescription\">Description</label>\n          <textarea id=\"pageDescription\" name=\"pageDescription\" class=\"form-control\" rows=\"5\" [(ngModel)]=this.pageDetails.description ngModel=\"\" #pageDescription=\"ngModel\" required></textarea>\n          <span class=\"help-block\"\n                *ngIf=\"!pageDescription.valid && pageDescription.touched\">\n            You need to enter some description for the website!!\n          </span>\n        </div>\n        <div *ngIf=\"errorFlag\"\n             class=\"alert alert-danger\">\n          {{errorMsg}}\n        </div>\n      </form>\n    </div>\n  </div>\n\n</div>\n\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]= \" [ '/user' , userId ] \">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

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
            delete this.pageDetails._id;
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
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], PageNewComponent.prototype, "websiteForm", void 0);
PageNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _d || Object])
], PageNewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=page-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/personal/personal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nbody {\n  font-family: 'Lato', arial, sans-serif;\n  color: #434343;\n  background: #DAE3E7;\n  font-size: 16px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 700;\n  color: #778492;\n}\na {\n  color: #3AAA64;\n  -webkit-transition: all 0.4s ease-in-out;\n  -moz-transition: all 0.4s ease-in-out;\n  -ms-transition: all 0.4s ease-in-out;\n  -o-transition: all 0.4s ease-in-out;\n}\na:hover {\n  text-decoration: underline;\n  color: #5f6b77;\n  color: #2d844e;\n}\na:focus {\n  text-decoration: none;\n}\n.btn,\na.btn {\n  -webkit-transition: all 0.4s ease-in-out;\n  -moz-transition: all 0.4s ease-in-out;\n  -ms-transition: all 0.4s ease-in-out;\n  -o-transition: all 0.4s ease-in-out;\n  font-family: 'Montserrat', arial, sans-serif;\n  padding: 8px 16px;\n  font-weight: bold;\n}\n.btn .fa,\na.btn .fa {\n  margin-right: 5px;\n}\n.btn:focus,\na.btn:focus {\n  color: #fff;\n}\na.btn-cta-primary,\n.btn-cta-primary {\n  background: #54ba4e;\n  border: 1px solid #54ba4e;\n  color: #fff;\n  font-weight: 600;\n  text-transform: uppercase;\n}\na.btn-cta-primary:hover,\n.btn-cta-primary:hover {\n  background: #49ac43;\n  border: 1px solid #49ac43;\n  color: #fff;\n}\na.btn-cta-secondary,\n.btn-cta-secondary {\n  background: #479FC8;\n  border: 1px solid #479FC8;\n  color: #fff;\n  font-weight: 600;\n  text-transform: uppercase;\n}\na.btn-cta-secondary:hover,\n.btn-cta-secondary:hover {\n  background: #3893bd;\n  border: 1px solid #3893bd;\n  color: #fff;\n}\n.text-highlight {\n  color: #32383e;\n}\n.label-theme {\n  background: #3AAA64;\n  font-size: 12px;\n}\na.dotted-link {\n  border-bottom: 1px dotted #778492;\n  color: #778492;\n}\na.dotted-link:hover {\n  text-decoration: none;\n  color: #49515a;\n}\n/*\niframe {\n\n    .header {\n        padding: 0;\n    }\n}\n\n.iframe-wrapper {\n    overflow: auto;\n    -webkit-overflow-scrolling:touch;\n}\n*/\n/* ======= Header ======= */\n.hsm-profile\n{\n  border-radius: 50%;\n  max-width:10%;\n  max-height:10%;\n  margin-right: 10px;\n}\n.hsm-portfolio-header\n{\n  padding: 30px 0;\n  background: #f5f5f5;\n}\n.header {\n  padding: 30px 0;\n  background: #f5f5f5;\n  border-top: 10px solid #778492;\n}\n.header .btn {\n  margin-top: 60px;\n  font-weight: bold;\n}\n.header .profile-image {\n  margin-right: 30px;\n}\n.hsm-portfolio-header .profile-content .name {\n  color: #49515a;\n  font-size: 38px;\n  margin-bottom: 5px;\n  margin-top: 30px;\n}\n.hsm-portfolio-header .profile-content .desc {\n  color: #778492;\n  font-family: \"Lato\", arial, sans-serif;\n  font-weight: 400;\n  font-size: 24px;\n  margin-top: 0;\n  margin-bottom: 15px;\n}\n.header .profile-content .social a {\n  background: #b0b7bf;\n  width: 36px;\n  height: 36px;\n  display: inline-block;\n  border-radius: 50%;\n  background-clip: padding-box;\n  color: #fff;\n  text-align: center;\n}\n.header .profile-content .social a:hover {\n  background: #778492;\n}\n.header .profile-content .social a .fa {\n  font-size: 20px;\n  padding-top: 8px;\n}\n/* ======= Sections======= */\n.sections-wrapper {\n  padding-top: 60px;\n  padding-bottom: 60px;\n}\n.section {\n  margin-bottom: 30px;\n}\n.section .section-inner {\n  background: #fff;\n  padding: 30px;\n}\n.section .heading {\n  margin-top: 0;\n  margin-bottom: 30px;\n  color: #545e69;\n  font-size: 24px;\n}\n.section .content .more-link .fa {\n  margin-right: 5px;\n  font-size: 14px;\n}\n/* About Section */\n/* Latest Section */\n.latest .item {\n  margin-bottom: 30px;\n}\n.latest .item .title {\n  font-size: 18px;\n  margin-top: 0;\n}\n.latest .item .title .label {\n  margin-left: 5px;\n  font-size: 12px;\n}\n.latest .item .title a {\n  color: #778492;\n}\n.latest .item .title a:hover {\n  color: #5f6b77;\n}\n.latest .item .project-image:hover {\n  -webkit-opacity: 0.8;\n  -moz-opacity: 0.8;\n  opacity: 0.8;\n}\n.latest .divider {\n  margin-bottom: 60px;\n}\n.latest .featured {\n  margin-bottom: 60px;\n}\n.latest .featured .title {\n  margin-bottom: 5px;\n  font-size: 20px;\n}\n.latest .featured .summary {\n  margin-bottom: 30px;\n  color: #778492;\n}\n.latest .featured img {\n  margin-bottom: 30px;\n}\n.latest .featured .desc {\n  margin-bottom: 30px;\n}\n.latest .featured-image {\n  position: relative;\n}\n.latest .featured-image .text {\n  background: #3AAA64;\n  color: #fff;\n}\n.latest .featured-image .ribbon {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  width: 110px;\n  height: 110px;\n  overflow: hidden;\n}\n.latest .featured-image .ribbon .text {\n  font-family: 'Montserrat', sans-serif;\n  position: relative;\n  left: -8px;\n  top: 18px;\n  width: 158px;\n  padding: 10px 10px;\n  font-size: 15px;\n  font-weight: bold;\n  text-align: center;\n  text-transform: uppercase;\n  color: #fff;\n  background-color: #479FC8;\n  -webkit-transform: rotate(45deg) translate3d(0, 0, 0);\n  -moz-transform: rotate(45deg) translate3d(0, 0, 0);\n  -ms-transform: rotate(45deg) translate3d(0, 0, 0);\n  -o-transform: rotate(45deg) translate3d(0, 0, 0);\n}\n.latest .featured-image .ribbon .text:before,\n.latest .featured-image .ribbon .text:after {\n  content: '';\n  position: absolute;\n  bottom: -5px;\n  border-top: 5px solid #276582;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n}\n.latest .featured-image .ribbon .text:before {\n  left: 0;\n}\n.latest .featured-image .ribbon .text:after {\n  right: 0;\n}\n/* Projects Section */\n.projects .item {\n  margin-bottom: 30px;\n}\n.projects .item .title {\n  font-size: 16px;\n  margin-top: 0;\n  margin-bottom: 5px;\n  line-height: 1.5;\n}\n.projects .item .title a {\n  color: #778492;\n}\n.projects .item .title a:hover {\n  color: #5f6b77;\n}\n/* Work Section */\n.experience .item {\n  margin-bottom: 30px;\n}\n.experience .item .title {\n  font-size: 16px;\n  margin-top: 0;\n  margin-bottom: 5px;\n  line-height: 1.5;\n}\n.experience .item .title .place {\n  color: #999;\n  font-weight: normal;\n}\n.experience .item .title .place a {\n  color: #999;\n}\n.experience .item .title .place a:hover {\n  color: #666666;\n}\n.experience .item .title .year {\n  color: #999;\n  font-weight: normal;\n}\n/* Git section */\n.github-graph {\n  margin-bottom: 30px;\n}\n.github-graph .js-calendar-graph-svg {\n  max-width: 100%;\n}\n.ghfeed {\n  height: 600px;\n}\n.ghfeed,\n.ghfeed *,\n.ghfeed *:before,\n.ghfeed *:after {\n  box-sizing: content-box;\n}\n/* Info Section */\n.info .fa {\n  margin-right: 15px;\n  color: #ccd1d6;\n}\n.info .fa.fa-envelope-o {\n  font-size: 14px;\n}\n.info ul {\n  margin-bottom: 0;\n}\n.info li {\n  margin-bottom: 15px;\n}\n.info li:last-child {\n  margin-bottom: 0;\n}\n/* Skills Section */\n.skills .intro {\n  margin-bottom: 30px;\n}\n.skills .skillset .item {\n  margin-bottom: 30px;\n}\n.skills .skillset .level-title {\n  font-size: 16px;\n  position: relative;\n  margin-top: 0;\n  margin-bottom: 10;\n}\n.skills .skillset .level-title .level-label {\n  color: #ccd1d6;\n  font-size: 14px;\n  font-weight: 400;\n  font-family: \"Lato\", arial, sans-serif;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.skills .skillset .level-bar {\n  height: 15px;\n  background: #e8e8e8;\n}\n.skills .skillset .level-bar-inner {\n  height: 15px;\n  background: #66cb8c;\n}\n/* Testimonials section */\n.testimonials .item {\n  margin-bottom: 30px;\n}\n.testimonials .item:last-child {\n  margin-bottom: 0;\n}\n.testimonials .item .quote {\n  color: #666;\n  font-size: 16px;\n  border-left-color: #9fdeb7;\n  margin-bottom: 15px;\n}\n.testimonials .item .quote .fa {\n  color: #79d19a;\n  margin-right: 15px;\n}\n.testimonials .item .source {\n  font-size: 14px;\n  padding-left: 30px;\n  font-weight: 500;\n}\n.testimonials .item .source .name {\n  color: #939ea9;\n  font-weight: 600;\n}\n.testimonials .item .source .title {\n  color: #999;\n}\n/* Education section */\n.education .item {\n  margin-bottom: 30px;\n}\n.education .item:last-child {\n  margin-bottom: 0;\n}\n.education .item .title {\n  font-size: 16px;\n  margin-top: 0;\n}\n.education .item .university {\n  font-family: \"Lato\", arial, sans-serif;\n  font-size: 13px;\n  color: #999;\n  font-weight: 600;\n  padding-left: 25px;\n}\n.education .item .university .year {\n  color: #b0b7bf;\n  font-weight: 500;\n}\n/* Language Section */\n.languages .item {\n  margin-bottom: 15px;\n}\n.languages .item .title {\n  color: #778492;\n}\n.languages .item .level {\n  color: #999;\n}\n.languages .item:last-child {\n  margin-bottom: 0;\n}\n.languages .item .fa {\n  color: #79d19a;\n}\n/* Blog Section */\n.blog .item {\n  margin-bottom: 30px;\n}\n.blog .item .title {\n  font-size: 18px;\n  line-height: 1.3;\n}\n.blog .item .title a {\n  color: #778492;\n}\n.blog .item .title a:hover {\n  color: #5f6b77;\n}\n.blog .item:last-child {\n  margin-bottom: 0;\n}\n/* List section */\n.list ul li {\n  margin-bottom: 10px;\n}\n.list ul li .fa {\n  margin-right: 5px;\n}\n.list ul li a {\n  color: #778492;\n}\n.list ul li a:hover {\n  color: #49515a;\n}\n/* Credits */\n.credits ul li {\n  margin-bottom: 10px;\n}\n.credits ul li .fa {\n  margin-right: 5px;\n}\n.credits ul li a {\n  color: #778492;\n}\n.credits ul li a:hover {\n  color: #49515a;\n}\n.credits .btn {\n  margin-bottom: 15px;\n}\n/* ======= Footer ======= */\n.footer {\n  background: #32383e;\n  color: #fff;\n  padding: 10px 0;\n}\n.footer .copyright {\n  line-height: 1.6;\n  color: #a1aab4;\n  font-size: 14px;\n}\n.footer a {\n  color: #fff;\n}\n.footer .fa-heart {\n  color: #fb866a;\n}\n/* Extra small devices (phones, less than 768px) */\n@media (max-width: 767px) {\n  .header {\n    text-align: center;\n  }\n  .header .profile-image {\n    float: none !important;\n    margin: 0 auto;\n  }\n  .header .profile-content {\n    float: none !important;\n    text-align: center;\n  }\n  .header .btn {\n    margin-top: 30px;\n    float: none !important;\n  }\n  .project-image {\n    margin-bottom: 15px;\n  }\n}\n/* Small devices (tablets, 768px and up) */\n/* Medium devices (desktops, 992px and up) */\n/* Large devices (large desktops, 1200px and up) */\n/* Ex-Large devices (large desktops, 1200px and up) */\n@media (min-width: 1400px) {\n  .container {\n    width: 1360px;\n  }\n}\n/*\n * Template Name: Developer - Responsive Website Template for Developers\n * Version: 1.5\n * Author: Xiaoying Riley\n * Twitter: @3rdwave_themes\n * License: Creative Commons Attribution 3.0 License\n * Website: http://themes.3rdwavemedia.com/\n*/\n/* ======= Base ======= */\nbody {\n  font-family: 'Lato', arial, sans-serif;\n  color: #434343;\n  background: #DAE3E7;\n  font-size: 16px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 700;\n  color: #778492;\n}\na {\n  color: #3AAA64;\n  -webkit-transition: all 0.4s ease-in-out;\n  -moz-transition: all 0.4s ease-in-out;\n  -ms-transition: all 0.4s ease-in-out;\n  -o-transition: all 0.4s ease-in-out;\n}\na:hover {\n  text-decoration: underline;\n  color: #5f6b77;\n  color: #2d844e;\n}\na:focus {\n  text-decoration: none;\n}\n.btn,\na.btn {\n  -webkit-transition: all 0.4s ease-in-out;\n  -moz-transition: all 0.4s ease-in-out;\n  -ms-transition: all 0.4s ease-in-out;\n  -o-transition: all 0.4s ease-in-out;\n  font-family: 'Montserrat', arial, sans-serif;\n  padding: 8px 16px;\n  font-weight: bold;\n}\n.btn .fa,\na.btn .fa {\n  margin-right: 5px;\n}\n.btn:focus,\na.btn:focus {\n  color: #fff;\n}\na.btn-cta-primary,\n.btn-cta-primary {\n  background: #54ba4e;\n  border: 1px solid #54ba4e;\n  color: #fff;\n  font-weight: 600;\n  text-transform: uppercase;\n}\na.btn-cta-primary:hover,\n.btn-cta-primary:hover {\n  background: #49ac43;\n  border: 1px solid #49ac43;\n  color: #fff;\n}\na.btn-cta-secondary,\n.btn-cta-secondary {\n  background: #479FC8;\n  border: 1px solid #479FC8;\n  color: #fff;\n  font-weight: 600;\n  text-transform: uppercase;\n}\na.btn-cta-secondary:hover,\n.btn-cta-secondary:hover {\n  background: #3893bd;\n  border: 1px solid #3893bd;\n  color: #fff;\n}\n.text-highlight {\n  color: #32383e;\n}\n.label-theme {\n  background: #3AAA64;\n  font-size: 12px;\n}\na.dotted-link {\n  border-bottom: 1px dotted #778492;\n  color: #778492;\n}\na.dotted-link:hover {\n  text-decoration: none;\n  color: #49515a;\n}\n/*\niframe {\n\n    .header {\n        padding: 0;\n    }\n}\n\n.iframe-wrapper {\n    overflow: auto;\n    -webkit-overflow-scrolling:touch;\n}\n*/\n/* ======= Header ======= */\n.header {\n  padding: 30px 0;\n  background: #f5f5f5;\n  border-top: 10px solid #778492;\n}\n.header .btn {\n  margin-top: 60px;\n  font-weight: bold;\n}\n.header .profile-image {\n  margin-right: 30px;\n}\n.header .profile-content .name {\n  color: #49515a;\n  font-size: 38px;\n  margin-bottom: 5px;\n  margin-top: 30px;\n}\n.header .profile-content .desc {\n  color: #778492;\n  font-family: \"Lato\", arial, sans-serif;\n  font-weight: 400;\n  font-size: 24px;\n  margin-top: 0;\n  margin-bottom: 15px;\n}\n.header .profile-content .social a {\n  background: #b0b7bf;\n  width: 36px;\n  height: 36px;\n  display: inline-block;\n  border-radius: 50%;\n  background-clip: padding-box;\n  color: #fff;\n  text-align: center;\n}\n.header .profile-content .social a:hover {\n  background: #778492;\n}\n.header .profile-content .social a .fa {\n  font-size: 20px;\n  padding-top: 8px;\n}\n/* ======= Sections======= */\n.sections-wrapper {\n  padding-top: 60px;\n  padding-bottom: 60px;\n}\n.section {\n  margin-bottom: 30px;\n}\n.section .section-inner {\n  background: #fff;\n  padding: 30px;\n}\n.section .heading {\n  margin-top: 0;\n  margin-bottom: 30px;\n  color: #545e69;\n  font-size: 24px;\n}\n.section .content .more-link .fa {\n  margin-right: 5px;\n  font-size: 14px;\n}\n/* About Section */\n/* Latest Section */\n.latest .item {\n  margin-bottom: 30px;\n}\n.latest .item .title {\n  font-size: 18px;\n  margin-top: 0;\n}\n.latest .item .title .label {\n  margin-left: 5px;\n  font-size: 12px;\n}\n.latest .item .title a {\n  color: #778492;\n}\n.latest .item .title a:hover {\n  color: #5f6b77;\n}\n.latest .item .project-image:hover {\n  -webkit-opacity: 0.8;\n  -moz-opacity: 0.8;\n  opacity: 0.8;\n}\n.latest .divider {\n  margin-bottom: 60px;\n}\n.latest .featured {\n  margin-bottom: 60px;\n}\n.latest .featured .title {\n  margin-bottom: 5px;\n  font-size: 20px;\n}\n.latest .featured .summary {\n  margin-bottom: 30px;\n  color: #778492;\n}\n.latest .featured img {\n  margin-bottom: 30px;\n}\n.latest .featured .desc {\n  margin-bottom: 30px;\n}\n.latest .featured-image {\n  position: relative;\n}\n.latest .featured-image .text {\n  background: #3AAA64;\n  color: #fff;\n}\n.latest .featured-image .ribbon {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  width: 110px;\n  height: 110px;\n  overflow: hidden;\n}\n.latest .featured-image .ribbon .text {\n  font-family: 'Montserrat', sans-serif;\n  position: relative;\n  left: -8px;\n  top: 18px;\n  width: 158px;\n  padding: 10px 10px;\n  font-size: 15px;\n  font-weight: bold;\n  text-align: center;\n  text-transform: uppercase;\n  color: #fff;\n  background-color: #479FC8;\n  -webkit-transform: rotate(45deg) translate3d(0, 0, 0);\n  -moz-transform: rotate(45deg) translate3d(0, 0, 0);\n  -ms-transform: rotate(45deg) translate3d(0, 0, 0);\n  -o-transform: rotate(45deg) translate3d(0, 0, 0);\n}\n.latest .featured-image .ribbon .text:before,\n.latest .featured-image .ribbon .text:after {\n  content: '';\n  position: absolute;\n  bottom: -5px;\n  border-top: 5px solid #276582;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n}\n.latest .featured-image .ribbon .text:before {\n  left: 0;\n}\n.latest .featured-image .ribbon .text:after {\n  right: 0;\n}\n/* Projects Section */\n.projects .item {\n  margin-bottom: 30px;\n}\n.projects .item .title {\n  font-size: 16px;\n  margin-top: 0;\n  margin-bottom: 5px;\n  line-height: 1.5;\n}\n.projects .item .title a {\n  color: #778492;\n}\n.projects .item .title a:hover {\n  color: #5f6b77;\n}\n/* Work Section */\n.experience .item {\n  margin-bottom: 30px;\n}\n.experience .item .title {\n  font-size: 16px;\n  margin-top: 0;\n  margin-bottom: 5px;\n  line-height: 1.5;\n}\n.experience .item .title .place {\n  color: #999;\n  font-weight: normal;\n}\n.experience .item .title .place a {\n  color: #999;\n}\n.experience .item .title .place a:hover {\n  color: #666666;\n}\n.experience .item .title .year {\n  color: #999;\n  font-weight: normal;\n}\n/* Git section */\n.github-graph {\n  margin-bottom: 30px;\n}\n.github-graph .js-calendar-graph-svg {\n  max-width: 100%;\n}\n.ghfeed {\n  height: 600px;\n}\n.ghfeed,\n.ghfeed *,\n.ghfeed *:before,\n.ghfeed *:after {\n  box-sizing: content-box;\n}\n/* Info Section */\n.info .fa {\n  margin-right: 15px;\n  color: #ccd1d6;\n}\n.info .fa.fa-envelope-o {\n  font-size: 14px;\n}\n.info ul {\n  margin-bottom: 0;\n}\n.info li {\n  margin-bottom: 15px;\n}\n.info li:last-child {\n  margin-bottom: 0;\n}\n/* Skills Section */\n.skills .intro {\n  margin-bottom: 30px;\n}\n.skills .skillset .item {\n  margin-bottom: 30px;\n}\n.skills .skillset .level-title {\n  font-size: 16px;\n  position: relative;\n  margin-top: 0;\n  margin-bottom: 10;\n}\n.skills .skillset .level-title .level-label {\n  color: #ccd1d6;\n  font-size: 14px;\n  font-weight: 400;\n  font-family: \"Lato\", arial, sans-serif;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.skills .skillset .level-bar {\n  height: 15px;\n  background: #e8e8e8;\n}\n.skills .skillset .level-bar-inner {\n  height: 15px;\n  background: #66cb8c;\n}\n/* Testimonials section */\n.testimonials .item {\n  margin-bottom: 30px;\n}\n.testimonials .item:last-child {\n  margin-bottom: 0;\n}\n.testimonials .item .quote {\n  color: #666;\n  font-size: 16px;\n  border-left-color: #9fdeb7;\n  margin-bottom: 15px;\n}\n.testimonials .item .quote .fa {\n  color: #79d19a;\n  margin-right: 15px;\n}\n.testimonials .item .source {\n  font-size: 14px;\n  padding-left: 30px;\n  font-weight: 500;\n}\n.testimonials .item .source .name {\n  color: #939ea9;\n  font-weight: 600;\n}\n.testimonials .item .source .title {\n  color: #999;\n}\n/* Education section */\n.education .item {\n  margin-bottom: 30px;\n}\n.education .item:last-child {\n  margin-bottom: 0;\n}\n.education .item .title {\n  font-size: 16px;\n  margin-top: 0;\n}\n.education .item .university {\n  font-family: \"Lato\", arial, sans-serif;\n  font-size: 13px;\n  color: #999;\n  font-weight: 600;\n  padding-left: 25px;\n}\n.education .item .university .year {\n  color: #b0b7bf;\n  font-weight: 500;\n}\n/* Language Section */\n.languages .item {\n  margin-bottom: 15px;\n}\n.languages .item .title {\n  color: #778492;\n}\n.languages .item .level {\n  color: #999;\n}\n.languages .item:last-child {\n  margin-bottom: 0;\n}\n.languages .item .fa {\n  color: #79d19a;\n}\n/* Blog Section */\n.blog .item {\n  margin-bottom: 30px;\n}\n.blog .item .title {\n  font-size: 18px;\n  line-height: 1.3;\n}\n.blog .item .title a {\n  color: #778492;\n}\n.blog .item .title a:hover {\n  color: #5f6b77;\n}\n.blog .item:last-child {\n  margin-bottom: 0;\n}\n/* List section */\n.list ul li {\n  margin-bottom: 10px;\n}\n.list ul li .fa {\n  margin-right: 5px;\n}\n.list ul li a {\n  color: #778492;\n}\n.list ul li a:hover {\n  color: #49515a;\n}\n/* Credits */\n.credits ul li {\n  margin-bottom: 10px;\n}\n.credits ul li .fa {\n  margin-right: 5px;\n}\n.credits ul li a {\n  color: #778492;\n}\n.credits ul li a:hover {\n  color: #49515a;\n}\n.credits .btn {\n  margin-bottom: 15px;\n}\n/* ======= Footer ======= */\n.footer {\n  background: #32383e;\n  color: #fff;\n  padding: 10px 0;\n}\n.footer .copyright {\n  line-height: 1.6;\n  color: #a1aab4;\n  font-size: 14px;\n}\n.footer a {\n  color: #fff;\n}\n.footer .fa-heart {\n  color: #fb866a;\n}\n/* Extra small devices (phones, less than 768px) */\n@media (max-width: 767px) {\n  .header {\n    text-align: center;\n  }\n  .header .profile-image {\n    float: none !important;\n    margin: 0 auto;\n  }\n  .header .profile-content {\n    float: none !important;\n    text-align: center;\n  }\n  .header .btn {\n    margin-top: 30px;\n    float: none !important;\n  }\n  .project-image {\n    margin-bottom: 15px;\n  }\n}\n/* Small devices (tablets, 768px and up) */\n/* Medium devices (desktops, 992px and up) */\n/* Large devices (large desktops, 1200px and up) */\n/* Ex-Large devices (large desktops, 1200px and up) */\n@media (min-width: 1400px) {\n  .container {\n    width: 1360px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/personal/personal.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"hsm-portfolio-header\">\n  <div class=\"container\">\n    <img class=\"hsm-profile img-responsive pull-left\" src=\"assets/images/Profile.jpg\" />\n    <div class=\"profile-content pull-left\">\n      <h1 class=\"name\">Hemanth Shetty</h1>\n      <h2 class=\"desc\">Masters Student at Northeastern University</h2>\n    </div><!--//profile-->\n    <a class=\"btn btn-cta-primary pull-right\" href=\"https://www.linkedin.com/in/hemanth-shetty-neu\" target=\"_blank\"><i class=\"fa fa-paper-plane\"></i> Contact Me</a>\n  </div><!--//container-->\n</header><!--//header-->\n\n<div class=\"container sections-wrapper\">\n  <div class=\"row\">\n    <div class=\"primary col-md-8 col-sm-12 col-xs-12\">\n      <section class=\"about section\">\n        <div class=\"section-inner\">\n          <h2 class=\"heading\">About Me</h2>\n          <div class=\"content\">\n            <p>\n              I am pursuing my Masters in Computer Science at Northeastern University, Boston. I am passionate about solving problems and always believe in striving for excellence.\n\n              I have 3.6 years of industry experience and I have previously worked as a .NET developer in retail giant Tesco and in AirWatch by VMware, which is a leader in enterprise mobility management (EMM). I have worked as a Cloud Software Engineer- Intern in New York Life Insurance Labs.\n\n              At Northeastern University, I am pursuing my interest in Data Engineering and working towards building a profile in Information Retrieval and Parallel Data Processing using Map Reduce.\n            </p>\n\n          </div><!--//content-->\n        </div><!--//section-inner-->\n      </section><!--//section-->\n\n      <section class=\"latest section\">\n        <div class=\"section-inner\">\n          <h2 class=\"heading\">Latest Projects</h2>\n          <div class=\"content\">\n\n            <div class=\"item featured text-center\">\n              <h3 class=\"title\"><a href=\"https://e-trash-management.herokuapp.com\" target=\"_blank\">E-Trash Management</a></h3>\n              <div class=\"featured-image\">\n                <a href=\"#\" target=\"_blank\">\n                </a>\n                <div class=\"ribbon\">\n                  <div class=\"text\">New</div>\n                </div>\n              </div>\n\n              <div class=\"desc text-left\">\n                <p> At E‐Trash Management, we provide a full suite of asset management platform to the Users to manage buy or sell their electronic waste rather than dumping it in trash. </p>\n                <p> E‐Trash Management  can be a complex challenge, sometimes requiring multiple vendors to handle shipping, packaging, storage, inventory, data destruction, logistics, disposal and recycling.\n                  If not done properly, you and your company could face serious penalties for improper disposal as well as extreme data security risks.\n                  We can help you eliminate that risk!</p>\n              </div><!--//desc-->\n\n            </div><!--//item-->\n\n          </div><!--//content-->\n        </div><!--//section-inner-->\n      </section><!--//section-->\n\n      <section class=\"projects section\">\n        <div class=\"section-inner\">\n          <h2 class=\"heading\">Other Projects</h2>\n          <div class=\"content\">\n            <div class=\"item\">\n              <h3 class=\"title\"><a href=\"https://github.com/HemanthShetty/InformationRetrieval\">Page Rank Algorithm</a> <span class=\"label label-theme\">Open Source</span></h3>\n              <p class=\"summary\">•\tPageRank calculates the rank of the webpage depending upon the factors like in links, out links and key phrases. </p>\n              <p><a class=\"more-link\" href=\"https://github.com/HemanthShetty/InformationRetrieval\" target=\"_blank\"><i class=\"fa fa-external-link\"></i> View on GitHub</a></p>\n            </div><!--//item-->\n            <div class=\"item\">\n              <h3 class=\"title\"><a href=\"https://github.com/HemanthShetty/InformationRetrieval\">Web Crawler</a> <span class=\"label label-theme\">Open Source</span></h3>\n              <p class=\"summary\">the web crawler is developed using Java and elastic search.The crawler crawls the links within links of a webpage till it reaches certain depth.\n              </p>\n              <p><a class=\"more-link\" href=\"https://github.com/HemanthShetty/InformationRetrieval\" target=\"_blank\"><i class=\"fa fa-external-link\"></i> View on GitHub</a></p>\n            </div><!--//item-->\n\n          </div><!--//content-->\n        </div><!--//section-inner-->\n      </section><!--//section-->\n\n      <section class=\"experience section\">\n        <div class=\"section-inner\">\n          <h2 class=\"heading\">Work Experience</h2>\n          <div class=\"content\">\n            <div class=\"item\">\n              <h3 class=\"title\">Software Engineer Co-op <span class=\"place\"><a href=\"#\">New York Life Insurance Ventures</a></span> <span class=\"year\">(May 2016 - Dec 2016)</span></h3>\n              <p> As a Cloud Software Engineer I worked on cutting edge technologies like Amazon Web Services to create web and mobile applications that make it easy to sell life insurance products to millennials.\n\n                •\tCreated Lambda functions to process data from mobile apps and web applications and then store it in DynamoDB.\n                •\tWorked on creating a web portal using using Angular2, Node.Js and AWS services that could be used by the customer service team to handle issues.\n                •\tDeveloped a chat bot for recommending an insurance product to customers using AWS technologies like DynamoDB, API Gateway and serverless Lambda functions.\n                •\tSpearheaded the API project for NYL labs using Node.js, Express, Swagger and Apigee Edge API\n                management platform and created RESTful APIs for partner integration.\n\n              </p>\n            </div><!--//item-->\n            <div class=\"item\">\n              <h3 class=\"title\">Software Engineer - <span class=\"place\"><a href=\"#\">VMWare AirWatch</a></span> <span class=\"year\">(Oct 2014 - May 2015)</span></h3>\n              <p>\n                As a .NET developer I was working on developing cutting edge Enterprise mobility solutions. I was mainly involved in developing and testing RESTful APIs.\n\n                • Spearheaded the integration of ASP.NET Web API framework with the existing AirWatch code base.\n                • Migrated some of the SOAP endpoints to RESTful APIs while simultaneously improving the code base by incorporating best practices into it.\n              </p>\n            </div><!--//item-->\n\n            <div class=\"item\">\n              <h3 class=\"title\">Software Engineer <span class=\"place\"><a href=\"www.Biinfotech.com\">Tesco</a></span> <span class=\"year\">(july 2012 - Sept 2014)</span></h3>\n              <p>\n                Worked on enabling the fulfillment of online customer orders in Tesco International stores. I was part of a team that developed web services and an online web portal to enable picking items inside the store and delivering them to the customer.\n\n                • Worked on the creation of Web Services using WCF, ADO.NET, SQL Server 2008 and other .NET frameworks.\n                • Worked on adding features to an online web portal known as 'PCS Admin' using HTML, CSS, jQuery and ASP.NET MVC 3.\n                • Worked in an agile development process with comprehensive unit testing using MSTest and NUnit.\n                • Awarded the ‘Tesco Bright Spark’ yearly award for innovation, along with numerous other spot awards.\n              </p>\n            </div><!--//item-->\n\n          </div><!--//content-->\n        </div><!--//section-inner-->\n      </section><!--//section-->\n\n    </div><!--//primary-->\n    <div class=\"secondary col-md-4 col-sm-12 col-xs-12\">\n      <aside class=\"info aside section\">\n        <div class=\"section-inner\">\n          <h2 class=\"heading sr-only\">Basic Information</h2>\n          <div class=\"content\">\n            <ul class=\"list-unstyled\">\n              <li><i class=\"fa fa-map-marker\"></i><span class=\"sr-only\">Location:</span>Boston, MA</li>\n              <li><i class=\"fa fa-envelope-o\"></i><span class=\"sr-only\">Email:</span><a href=\"#\">shetty.h@huksy.neu.edu</a></li>\n              <li><i class=\"fa fa-link\"></i><span class=\"sr-only\">LinkedIn:</span><a href=\"#\">https://www.linkedin.com/in/hemanth-shetty-neu/</a></li>\n            </ul>\n          </div><!--//content-->\n        </div><!--//section-inner-->\n      </aside>\n\n\n      <aside class=\"info aside section\">\n        <div class=\"section-inner\">\n          <h2 class=\"heading sr-only\">Basic Information</h2>\n          <div class=\"content\">\n            <ul class=\"list-unstyled\">\n              <li>Web Development (CS5610) Assignments</li>\n              <li><i class=\"fa fa-book\"></i><a href=\"https://github.com/HemanthShetty/webdev-shetty-hemanth/releases/tag/1.0\" target=\"_blank\">Assignment 1</a></li>\n              <li><i class=\"fa fa-book\"></i><a href=\"https://github.com/HemanthShetty/webdev-shetty-hemanth/releases/tag/2.0\" target=\"_blank\">Assignment 2</a></li>\n              <li><i class=\"fa fa-book\"></i><a href=\"https://github.com/HemanthShetty/webdev-shetty-hemanth/releases/tag/3.0\" target=\"_blank\">Assignment 3</a></li>\n              <li><i class=\"fa fa-book\"></i><a href=\"https://github.com/HemanthShetty/webdev-shetty-hemanth/releases/tag/4.1\" target=\"_blank\">Assignment 4</a></li>\n              <li><i class=\"fa fa-book\"></i><a href=\"https://github.com/HemanthShetty/webdev-shetty-hemanth/releases/tag/5.0\" target=\"_blank\">Assignment 5</a></li>\n              <li><i class=\"fa fa-book\"></i><a href=\"https://github.com/HemanthShetty/webdev-shetty-hemanth/releases/tag/6\" target=\"_blank\">Assignment 6</a></li>\n\n            </ul>\n          </div><!--//content-->\n        </div><!--//section-inner-->\n      </aside>\n      <aside class=\"skills aside section\">\n        <div class=\"section-inner\">\n          <h2 class=\"heading\">Skills</h2>\n          <div class=\"content\">\n            <p class=\"intro\">\n              I am proficient in Java, C#, ASP.net</p>\n\n            <div class=\"skillset\">\n\n              <div class=\"item\">\n                <h3 class=\"level-title\">Java, ASP.NET & C#<span class=\"level-label\" data-toggle=\"tooltip\" data-placement=\"left\" data-animation=\"true\" title=\"You can use the tooltip to add more info...\">Expert</span></h3>\n                <div class=\"level-bar\">\n                  <div class=\"level-bar-inner\" data-level=\"96%\">\n                  </div>\n                </div><!--//level-bar-->\n              </div><!--//item-->\n\n              <div class=\"item\">\n                <h3 class=\"level-title\">Angular 4<span class=\"level-label\">Expert</span></h3>\n                <div class=\"level-bar\">\n                  <div class=\"level-bar-inner\" data-level=\"96%\">\n                  </div>\n                </div><!--//level-bar-->\n              </div><!--//item-->\n\n              <div class=\"item\">\n                <h3 class=\"level-title\">HTML5, CSS3 & Bootstrap<span class=\"level-label\">Expert</span></h3>\n                <div class=\"level-bar\">\n                  <div class=\"level-bar-inner\" data-level=\"96%\">\n                  </div>\n                </div><!--//level-bar-->\n              </div><!--//item-->\n\n              <div class=\"item\">\n                <h3 class=\"level-title\">Python<span class=\"level-label\">Pro</span></h3>\n                <div class=\"level-bar\">\n                  <div class=\"level-bar-inner\" data-level=\"85%\">\n                  </div>\n                </div><!--//level-bar-->\n              </div><!--//item-->\n\n            </div>\n          </div><!--//content-->\n        </div><!--//section-inner-->\n      </aside><!--//section-->\n\n\n      <aside class=\"education aside section\">\n        <div class=\"section-inner\">\n          <h2 class=\"heading\">Education</h2>\n          <div class=\"content\">\n            <div class=\"item\">\n              <h3 class=\"title\"><i class=\"fa fa-graduation-cap\"></i> Masters in Computer Science</h3>\n              <h4 class=\"university\">Northeastern University  <span class=\"year\">(2015-2017)</span></h4>\n            </div><!--//item-->\n            <div class=\"item\">\n              <h3 class=\"title\"><i class=\"fa fa-graduation-cap\"></i> B.E Computer Science</h3>\n              <h4 class=\"university\">PESIT, Bangalore <span class=\"year\">(2008-2012)</span></h4>\n            </div><!--//item-->\n          </div><!--//content-->\n        </div><!--//section-inner-->\n      </aside><!--//section-->\n\n      <aside class=\"languages aside section\">\n        <div class=\"section-inner\">\n          <h2 class=\"heading\">Languages</h2>\n          <div class=\"content\">\n            <ul class=\"list-unstyled\">\n              <li class=\"item\">\n                <span class=\"title\"><strong>English:</strong></span>\n                <span class=\"level\">Professional Proficiency <br class=\"visible-xs\"/><i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i> </span>\n              </li><!--//item-->\n              <li class=\"item\">\n                <span class=\"title\"><strong>Kannada:</strong></span>\n                <span class=\"level\">Native Speaker <br class=\"visible-sm visible-xs\"/><i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i></span>\n              </li><!--//item-->\n              <li class=\"item\">\n                <span class=\"title\"><strong>Hindi:</strong></span>\n                <span class=\"level\">Native Speaker <br class=\"visible-sm visible-xs\"/><i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i></span>\n              </li>\n            </ul>\n          </div><!--//content-->\n        </div><!--//section-inner-->\n      </aside><!--//section-->\n\n\n\n    </div><!--//secondary-->\n  </div><!--//row-->\n</div><!--//masonry-->\n\n<!-- ******FOOTER****** -->\n<footer class=\"footer\">\n  <div class=\"container text-center\">\n    <!--/* This template is released under the Creative Commons Attribution 3.0 License. Please keep the attribution link below when using for your own project. Thank you for your support. :) If you'd like to use the template without the attribution, you can check out other license options via our website: themes.3rdwavemedia.com */-->\n    <small class=\"copyright\">Designed by <a href=\"https://www.linkedin.com/in/hemanth-shetty-neu\" target=\"_blank\">Hemanth</a></small>\n  </div><!--//container-->\n</footer><!--//footer-->\n\n<!-- Javascript -->\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/personal/personal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PersonalComponent = (function () {
    function PersonalComponent() {
    }
    PersonalComponent.prototype.ngOnInit = function () {
    };
    return PersonalComponent;
}());
PersonalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-personal',
        template: __webpack_require__("../../../../../src/app/components/personal/personal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/personal/personal.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PersonalComponent);

//# sourceMappingURL=personal.component.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
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

module.exports = "<div class=\"container-fluid\">\n  <h1>Login</h1>\n  <input placeholder=\"username\"\n         [(ngModel)]=\"username\"\n         type=\"text\"\n         class=\"form-control\"/>\n  <input placeholder=\"password\"\n         [(ngModel)]=\"password\"\n         type=\"password\"\n         class=\"form-control\"/>\n  <div *ngIf=\"isInvalid\"\n       class=\"alert alert-danger\">\n    {{notificationMessage}}\n  </div>\n  <a class=\"btn btn-primary btn-block\" (click)=\"login(username,password)\">Login</a>\n  <a href=\"localhost:3100/facebook/login\" class=\"btn btn-primary btn-block\">\n    <span class=\"fa fa-facebook\"></span>\n    Facebook\n  </a>\n  <a class=\"btn btn-success btn-block\" (click)=\"register()\">Register</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function LoginComponent(sharedService, userService, router) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        this.userService.login(this.username, this.password)
            .subscribe(function (data) {
            if (data == null) {
                _this.notificationMessage = 'Please Enter a Valid User Name and Password';
                _this.isInvalid = true;
            }
            else {
                _this.isInvalid = false;
                _this.sharedService.user = data;
                _this.router.navigate(['/user']);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a [routerLink]= \" [ '/user' , userId]\" class=\"navbar-brand thick\">\n        <b>Profile</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a  (click)=\"editProfile()\" class=\"navbar-link\" >\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<div class=\"container-fluid\">\n  <form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\" name=\"username\" class=\"form-control\" id=\"username\" [(ngModel)]=\"user.username\"  ngModel=\"\" required #username=\"ngModel\">\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n      </span>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email </label>\n      <input type=\"email\" name=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"user.email\" ngModel=\"\" email #email=\"ngModel\">\n      <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">\n      Please enter a valid email!\n      </span>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input type=\"text\" name=\"firstname\" class=\"form-control\" id=\"first-name\" [(ngModel)]=\"user.firstName\" ngModel=\"\" required #firstname=\"ngModel\">\n      <span class=\"help-block\" *ngIf=\"!firstname.valid && firstname.touched\">\n      Please enter a valid first name!\n      </span>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input type=\"text\" name=\"lastname\" class=\"form-control\" id=\"last-name\" [(ngModel)]=\"user.lastName\" ngModel=\"\" required #lastname=\"ngModel\">\n      <span class=\"help-block\" *ngIf=\"!lastname.valid && lastname.touched\">\n      Please enter a valid second name!\n      </span>\n    </div>\n\n    <div *ngIf=\"isInvalid\"\n         class=\"alert alert-danger\">\n      {{notificationMessage}}\n    </div>\n\n    <a class=\"btn btn-primary btn-block\"\n       [routerLink]= \" [ '/user' , userId, 'website']\">Websites</a>\n    <a class=\"btn btn-danger btn-block \"\n       (click)=\"logout()\">Logout</a>\n\n  </form>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a href=\"profile.html\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function ProfileComponent(route, userService, router, sharedService) {
        this.route = route;
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user_model_client__["a" /* User */]('', '', '', '', '', '');
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userIdentity = _this.sharedService.user;
        });
        if (this.userIdentity) {
            this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user_model_client__["a" /* User */](this.userIdentity._id, this.userIdentity.username, this.userIdentity.password, this.userIdentity.email, this.userIdentity.firstName, this.userIdentity.lastName);
            this.userId = this.user._id;
        }
        else {
            this.router.navigate(['/login']);
        }
        /*
        this.userService.findUserById(this.userId)
          .subscribe(
            (data: any) => {
              this.user = data;
              if (!this.user) {
                this.router.navigate(['/login']);
              }
              },
            (error: any) => {
              this.isInvalid = true;
              this.notificationMessage = 'Error fetching users profile information' ;
            }
            );
        */
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
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
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], ProfileComponent.prototype, "profileForm", void 0);
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__["a" /* SharedService */]) === "function" && _e || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function RegisterComponent(sharedService, userService, router) {
        this.sharedService = sharedService;
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
            this.userService.register(this.user)
                .subscribe(function (data) {
                _this.user = data;
                if (_this.user) {
                    _this.sharedService.user = data;
                    _this.router.navigate(['/user']);
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
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "registrationForm", void 0);
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
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
            this.websiteDetails.developerId = this.userId.toString();
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
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], WebsiteEditComponent.prototype, "websiteForm", void 0);
WebsiteEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _d || Object])
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
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

module.exports = "<!-- Header -->\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-4 col-md-4 col-lg-4 hidden-xs\">\n        <p class=\"navbar-text pull-left\">\n          <a [routerLink]= \" [ '/user' , userId, 'website']\" class=\"glyphicon glyphicon-chevron-left\"></a>\n        </p>\n\n        <p class=\"navbar-text\">\n          <a href=\"#\"><b>Websites</b></a>\n        </p>\n\n        <p class=\"navbar-text pull-right\">\n          <a href=\"website-new.html\" class=\"glyphicon glyphicon-plus\"></a>\n        </p>\n      </div>\n      <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n        <p class=\"navbar-text pull-left hidden-sm hidden-md hidden-lg\">\n          <a href=\"page-list.html\" class=\"glyphicon glyphicon-chevron-left\"></a>\n        </p>\n\n        <div class=\"d-inline col-xs-6\">\n        <p class=\"navbar-text\">\n          <a href=\"#\"><b>New Website</b></a>\n        </p>\n        </div>\n\n        <div class=\"d-inline col-xs-4 pull-right\">\n        <p class=\"navbar-text pull-right\">\n          <a (click)=\"createWebsite()\" class=\"glyphicon glyphicon-ok\"></a>\n        </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</nav>\n\n\n\n<div class=\"row container-fluid\">\n  <div class=\"hidden-xs col-sm-4 col-md-4 col-lg-4 pull-left\">\n    <div class=\"container-fluid\" *ngFor=\"let website of websites\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\"><a [routerLink]= \" [ '/user' , userId , 'website' , website._id ,'page']\"><b>{{website.name}}</b></a>\n          <a [routerLink]= \" [ '/user' , userId , 'website' , website._id ]\"> <span class=\"pull-right glyphicon glyphicon-cog\"></span></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8 pull-right\">\n    <div class=\"container-fluid\">\n      <form #f=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"websiteName\">Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"websiteName\" name=\"websiteName\" placeholder=\"Name\" ngModel=\"\" #websiteName=\"ngModel\" required>\n          <span class=\"help-block\"\n                *ngIf=\"!websiteName.valid && websiteName.touched\">\n            Enter a valid website name!!\n          </span>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"websiteDesc\">Description</label>\n          <textarea id=\"websiteDesc\" class=\"form-control\" name=\"websiteDescription\" rows=\"5\" placeholder=\"Description\" ngModel=\"\" #websiteDescription=\"ngModel\" required></textarea>\n          <span class=\"help-block\"\n                *ngIf=\"!websiteDescription.valid && websiteDescription.touched\">\n            You need to enter some description for the website!!\n          </span>\n        </div>\n        <div *ngIf=\"errorFlag\"\n             class=\"alert alert-danger\">\n          {{errorMsg}}\n        </div>\n      </form>\n    </div>\n  </div>\n\n</div>\n\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]= \" [ '/user' , userId ] \">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

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
            delete this.websiteDetails._id;
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
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], WebsiteNewComponent.prototype, "websiteForm", void 0);
WebsiteNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _d || Object])
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <!--back sign-->\n\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand \">\n        <b>Choose Widget</b>\n      </a>\n    </p>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid\">\n\n  <ul class=\"list-group\">\n    <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new', 'heading']\"\n       class=\"list-group-item\">\n      Header\n    </a>\n    <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new', 'image']\"\n       class=\"list-group-item\">\n      Image\n    </a>\n    <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new', 'youtube']\"\n       class=\"list-group-item\">\n      Youtube\n    </a>\n    <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new', 'html']\"\n       class=\"list-group-item\">\n      HTML\n    </a>\n    <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new', 'text']\"\n       class=\"list-group-item\">\n      Text\n    </a>\n  </ul>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <p class=\"navbar-brand pull-right\">\n    <a [routerLink]=\"['/user', userId]\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n</nav>\n"

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-widget-chooser',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
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

module.exports = "<div [ngSwitch]=\"widget['widgetType']\">\n\n  <div *ngSwitchCase=\"'HEADING'\">\n    <app-widget-header></app-widget-header>\n  </div>\n\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n\n  <div *ngSwitchCase=\"'HTML'\">\n    <app-widget-html></app-widget-html>\n  </div>\n\n  <div *ngSwitchCase=\"'TEXT'\">\n    <app-widget-text></app-widget-text>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
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
        this.widget = new __WEBPACK_IMPORTED_MODULE_3__models_widget_model_client__["a" /* Widget */]('', '', '');
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.widgetService.findWidgetById(_this.widgetId)
                .subscribe(function (data) {
                if (data != null) {
                    _this.widget = data;
                }
            }, function (error) {
            });
        });
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
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

module.exports = "<div *ngIf=\"widgetEdit;then editWidget else newWidget\"></div>\n<ng-template #editWidget>\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-text pull-right right-margin-fix\">\n        <a (click)=\"updateWidget()\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-text pull-left left-margin-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>Widget Edit</b>\n        </a>\n      </p>\n    </div>\n  </nav>\n</ng-template>\n<ng-template #newWidget>\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-text pull-right right-margin-fix\">\n        <a (click)=\"createWidget()\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-text pull-left left-margin-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>New Widget</b>\n        </a>\n      </p>\n    </div>\n  </nav>\n</ng-template>\n\n<div class=\"container-fluid\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"textHeader\">\n        Text\n      </label>\n      <input [(ngModel)]=\"textHeader\"\n             name=\"textHeader\"\n             required\n             type=\"text\"\n             class=\"form-control\"\n             id=\"textHeader\"\n             placeholder=\"Home Page\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"sizeHeader\">\n        Size\n      </label>\n      <input [(ngModel)]=\"sizeHeader\"\n             required\n             name=\"sizeHeader\"\n             type=\"number\"\n             class=\"form-control\"\n             id=\"sizeHeader\"\n             placeholder=\"3\">\n    </div>\n\n    <div class=\"form-group\">\n      <a (click)=\"deleteWidget()\"\n         class=\"btn btn-danger btn-block \">\n        Delete\n      </a>\n    </div>\n  </form>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <p class=\"navbar-brand pull-right\">\n    <a [routerLink]=\"['/user', userId]\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n</nav>\n"

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
    function WidgetHeaderComponent(widgetService, activatedRoutes, router) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.router = router;
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
                _this.widgetService.findWidgetById(_this.widgetId)
                    .subscribe(function (data) {
                    if (data != null) {
                        _this.widget = data;
                        _this.widgetEdit = true;
                        _this.textHeader = _this.widget['text'];
                        _this.sizeHeader = _this.widget['size'];
                    }
                }, function (error) {
                });
            }
        });
    };
    WidgetHeaderComponent.prototype.createWidget = function () {
        var _this = this;
        this.widget['widgetType'] = 'HEADING';
        this.widget['text'] = this.textHeader;
        this.widget['size'] = this.sizeHeader;
        this.widget['pageId'] = this.pageId;
        this.widgetService.createWidget(this.pageId, this.widget)
            .subscribe(function (data) {
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        }, function (error) {
        });
    };
    WidgetHeaderComponent.prototype.updateWidget = function () {
        var _this = this;
        this.widget['widgetType'] = 'HEADING';
        this.widget['text'] = this.textHeader;
        this.widget['size'] = this.sizeHeader;
        this.widget['pageId'] = this.pageId;
        this.widgetService.updateWidget(this.widgetId, this.widget)
            .subscribe(function (data) {
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        }, function (error) {
        });
    };
    WidgetHeaderComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (data) {
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        }, function (error) {
        });
    };
    return WidgetHeaderComponent;
}());
WidgetHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object])
], WidgetHeaderComponent);

var _a, _b, _c;
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

module.exports = "<div *ngIf=\"widgetEdit;then edit else new\"></div>\n<ng-template #edit>\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-text pull-right right-margin-fix\">\n        <a (click)=\"updateWidget()\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-text pull-left left-margin-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>Widget Edit</b>\n        </a>\n      </p>\n    </div>\n  </nav>\n</ng-template>\n\n<ng-template #new>\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-text pull-right right-margin-fix\">\n        <a (click)=\"createWidget()\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-text pull-left left-margin-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>New Widget</b>\n        </a>\n      </p>\n    </div>\n  </nav>\n</ng-template>\n\n<div class=\"container-fluid\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"widgetText\">HTML</label>\n      <quill-editor id=\"widgetText\" name=\"text\" [(ngModel)]=\"textHtml\"></quill-editor>\n    </div>\n    <div class=\"form-group\">\n      <a (click)=\"deleteWidget()\"\n         class=\"btn btn-danger btn-block \">\n        Delete\n      </a>\n    </div>\n  </form>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <p class=\"navbar-brand pull-right\">\n    <a [routerLink]=\"['/user', userId]\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n</nav>\n"

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
    function WidgetHtmlComponent(widgetService, activatedRoutes, router) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.router = router;
        this.widget = {};
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.textHtml = ' ';
            _this.widgetId = params['wgid'];
            if (_this.widgetId) {
                _this.widget = _this.widgetService.findWidgetById(_this.widgetId);
                _this.widgetEdit = true;
                _this.textHtml = _this.widget['text'];
            }
        });
    };
    WidgetHtmlComponent.prototype.createWidget = function () {
        var _this = this;
        this.widget['widgetType'] = 'HTML';
        this.widget['text'] = this.textHtml;
        this.widget['pageId'] = this.pageId;
        this.widgetService.createWidget(this.pageId, this.widget).subscribe(function (data) {
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        }, function (error) {
        });
    };
    WidgetHtmlComponent.prototype.updateWidget = function () {
        var _this = this;
        this.widget['widgetType'] = 'HTML';
        this.widget['text'] = this.textHtml;
        this.widget['pageId'] = this.pageId;
        this.widgetService.updateWidget(this.widgetId, this.widget).subscribe(function (data) {
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        }, function (error) {
        });
    };
    WidgetHtmlComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId).subscribe(function (data) {
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        }, function (error) {
        });
    };
    return WidgetHtmlComponent;
}());
WidgetHtmlComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-widget-html',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object])
], WidgetHtmlComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-html.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back mark-->\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink]= \" [ '/user' , userId, 'website']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Pages</b>\n      </a>\n    </p>\n\n    <!--plus mark-->\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]= \" [ '/user' , userId , 'website' , websiteId , 'page' ,'new']\" class=\"navbar-link\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"input-group\">\n        <input [(ngModel)]=\"searchText\" type=\"text\" class=\"form-control\">\n        <span class=\"input-group-btn\">\n         <a (click)=\"searchPhotos()\" class=\"btn btn-default\" type=\"button\">\n             <span class=\"glyphicon glyphicon-search\"></span>\n         </a>\n </span>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div *ngFor=\"let pic of photos['photo']\"\n           class=\"col-xs-4\">\n        <img (click)=\"selectPhoto(pic)\"\n             width=\"100%\"\n             [src]=\"['https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' +   pic.id + '_' + pic.secret + '_s.jpg']\"/>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]= \" [ '/user' , userId ] \">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrImageSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FlickrImageSearchComponent = (function () {
    function FlickrImageSearchComponent(widgetService, flickrService, activatedRoutes, router) {
        this.widgetService = widgetService;
        this.flickrService = flickrService;
        this.activatedRoutes = activatedRoutes;
        this.router = router;
        this.photos = [];
    }
    FlickrImageSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
    };
    FlickrImageSearchComponent.prototype.searchPhotos = function () {
        var _this = this;
        this.flickrService
            .searchPhotos(this.searchText)
            .subscribe(function (data) {
            console.log(data);
            var val = data._body;
            val = val.replace('jsonFlickrApi(', '');
            val = val.substring(0, val.length - 1);
            val = JSON.parse(val);
            console.log(val);
            _this.photos = val.photos;
        });
    };
    FlickrImageSearchComponent.prototype.selectPhoto = function (photo) {
        var _this = this;
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
        var widget = {
            type: 'IMAGE',
            pageId: this.pageId,
            url: url
        };
        widget['widgetType'] = 'IMAGE';
        widget['text'] = this.searchText;
        widget['url'] = url;
        widget['width'] = 50;
        widget['pageId'] = this.pageId;
        this.widgetService.createWidget(this.pageId, widget)
            .subscribe(function (data) {
            if (data) {
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
            }
        });
    };
    return FlickrImageSearchComponent;
}());
FlickrImageSearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-flickr-image-search',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_flickr_service_client__["a" /* FlickrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_flickr_service_client__["a" /* FlickrService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _d || Object])
], FlickrImageSearchComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=flickr-image-search.component.js.map

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

module.exports = "<div *ngIf=\"widgetEdit;then edit else new\"></div>\n<ng-template #edit>\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-text pull-right right-margin-fix\">\n        <a (click)=\"updateWidget()\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-text pull-left left-margin-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>Widget Edit</b>\n        </a>\n      </p>\n    </div>\n  </nav>\n</ng-template>\n\n<ng-template #new>\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-text pull-right right-margin-fix\">\n        <a (click)=\"createWidget()\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-text pull-left left-margin-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>New Widget</b>\n        </a>\n      </p>\n    </div>\n  </nav>\n</ng-template>\n\n<div class=\"container-fluid\">\n  <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n    <div class=\"form-group\">\n      <label for=\"nameImage\">\n        Name\n      </label>\n      <input [(ngModel)]=\"nameImage\"\n             required\n             name=\"nameImage\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"nameImage\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"textImage\">\n        Text\n      </label>\n      <input [(ngModel)]=\"textImage\"\n             required\n             name=\"textImage\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"textImage\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"urlImage\">\n        URL\n      </label>\n      <input [(ngModel)]=\"urlImage\"\n             required\n             name=\"urlImage\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"urlImage\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"widthImage\">\n        Width\n      </label>\n      <input [(ngModel)]=\"widthImage\"\n             required\n             name=\"widthImage\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"widthImage\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"uploadImage\">\n        Upload\n      </label>\n      <input [(ngModel)]=\"uploadImage\"\n             required\n             name=\"uploadImage\"\n             type=\"file\"\n             class=\"form-control\"\n             id=\"uploadImage\"\n             value=\"100%\">\n    </div>\n\n    <div class=\"form-group\">\n      <input  name=\"widgetId\" value=\"{{widgetId}}\"   style=\"display: none\"/>\n      <input  name=\"websiteId\" value=\"{{websiteId}}\"   style=\"display: none\"/>\n      <input  name=\"pageId\" value=\"{{pageId}}\"   style=\"display: none\"/>\n      <input  name=\"userId\" value=\"{{userId}}\"   style=\"display: none\"/>\n      <button type=\"submit\" class=\"form-control btn btn-primary\">\n        Upload Image\n      </button>\n    </div>\n\n    <div class=\"form-group\">\n      <a (click)=\"deleteWidget()\"\n         class=\"btn btn-danger btn-block \">\n        Delete\n      </a>\n    </div>\n    <div class=\"form-group\">\n      <button type=\"submit\" class=\"form-control btn btn-primary\"\n              [routerLink]=\"['/user/',userId,'website',websiteId,'page',pageId,'widget','new','image','search']\">\n        Search Image\n      </button>\n    </div>\n  </form>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <p class=\"navbar-brand pull-right\">\n    <a [routerLink]=\"['/user', userId]\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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
    function WidgetImageComponent(widgetService, activatedRoutes, router) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.router = router;
        this.widget = {};
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            if (_this.widgetId) {
                _this.widgetService.findWidgetById(_this.widgetId)
                    .subscribe(function (data) {
                    if (data != null) {
                        _this.widgetEdit = true;
                        _this.nameImage = data['name'];
                        _this.textImage = data['text'];
                        _this.urlImage = data['url'];
                        _this.widthImage = data['width'];
                        _this.uploadImage = data['upload'];
                    }
                }, function (error) {
                });
            }
        });
    };
    WidgetImageComponent.prototype.createWidget = function () {
        var _this = this;
        this.widget['widgetType'] = 'IMAGE';
        this.widget['text'] = this.textImage;
        this.widget['url'] = this.urlImage;
        this.widget['width'] = this.widthImage;
        this.widget['upload'] = this.uploadImage;
        this.widget['name'] = this.nameImage;
        this.widget['pageId'] = this.pageId;
        this.widgetService.createWidget(this.pageId, this.widget)
            .subscribe(function (data) {
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        }, function (error) {
        });
    };
    WidgetImageComponent.prototype.updateWidget = function () {
        var _this = this;
        this.widget['widgetType'] = 'IMAGE';
        this.widget['text'] = this.textImage;
        this.widget['url'] = this.urlImage;
        this.widget['width'] = this.widthImage;
        this.widget['upload'] = this.uploadImage;
        this.widget['name'] = this.nameImage;
        this.widget['pageId'] = this.pageId;
        this.widgetService.updateWidget(this.widgetId, this.widget)
            .subscribe(function (data) {
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        }, function (error) {
        });
    };
    WidgetImageComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (data) {
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        }, function (error) {
        });
    };
    return WidgetImageComponent;
}());
WidgetImageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object])
], WidgetImageComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"widgetEdit;then editWidget else newWidget\"></div>\n<ng-template #editWidget>\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-text pull-right right-margin-fix\">\n        <a (click)=\"updateWidget()\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-text pull-left left-margin-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>Widget Edit</b>\n        </a>\n      </p>\n    </div>\n  </nav>\n</ng-template>\n<ng-template #newWidget>\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-text pull-right right-margin-fix\">\n        <a (click)=\"createWidget()\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-text pull-left left-margin-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>New Widget</b>\n        </a>\n      </p>\n    </div>\n  </nav>\n</ng-template>\n\n<div class=\"body container-fluid\">\n  <form>\n    Text\n    <input [(ngModel)]=\"text\" name=\"text\" class=\"form-control\"/>\n\n    Rows\n    <input [(ngModel)]=\"rows\"  name=\"rows\" class=\"form-control\" type=\"number\"/>\n    <label for=\"Name\">Name</label>\n    <div>\n      <input [(ngModel)]=\"name\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"Name\"\n             name=\"name\"\n             placeholder=\"Name\">\n    </div>\n\n    Placeholder\n    <input [(ngModel)]=\"placeholder\" name=\"placeholder\" class=\"form-control\" required/>\n    <p></p>\n    <div class=\"input-group\">\n      <input type=\"text\"\n             readonly\n             value=\"Formatted\"\n             class=\"form-control\"/>\n      <span class=\"input-group-addon\">\n     <input [(ngModel)]=\"formatted\" name=\"formatted\"\n            type=\"checkbox\"/>\n </span>\n    </div>\n\n\n\n\n    <a class=\"btn btn-danger btn-block \"\n       (click)=\"deleteWidget()\">Delete</a>\n\n  </form>\n</div>\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <p class=\"navbar-brand pull-right\">\n    <a [routerLink]=\"['/user', userId]\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetTextComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetTextComponent = (function () {
    function WidgetTextComponent(widgetService, activatedRoutes, router) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.router = router;
        this.widget = {};
    }
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.formatted = false;
            _this.text = 'Hello';
            _this.name = 'Hello';
            _this.rows = 1;
            if (_this.widgetId) {
                _this.widgetService.findWidgetById(_this.widgetId)
                    .subscribe(function (data) {
                    if (data != null) {
                        _this.widget = data;
                        _this.widgetEdit = true;
                        _this.text = _this.widget['text'];
                        _this.rows = _this.widget['rows'];
                        _this.name = _this.widget['name'];
                        _this.formatted = _this.widget['formatted'];
                        _this.placeholder = _this.widget['placeholder'];
                    }
                }, function (error) {
                });
            }
        });
    };
    WidgetTextComponent.prototype.createWidget = function () {
        var _this = this;
        this.widget['widgetType'] = 'TEXT';
        this.widget['text'] = this.text;
        this.widget['rows'] = this.rows;
        this.widget['name'] = this.name;
        this.widget['formatted'] = this.formatted;
        this.widget['placeholder'] = this.placeholder;
        this.widget['pageId'] = this.pageId;
        this.widgetService.createWidget(this.pageId, this.widget)
            .subscribe(function (data) {
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        }, function (error) {
        });
    };
    WidgetTextComponent.prototype.updateWidget = function () {
        var _this = this;
        this.widget['widgetType'] = 'TEXT';
        this.widget['text'] = this.text;
        this.widget['rows'] = this.rows;
        this.widget['name'] = this.name;
        this.widget['formatted'] = this.formatted;
        this.widget['placeholder'] = this.placeholder;
        this.widget['pageId'] = this.pageId;
        this.widgetService.updateWidget(this.widgetId, this.widget)
            .subscribe(function (data) {
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        }, function (error) {
        });
    };
    WidgetTextComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (data) {
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        }, function (error) {
        });
    };
    return WidgetTextComponent;
}());
WidgetTextComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-widget-text',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], WidgetTextComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-text.component.js.map

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

module.exports = "<div *ngIf=\"widgetEdit;then editWidget else newWidget\"></div>\n<ng-template #editWidget>\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-text pull-right right-margin-fix\">\n        <a (click)=\"updateWidget()\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-text pull-left left-margin-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>Widget Edit</b>\n        </a>\n      </p>\n    </div>\n  </nav>\n</ng-template>\n<ng-template #newWidget>\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-text pull-right right-margin-fix\">\n        <a (click)=\"createWidget()\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-text pull-left left-margin-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>New Widget</b>\n        </a>\n      </p>\n    </div>\n  </nav>\n</ng-template>\n\n\n<div class=\"container-fluid\">\n  <form action=\"profile.html\" method=\"post\">\n    <div class=\"form-group\">\n      <label for=\"nameYoutube\">\n        Name\n      </label>\n      <input [(ngModel)]=\"nameYoutube\"\n             name=\"nameYoutube\"\n             required\n             type=\"text\"\n             class=\"form-control\"\n             id=\"nameYoutube\"\n             placeholder=\"\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"textYoutube\">\n        Text\n      </label>\n      <input [(ngModel)]=\"textYoutube\"\n             name=\"textYoutube\"\n             required\n             type=\"text\"\n             class=\"form-control\"\n             id=\"textYoutube\"\n             placeholder=\"\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"urlYoutube\">\n        URL\n      </label>\n      <input [(ngModel)]=\"urlYoutube\"\n             name=\"urlYoutube\"\n             required\n             type=\"text\"\n             class=\"form-control\"\n             id=\"urlYoutube\"\n             placeholder=\"https://www.youtube.com/watch?v=ue80QwXMRHg\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"widthYoutube\">\n        Width\n      </label>\n      <input [(ngModel)]=\"widthYoutube\"\n             name=\"widthYoutube\"\n             required\n             type=\"text\"\n             class=\"form-control\"\n             id=\"widthYoutube\"\n             placeholder=\"\">\n    </div>\n\n    <div class=\"form-group\">\n      <a (click)=\"deleteWidget()\"\n         class=\"btn btn-danger btn-block \"  >\n        Delete\n      </a>\n    </div>\n  </form>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <p class=\"navbar-brand pull-right\">\n    <a [routerLink]=\"['/user', userId]\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n</nav>\n"

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
    function WidgetYoutubeComponent(widgetService, activatedRoutes, router) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.router = router;
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
                _this.widgetService.findWidgetById(_this.widgetId)
                    .subscribe(function (data) {
                    if (data != null) {
                        _this.widgetEdit = true;
                        _this.nameYoutube = data['name'];
                        _this.textYoutube = data['text'];
                        _this.urlYoutube = data['url'];
                        _this.widthYoutube = data['width'];
                    }
                }, function (error) {
                });
            }
        });
    };
    WidgetYoutubeComponent.prototype.createWidget = function () {
        var _this = this;
        this.widget['widgetType'] = 'YOUTUBE';
        this.widget['name'] = this.nameYoutube;
        this.widget['text'] = this.textYoutube;
        this.widget['url'] = this.urlYoutube;
        this.widget['width'] = this.widthYoutube;
        this.widget['pageId'] = this.pageId;
        this.widgetService.createWidget(this.pageId, this.widget)
            .subscribe(function (data) {
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        }, function (error) {
        });
    };
    WidgetYoutubeComponent.prototype.updateWidget = function () {
        var _this = this;
        this.widget['widgetType'] = 'YOUTUBE';
        this.widget['name'] = this.nameYoutube;
        this.widget['text'] = this.textYoutube;
        this.widget['url'] = this.urlYoutube;
        this.widget['width'] = this.widthYoutube;
        this.widget['pageId'] = this.pageId;
        this.widgetService.updateWidget(this.widgetId, this.widget)
            .subscribe(function (data) {
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        }, function (error) {
        });
    };
    WidgetYoutubeComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (data) {
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        }, function (error) {
        });
    };
    return WidgetYoutubeComponent;
}());
WidgetYoutubeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object])
], WidgetYoutubeComponent);

var _a, _b, _c;
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

module.exports = "<!--Header-->\n<nav class=\"navbar navbar-default navbar-fixed-top widget-navbar-header\">\n  <div class=\"container-fluid\">\n\n\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink]= \" [ '/user',userId,'website',websiteId,'page']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n\n\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Widgets</b>\n      </a>\n    </p>\n\n\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new']\" class=\"glyphicon glyphicon-plus\"></a>\n    </p>\n\n\n\n\n  </div>\n</nav>\n<!--Header end-->\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <ul class=\"list-group\" appSortable (newIndexes)=\"myFunc($event)\">\n      <div *ngFor=\"let widget of widgetList\">\n\n        <div [ngSwitch]=\"widget.widgetType\">\n\n          <div *ngSwitchCase=\"'HEADING'\">\n            <li class=\"list-group-item\">\n              <div class=\"container-fluid\">\n                <div class=\"hsm-wdv-toolbar\">\n                  <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget['_id']}}\">\n                    <span class=\"glyphicon glyphicon-cog\"></span>\n                  </a>\n                  <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n                </div>\n                <div [ngSwitch]=\"widget['size']\">\n                  <div *ngSwitchCase=\"1\">\n                    <h1>{{widget['text']}}</h1>\n                  </div>\n                  <div *ngSwitchCase=\"2\">\n                    <h2>{{widget['text']}}</h2>\n                  </div>\n                  <div *ngSwitchCase=\"3\">\n                    <h3>{{widget['text']}}</h3>\n                  </div>\n                  <div *ngSwitchCase=\"4\">\n                    <h4>{{widget['text']}}</h4>\n                  </div>\n                  <div *ngSwitchCase=\"5\">\n                    <h5>{{widget['text']}}</h5>\n                  </div>\n                  <div *ngSwitchCase=\"6\">\n                    <h6>{{widget['text']}}</h6>\n                  </div>\n                </div>\n              </div>\n            </li>\n          </div>\n\n          <div *ngSwitchCase=\"'IMAGE'\">\n            <li class=\"list-group-item\">\n              <div class=\"container-fluid\">\n                <div class=\"hsm-wdv-toolbar\">\n                  <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget['_id']}}\">\n                    <span class=\"glyphicon glyphicon-cog\"></span>\n                  </a>\n                  <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n                </div>\n                <img class=\"image widget-image\" [src]=\"widget['url']\" [style.width]=\"widget['width'] + '%'\">\n              </div>\n            </li>\n          </div>\n\n          <div *ngSwitchCase=\"'YOUTUBE'\">\n            <li class=\"list-group-item widget-list\">\n              <div class=\"container-fluid\">\n                <div class=\"hsm-wdv-toolbar\">\n                  <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget['_id']}}\">\n                    <span class=\"glyphicon glyphicon-cog\"></span>\n                  </a>\n                  <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n                </div>\n                <iframe class=\"video-frame\" [style.width]=\"widget['width'] + '%'\" [src]=\"sanitizedURL(widget['url'])\" frameborder=\"0\" allowfullscreen></iframe>\n              </div>\n            </li>\n          </div>\n\n          <div *ngSwitchCase=\"'HTML'\">\n            <li class=\"list-group-item widget-list\">\n              <div class=\"container-fluid\">\n                <div class=\"hsm-wdv-toolbar\">\n                  <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget['_id']}}\">\n                    <span class=\"glyphicon glyphicon-cog\"></span>\n                  </a>\n                  <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n                </div>\n                <div [innerHtml]=\"widget['text']\"></div>\n              </div>\n            </li>\n          </div>\n\n\n          <div *ngSwitchCase=\"'TEXT'\">\n            <li class=\"list-group-item widget-list\">\n              <div class=\"container-fluid\">\n                <div class=\"hsm-wdv-toolbar\">\n                  <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget['_id']}}\">\n                    <span class=\"glyphicon glyphicon-cog\"></span>\n                  </a>\n                  <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n                </div>\n                <div *ngIf=\"widget.formatted\">\n                  <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\n                </div>\n                <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows===1)\"\n                       placeholder=\"{{widget.placeholder}}\" class=\"form-control\" [value]=\"widget.text\"/>\n\n                <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\"\n                          rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\"\n                          class=\"form-control\">{{widget.text}}</textarea>\n              </div>\n            </li>\n          </div>\n\n\n\n\n\n\n        </div>\n\n      </div>\n    </ul>\n  </div>\n</div>\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom widget-navbar-footer\">\n  <div class=\"container-fluid\">\n\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n<!--footer end-->\n"

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
        this.widgetService.findWidgetsByPageId(this.pageId)
            .subscribe(function (data) {
            _this.widgetList = data;
        }, function (error) {
        });
    };
    WidgetListComponent.prototype.myFunc = function (event) {
        this.widgetService.updateWidgetPosition(this.pageId, event['startIndex'], event['endIndex'])
            .subscribe(function (data) { });
    };
    WidgetListComponent.prototype.sanitizedURL = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _d || Object])
], WidgetListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/sortable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortableDirective = (function () {
    function SortableDirective(el) {
        this.el = el;
        this.newIndexes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (refe) {
        var self = this;
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                refe.initialIndex = ui.item.index();
            },
            stop: function (event, ui) {
                refe.newIndexes.emit({
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    return SortableDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], SortableDirective.prototype, "newIndexes", void 0);
SortableDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Directive */])({
        selector: '[appSortable]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object])
], SortableDirective);

var _a;
//# sourceMappingURL=sortable.directive.js.map

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

/***/ "../../../../../src/app/models/widget.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Widget; });
var Widget = (function () {
    function Widget(id, widgetType, pageId) {
        this._id = id;
        this.widgetType = widgetType;
        this.pageId = pageId;
    }
    return Widget;
}());

//# sourceMappingURL=widget.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/flickr.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrService; });
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
var FlickrService = (function () {
    function FlickrService(_http) {
        this._http = _http;
        this.key = '30da698f6b5d2c8fa6f024ff13838104';
        this.secret = 'c106b21b49a69026';
        this.urlBase = 'https://api.flickr.com/services/rest/?method=' +
            'flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';
    }
    FlickrService.prototype.searchPhotos = function (searchTerm) {
        var url = this.urlBase
            .replace('API_KEY', this.key)
            .replace('TEXT', searchTerm);
        return this._http.get(url);
    };
    return FlickrService;
}());
FlickrService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FlickrService);

var _a;
//# sourceMappingURL=flickr.service.client.js.map

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
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
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

/***/ "../../../../../src/app/services/shared.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = (function () {
    function SharedService() {
        this.user = '';
    }
    return SharedService;
}());
SharedService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], SharedService);

//# sourceMappingURL=shared.service.client.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function UserService(_http, sharedService, router) {
        this._http = _http;
        this.sharedService = sharedService;
        this.router = router;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    UserService.prototype.register = function (user) {
        this.options.withCredentials = true;
        var credentials = {
            username: user.username,
            password: user.password,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        };
        return this._http.post(this.baseUrl + '/api/register', credentials, this.options)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.login = function (username, password) {
        this.options.withCredentials = true;
        var credentials = {
            username: username,
            password: password,
        };
        return this._http.post(this.baseUrl + '/api/login', credentials, this.options)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/loggedIn', '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user; // setting user so as to share with all components
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    UserService.prototype.createUser = function (user) {
        var userDetails = {
            username: user.username,
            password: user.password,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        };
        return this._http.post(this.baseUrl + '/api/user', userDetails)
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
    UserService.prototype.logout = function () {
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/logout', '', this.options)
            .map(function (res) {
            var data = res;
        });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
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
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
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
    function WidgetService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl;
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        return this._http.post(this.baseUrl + '/api/page/' + pageId + '/widget', widget)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        return this._http.get(this.baseUrl + '/api/page/' + pageId + '/widget')
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        return this._http.get(this.baseUrl + '/api/widget/' + widgetId)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        return this._http.put(this.baseUrl + '/api/widget/' + widgetId, widget)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        return this._http.delete(this.baseUrl + '/api/widget/' + widgetId)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.updateWidgetPosition = function (pageId, initialPos, finalPos) {
        return this._http.put(this.baseUrl + '/api/page/' + pageId + '/widget?initial=' + initialPos + '&final=' + finalPos, null)
            .map(function (res) {
            return res.json();
        });
    };
    return WidgetService;
}());
WidgetService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object])
], WidgetService);

var _a;
//# sourceMappingURL=widget.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
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