(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"danger\" data-background-color=\"white\">\n        <div class=\"logo\">\n            <a href=\"/\" class=\"simple-text\">\n                Frog Tenants\n            </a>\n        </div>\n        <div class=\"sidebar-wrapper\">\n            <tenant-list></tenant-list>\n        </div>\n    </div>\n    <div class=\"main-panel\">\n        <tenant></tenant>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'tenant-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tenant_tenant_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tenant/tenant.component */ "./src/app/tenant/tenant.component.ts");
/* harmony import */ var _tenant_list_tenant_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tenant-list/tenant-list.component */ "./src/app/tenant-list/tenant-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _tenant_tenant_component__WEBPACK_IMPORTED_MODULE_7__["TenantComponent"],
                _tenant_list_tenant_list_component__WEBPACK_IMPORTED_MODULE_8__["TenantListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/tenant-list/tenant-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/tenant-list/tenant-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* mat-form-field { width: 100%; }\r\n.row:first-child { margin-bottom: 12px; } */\r\n\r\n.example-container {\r\n  position: absolute;\r\n  top: 60px;\r\n  bottom: 60px;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.example-sidenav {\r\n  display: flex;\r\n  min-width: 300px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/tenant-list/tenant-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/tenant-list/tenant-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav\">\n    <li *ngFor=\"let tenant of tenants$ | async\" class=\"nav-item\" [class.active]=\"activetenant?.id == tenant.id\">\n        <a class=\"nav-link\" (click)=\"setCurrent(tenant)\">\n            <i class=\"material-icons\">home</i>\n            <p>{{tenant.domain}}</p>\n        </a>\n    </li>\n</ul>"

/***/ }),

/***/ "./src/app/tenant-list/tenant-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/tenant-list/tenant-list.component.ts ***!
  \******************************************************/
/*! exports provided: TenantListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantListComponent", function() { return TenantListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tenant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tenant.service */ "./src/app/tenant.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TenantListComponent = /** @class */ (function () {
    // public form: FormGroup;
    function TenantListComponent(tenantservice, fb) {
        this.tenantservice = tenantservice;
        this.fb = fb;
        // this.form = fb.group({
        //     name: ['', Validators.required],
        //     domain: ['', Validators.required]
        // });
    }
    TenantListComponent.prototype.ngOnInit = function () {
        this.tenants$ = this.tenantservice.tenants;
    };
    TenantListComponent.prototype.create = function () {
        // let value = this.form.value;
        // this.tenantservice.create(value.name, value.domain);
    };
    TenantListComponent.prototype.setCurrent = function (tenant) {
        this.tenantservice.setCurrent(tenant);
        this.activetenant = tenant;
    };
    TenantListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tenant-list',
            template: __webpack_require__(/*! ./tenant-list.component.html */ "./src/app/tenant-list/tenant-list.component.html"),
            styles: [__webpack_require__(/*! ./tenant-list.component.css */ "./src/app/tenant-list/tenant-list.component.css")]
        }),
        __metadata("design:paramtypes", [_tenant_service__WEBPACK_IMPORTED_MODULE_2__["TenantService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], TenantListComponent);
    return TenantListComponent;
}());



/***/ }),

/***/ "./src/app/tenant.service.ts":
/*!***********************************!*\
  !*** ./src/app/tenant.service.ts ***!
  \***********************************/
/*! exports provided: Tenant, TenantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tenant", function() { return Tenant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantService", function() { return TenantService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Tenant = /** @class */ (function () {
    function Tenant() {
    }
    return Tenant;
}());

var TenantService = /** @class */ (function () {
    function TenantService(http) {
        var _this = this;
        this.http = http;
        this.tenants = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.tenant = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        http.get("/tenant/").subscribe(function (data) {
            _this.tenants.next(data["items"]);
        });
    }
    TenantService.prototype.create = function (name, domain) {
        var _this = this;
        var url = '/tenant/';
        var options = {
            body: {
                name: name,
                domain: domain,
            },
            withCredentials: true
        };
        this.http.post(url, options)
            .subscribe(function (data) {
            _this.tenants.next(data["items"]);
        });
    };
    TenantService.prototype.setCurrent = function (tenant) {
        this.tenant.next(tenant);
    };
    TenantService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TenantService);
    return TenantService;
}());



/***/ }),

/***/ "./src/app/tenant/tenant.component.css":
/*!*********************************************!*\
  !*** ./src/app/tenant/tenant.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tenant/tenant.component.html":
/*!**********************************************!*\
  !*** ./src/app/tenant/tenant.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"tenant\">\n    <nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute fixed-top\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-wrapper\">\n                <a class=\"navbar-brand\" href=\"http://{{tenant.domain}}\" rel=\"noopener noreferrer\"\n                    target=\"_blank\">{{tenant.domain}}</a>\n                <a mat-raised-button class=\"btn btn-danger pull-right\" href=\"http://{{tenant.domain}}/admin\"\n                    rel=\"noopener noreferrer\" target=\"_blank\">Admin Site</a>\n            </div>\n        </div>\n    </nav>\n\n    <div class=\"main-content\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-lg-4 col-md-6 col-sm-6\">\n                    <div class=\"card card-stats\">\n                        <div class=\"card-header card-header-warning card-header-icon\">\n                            <div class=\"card-icon\">\n                                <i class=\"material-icons\">content_copy</i>\n                            </div>\n                            <p class=\"card-category\">Used Space</p>\n                            <h3 class=\"card-title\">49/50\n                                <small>GB</small>\n                            </h3>\n                        </div>\n                        <div class=\"card-footer\">\n                            <div class=\"stats\">\n                                <i class=\"material-icons text-danger\">warning</i>\n                                <a href=\"javascript:void(0)\">Get More Space...</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-6\">\n                    <div class=\"card card-stats\">\n                        <div class=\"card-header card-header-success card-header-icon\">\n                            <div class=\"card-icon\">\n                                <i class=\"material-icons\">person</i>\n                            </div>\n                            <p class=\"card-category\">Users</p>\n                            <h3 class=\"card-title\">{{tenant.user_count}}</h3>\n                            <div class=\"card-body table-responsive\">\n                                <table class=\"table table-hover\">\n                                    <thead class=\"text-warning\">\n                                        <th>Name</th>\n                                        <th>Email</th>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let manager of tenant.managers\">\n                                            <td>{{manager.fields.username}}</td>\n                                            <td><a href=\"mailto:{{manager.fields.email}}\">{{manager.fields.email}}</a>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                        <div class=\"card-footer\">\n                            <div class=\"stats\">\n                                <i class=\"material-icons\">person</i> {{tenant.user_count}} total users\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-6\">\n                    <div class=\"card card-stats\">\n                        <div class=\"card-header card-header-danger card-header-icon\">\n                            <div class=\"card-icon\">\n                                <i class=\"material-icons\">photo_library</i>\n                            </div>\n                            <p class=\"card-category\">Content</p>\n                            <h3 class=\"card-title\">75</h3>\n                            <div class=\"card-body table-responsive\">\n                                <table class=\"table table-hover\">\n                                    <thead class=\"text-warning\">\n                                        <th>Type</th>\n                                        <th>Count</th>\n                                    </thead>\n                                    <tbody>\n                                        <tr>\n                                            <td>Image</td>\n                                            <td>{{tenant.image_count}}</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Video</td>\n                                            <td>{{tenant.video_count}}</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Marmoset</td>\n                                            <td>0</td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                        <div class=\"card-footer\">\n                            <div class=\"stats\">\n                                <i class=\"material-icons\">access_time</i> Last upload: {{tenant.image.create | date}}\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"card card-chart\">\n                        <div class=\"card-header card-header-success\">\n                            <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">Daily Uploads</h4>\n                        </div>\n                        <div class=\"card-footer\">\n                            <div class=\"stats\">\n                                <i class=\"material-icons\">access_time</i> updated 4 minutes ago\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/tenant/tenant.component.ts":
/*!********************************************!*\
  !*** ./src/app/tenant/tenant.component.ts ***!
  \********************************************/
/*! exports provided: TenantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantComponent", function() { return TenantComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartist */ "./node_modules/chartist/dist/chartist.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tenant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tenant.service */ "./src/app/tenant.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TenantComponent = /** @class */ (function () {
    function TenantComponent(tenantservice) {
        this.tenantservice = tenantservice;
        this.subs = [];
    }
    TenantComponent.prototype.ngOnInit = function () {
        var _this = this;
        var sub = this.tenantservice.tenant.subscribe(function (tenant) {
            _this.tenant = tenant;
            setTimeout(function () { return _this.renderChart(); }, 0);
        });
        this.subs.push(sub);
    };
    TenantComponent.prototype.ngOnDestroy = function () {
        this.subs.forEach(function (sub) { return sub.unsubscribe(); });
    };
    TenantComponent.prototype.renderChart = function () {
        var dataDailySalesChart = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                this.tenant.history
            ]
        };
        var optionsDailySalesChart = {
            lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_1__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: Math.max.apply(Math, this.tenant.history) + 10,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
        };
        new chartist__WEBPACK_IMPORTED_MODULE_1__["Line"]('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
    };
    TenantComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tenant',
            template: __webpack_require__(/*! ./tenant.component.html */ "./src/app/tenant/tenant.component.html"),
            styles: [__webpack_require__(/*! ./tenant.component.css */ "./src/app/tenant/tenant.component.css")]
        }),
        __metadata("design:paramtypes", [_tenant_service__WEBPACK_IMPORTED_MODULE_2__["TenantService"]])
    ], TenantComponent);
    return TenantComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\work\github\frog_tenant\tenant-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map