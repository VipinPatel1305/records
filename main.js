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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Details.ts":
/*!****************************!*\
  !*** ./src/app/Details.ts ***!
  \****************************/
/*! exports provided: Details */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Details", function() { return Details; });
var Details = /** @class */ (function () {
    function Details(description, recipt_num, amount, updateamount, trans_date, formonth, foryear) {
        this.description = description;
        this.recipt_num = recipt_num;
        this.amount = amount;
        this.updateamount = updateamount;
        this.trans_date = trans_date;
        this.formonth = formonth;
        this.foryear = foryear;
    }
    return Details;
}());



/***/ }),

/***/ "./src/app/Month.ts":
/*!**************************!*\
  !*** ./src/app/Month.ts ***!
  \**************************/
/*! exports provided: Month */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Month", function() { return Month; });
var Month = /** @class */ (function () {
    function Month(id, name) {
        this.id = id;
        this.name = name;
    }
    return Month;
}());



/***/ }),

/***/ "./src/app/MonthData.ts":
/*!******************************!*\
  !*** ./src/app/MonthData.ts ***!
  \******************************/
/*! exports provided: MONTHS, YEARS, DOMAIN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONTHS", function() { return MONTHS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YEARS", function() { return YEARS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAIN", function() { return DOMAIN; });
var MONTHS = [
    { id: 1, name: "January" },
    { id: 2, name: "Febraury" },
    { id: 3, name: "March" },
    { id: 4, name: "April" },
    { id: 5, name: "May" },
    { id: 6, name: "June" },
    { id: 7, name: "July" },
    { id: 8, name: "August" },
    { id: 9, name: "September" },
    { id: 10, name: "October" },
    { id: 11, name: "November" },
    { id: 12, name: "December" }
];
var YEARS = [2018, 2019];
//export const DOMAIN: string = "/backend"; //online
var DOMAIN = "/records/backend";


/***/ }),

/***/ "./src/app/User.ts":
/*!*************************!*\
  !*** ./src/app/User.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main></app-main>\n<div class=\"container\">\n    <h1>Admin</h1>\n\t\t <table id=\"monthyear\" name=\"yearmonthselection\">\n\t\t  <tr>\n\t\t      <th>\n\t\t        <h2>Month</h2>\n\t\t      </th>\n\n\t\t      <th>\n\t\t        <h2>Year</h2>\n\t\t      </th>\n\t\t  </tr>\n\t\t      <td>\n\t\t        <select id=\"monthyear\" [(ngModel)]=\"selectedmonth\">   \n\t\t          <option *ngFor=\"let month of months\" [ngValue]=\"month.id\">\n\t\t            <span>{{month.name}}</span>\n\t\t          </option>\n\t\t        </select>\n\t\t      </td>\n\t\t      <td>\n\t\t        <select id=\"monthyear\" [(ngModel)]=\"selectedyear\">\n\t\t          <option *ngFor=\"let year of years\">\n\t\t           {{year}}\n\t\t          </option>\n\t\t        </select>\n\t\t      </td>\n\t\t    <tr>\n\t\t  </tr>\n\t\t</table>\n      <button type=\"submit\" class=\"btn btn-success\" (click)=\"closemonth(selectedmonth, selectedyear)\" >Close Month</button>\n\t  <button type=\"submit\" class=\"btn btn-success\" (click)=\"initmonth(selectedmonth, selectedyear)\" >Intialize Month</button>\n\t  <button type=\"submit\" class=\"btn btn-success\" (click)=\"generatereport(selectedmonth, selectedyear)\" >Generate Report</button>\n</div>\n<div>\n\t<p>Server Reply: {{returnmessage}}</p>\n</div>\n\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _MonthData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MonthData */ "./src/app/MonthData.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authscopte_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authscopte.service */ "./src/app/authscopte.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminComponent = /** @class */ (function () {
    function AdminComponent(http, authservice) {
        this.http = http;
        this.authservice = authservice;
        this.selectedmonth = 0;
        this.selectedyear = 0;
        this.months = _MonthData__WEBPACK_IMPORTED_MODULE_1__["MONTHS"];
        this.years = [2018, 2019];
        this.returnmessage = "";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.domainurl = _MonthData__WEBPACK_IMPORTED_MODULE_1__["DOMAIN"];
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.authservice.validatelogin('admin');
    };
    AdminComponent.prototype.initmonth = function (selectedmonth, selectedyear) {
        var _this = this;
        console.log("Month:" + selectedmonth + " initialized year:" + selectedyear);
        this.getinitializemonth(selectedmonth, selectedyear).subscribe(function (msg) {
            _this.returnmessage = msg;
            console.log("Server message: " + msg);
        });
    };
    AdminComponent.prototype.closemonth = function (selectedmonth, selectedyear) {
        var _this = this;
        console.log("Month:" + selectedmonth + " closed year:" + selectedyear);
        this.getclosemonth(selectedmonth, selectedyear).subscribe(function (msg) {
            _this.returnmessage = msg;
            console.log("Server message:" + msg);
        });
    };
    AdminComponent.prototype.generatereport = function (selectedmonth, selectedyear) {
        var _this = this;
        console.log("Generate Report Month:" + selectedmonth + " year:" + selectedyear);
        this.gethttpgeneratereport(selectedmonth, selectedyear).subscribe(function (msg) {
            _this.returnmessage = msg;
            console.log("Server message:" + msg);
        });
    };
    AdminComponent.prototype.getinitializemonth = function (selectedmonth, selectedyear) {
        var geturl = this.domainurl + "/init_month.php?month=" + (selectedmonth) + "&year=" + selectedyear;
        return this.http.get(geturl);
    };
    AdminComponent.prototype.getclosemonth = function (selectedmonth, selectedyear) {
        var geturl = this.domainurl + "/close_month.php?month=" + (selectedmonth) + "&year=" + selectedyear;
        return this.http.get(geturl);
    };
    AdminComponent.prototype.gethttpgeneratereport = function (selectedmonth, selectedyear) {
        var geturl = this.domainurl + "/generate_report.php?month=" + selectedmonth + "&year=" + selectedyear;
        return this.http.get(geturl);
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _authscopte_service__WEBPACK_IMPORTED_MODULE_3__["AuthscopteService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _expense_details_expense_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expense-details/expense-details.component */ "./src/app/expense-details/expense-details.component.ts");
/* harmony import */ var _invoice_form_invoice_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoice-form/invoice-form.component */ "./src/app/invoice-form/invoice-form.component.ts");
/* harmony import */ var _cheque_form_cheque_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cheque-form/cheque-form.component */ "./src/app/cheque-form/cheque-form.component.ts");
/* harmony import */ var _cheque_details_cheque_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cheque-details/cheque-details.component */ "./src/app/cheque-details/cheque-details.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: 'new-cheque', component: _cheque_form_cheque_form_component__WEBPACK_IMPORTED_MODULE_4__["ChequeFormComponent"] },
    { path: 'new-invoice', component: _invoice_form_invoice_form_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceFormComponent"] },
    { path: 'report-cheque', component: _cheque_details_cheque_details_component__WEBPACK_IMPORTED_MODULE_5__["ChequeDetailsComponent"] },
    { path: 'report-invoice', component: _expense_details_expense_details_component__WEBPACK_IMPORTED_MODULE_2__["ExpenseDetailsComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"] },
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\n\tfont-size: 15px;\n\tcolor: DodgerBlue;\n\tfont-family: monospace;\n\tfont-weight: bold;\n}\n\nh1{\n\tcolor: DodgerBlue;\n\tfont-family:  Impact;\n\tfont-weight: 900;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>"

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
/* harmony import */ var _authscopte_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authscopte.service */ "./src/app/authscopte.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(authservice) {
        this.authservice = authservice;
        this.scope = "un";
        this.title = 'app';
        this.loggedin = "false";
    }
    AppComponent.prototype.ngOnInit = function () {
        this.authservice.validatepubliclogin();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_authscopte_service__WEBPACK_IMPORTED_MODULE_1__["AuthscopteService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _expense_details_expense_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expense-details/expense-details.component */ "./src/app/expense-details/expense-details.component.ts");
/* harmony import */ var _invoice_form_invoice_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invoice-form/invoice-form.component */ "./src/app/invoice-form/invoice-form.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _cheque_form_cheque_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cheque-form/cheque-form.component */ "./src/app/cheque-form/cheque-form.component.ts");
/* harmony import */ var _cheque_details_cheque_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cheque-details/cheque-details.component */ "./src/app/cheque-details/cheque-details.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _expense_details_expense_details_component__WEBPACK_IMPORTED_MODULE_4__["ExpenseDetailsComponent"],
                _invoice_form_invoice_form_component__WEBPACK_IMPORTED_MODULE_5__["InvoiceFormComponent"],
                _cheque_form_cheque_form_component__WEBPACK_IMPORTED_MODULE_7__["ChequeFormComponent"],
                _cheque_details_cheque_details_component__WEBPACK_IMPORTED_MODULE_8__["ChequeDetailsComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"]
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authscopte.service.ts":
/*!***************************************!*\
  !*** ./src/app/authscopte.service.ts ***!
  \***************************************/
/*! exports provided: AuthscopteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthscopteService", function() { return AuthscopteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthscopteService = /** @class */ (function () {
    function AuthscopteService(cookieService, router) {
        this.cookieService = cookieService;
        this.router = router;
        this.scope = "###";
        this.cookieId = "vip-angular-cookie";
        this.helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
    }
    AuthscopteService.prototype.authroute = function (routeTo, access_level) {
        this.updatescope();
        var res = false;
        switch (access_level) {
            case "public":
                //console.log("about to navigate:" + routeTo + " access_level: " + access_level);
                res = this.validatepubliclogin();
                break;
            case "mcm":
                res = this.validatemcmlogin();
                break;
            case "admin":
                res = this.validateadminlogin();
                break;
            default:
                this.router.navigate(['/login']);
                break;
        }
        if (res) {
            //console.log("about to navigate");
            this.router.navigate([routeTo]);
        }
    };
    AuthscopteService.prototype.validatelogin = function (access_level) {
        this.updatescope();
        //console.log("validatelogin, scope: " + this.scope);
        var res = false;
        switch (access_level) {
            case "public":
                res = this.validatepubliclogin();
                break;
            case "mcm":
                res = this.validatemcmlogin();
                break;
            case "admin":
                res = this.validateadminlogin();
                break;
            default:
                this.router.navigate(['/login']);
                break;
        }
        if (res == false) {
            //console.log("about to navigate");
            this.router.navigate(['/login']);
        }
    };
    AuthscopteService.prototype.validatepubliclogin = function () {
        //console.log("public scope:" + this.scope);
        if (this.scope == "public" || this.scope == "mcm" || this.scope == "admin")
            return true;
        else
            return false;
    };
    AuthscopteService.prototype.validatemcmlogin = function () {
        if (this.scope == "mcm" || this.scope == "admin")
            return true;
        else
            return false;
    };
    AuthscopteService.prototype.validateadminlogin = function () {
        if (this.scope == "admin")
            return true;
        else
            return false;
    };
    AuthscopteService.prototype.updatescope = function () {
        if (this.scope == "###" && this.cookieService.check(this.cookieId)) {
            var cookievalue = this.cookieService.get(this.cookieId);
            var decodedToken = this.helper.decodeToken(cookievalue);
            //console.log("decoded token:" + decodedToken);
            //console.log("extracted scope:" + decodedToken.scope);
            this.scope = decodedToken.scope;
        }
    };
    AuthscopteService.prototype.setCookie = function (cookievalue) {
        //this.cookieService.set(this.cookieId, cookievalue);
        this.updatescope();
    };
    AuthscopteService.prototype.getCookie = function () {
        return this.cookieService.get(this.cookieId);
    };
    AuthscopteService.prototype.getScope = function () {
        this.updatescope();
        return this.scope;
    };
    AuthscopteService.prototype.logout = function () {
        this.scope = "###";
        this.cookieService.delete(this.cookieId);
        this.router.navigate(['/login']);
    };
    AuthscopteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthscopteService);
    return AuthscopteService;
}());



/***/ }),

/***/ "./src/app/cheque-details/cheque-details.component.css":
/*!*************************************************************!*\
  !*** ./src/app/cheque-details/cheque-details.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cheque-details/cheque-details.component.html":
/*!**************************************************************!*\
  !*** ./src/app/cheque-details/cheque-details.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Year</h2>\n<select [(ngModel)]=\"selectedyear\">\n  <option *ngFor=\"let year of years\">\n    {{year}}\n  </option>\n</select>\n\n<h3>Month</h3>\n<select [(ngModel)]=\"selectedmonth\" (ngModelChange)=\"fillcheque(selectedmonth, selectedyear)\">   \n  <option *ngFor=\"let month of months\" >\n    {{month}}\n  </option>\n</select>\n\n\n<table style=\"width:50%\">\n  <tr>\n    <th>S/No.</th>\n    <th>Date</th> \n    <th>Details</th>\n    <th>Recipt No.</th>\n    <th>Amount</th>\n    <th>Settled</th>\n  </tr>\n  <tr *ngFor=\"let cheque of cheques\">\n    <td>{{cheque.id}}.</td>\n    <td>{{cheque.date_issue| date}}</td>\n    <td>{{cheque.purpose}}</td>\n    <td>{{cheque.cheque_no}}</td>\n    <td>{{cheque.amount|currency:\"₹\"}}</td>\n    <td>{{cheque.settled}}</td>\n    <td *ngIf=\"cheque.settled!='Yes'\"><button (click)=\"updaterecord(cheque)\">Settle</button></td>\n</table>\n<table style=\"width:25%\">\n  <tr>\n    <td>Total for the month</td>\n    <td>5553</td>\n  </tr>\n</table>\n\n\n\n"

/***/ }),

/***/ "./src/app/cheque-details/cheque-details.component.ts":
/*!************************************************************!*\
  !*** ./src/app/cheque-details/cheque-details.component.ts ***!
  \************************************************************/
/*! exports provided: ChequeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequeDetailsComponent", function() { return ChequeDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChequeDetailsComponent = /** @class */ (function () {
    function ChequeDetailsComponent(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.dateval = new Date();
        this.years = [2018, 2019];
        this.selectedyear = 4;
        this.selectedmonth = 5;
        this.months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    }
    ChequeDetailsComponent.prototype.ngOnInit = function () {
    };
    ChequeDetailsComponent.prototype.fillcheque = function (selectedmonth, selectedyear) {
        var _this = this;
        console.log("selected month and year" + selectedmonth + " " + selectedyear);
        this.getcheque(selectedmonth, selectedyear)
            .subscribe(function (cheques) { return _this.cheques = cheques; });
    };
    ChequeDetailsComponent.prototype.getcheque = function (selectedmonth, selectedyear) {
        // now returns an Observable of Config
        var geturl = "http://localhost:8888/records/get_cheque.php?month=" + selectedmonth + "&year=" + selectedyear;
        return this.http.get(geturl);
    };
    ChequeDetailsComponent.prototype.updaterecord = function (cheque) {
        console.log("Update record:" + cheque.amount + cheque.purpose + cheque.settled);
    };
    ChequeDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cheque-details',
            template: __webpack_require__(/*! ./cheque-details.component.html */ "./src/app/cheque-details/cheque-details.component.html"),
            styles: [__webpack_require__(/*! ./cheque-details.component.css */ "./src/app/cheque-details/cheque-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ChequeDetailsComponent);
    return ChequeDetailsComponent;
}());



/***/ }),

/***/ "./src/app/cheque-form/cheque-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/cheque-form/cheque-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css');"

/***/ }),

/***/ "./src/app/cheque-form/cheque-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/cheque-form/cheque-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <h1>New Cheque</h1>\n    <form (ngSubmit)=\"onSubmit()\" #chequeForm=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"purpose\">Purpose</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newcheque.purpose\" id=\"purpose\" required name=\"purpose\">\n      </div>\n\n       <div class=\"form-group\">\n        <label for=\"cheque_no\">Cheque No.</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newcheque.cheque_no\" id=\"cheque_no\" required name=\"cheque_no\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"amount\">Amount</label>\n        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"newcheque.amount\" id=\"amount\" required name=\"amount\"> \n      </div>\n\n       <div class=\"form-group\">\n        <label for=\"date_issue\">Date</label>\n        <input type=\"date\" class=\"form-control\" [(ngModel)]=\"newcheque.date_issue\" id=\"\n        date_issue\" required name=\"date_issue\"> \n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"settled\">Settled</label>\n        <select [(ngModel)]=\"newcheque.settled\" class=\"form-control\"id=\"\n        settled\" required name=\"settled\" >   \n          <option>Yes</option>\n          <option>No</option>\n        </select>\n      </div>       \n \n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!chequeForm.form.valid\" >Submit</button>\n\n    </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/cheque-form/cheque-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/cheque-form/cheque-form.component.ts ***!
  \******************************************************/
/*! exports provided: ChequeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequeFormComponent", function() { return ChequeFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cheque__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cheque */ "./src/app/cheque.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChequeFormComponent = /** @class */ (function () {
    function ChequeFormComponent(http) {
        this.http = http;
        this.today = new Date();
        this.newcheque = new _cheque__WEBPACK_IMPORTED_MODULE_1__["Cheque"]("momthly", 211, 345, this.today);
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.today.setHours(0);
    }
    ChequeFormComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ChequeFormComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.newcheque); },
        enumerable: true,
        configurable: true
    });
    ChequeFormComponent.prototype.onSubmit = function () {
        console.log(this.newcheque);
        this.addinvoice(this.newcheque).subscribe();
    };
    ChequeFormComponent.prototype.addinvoice = function (newcheque) {
        console.log("making post request");
        return this.http.post("http://localhost:8888/records/post_cheque.php", newcheque, this.httpOptions);
    };
    ChequeFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cheque-form',
            template: __webpack_require__(/*! ./cheque-form.component.html */ "./src/app/cheque-form/cheque-form.component.html"),
            styles: [__webpack_require__(/*! ./cheque-form.component.css */ "./src/app/cheque-form/cheque-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ChequeFormComponent);
    return ChequeFormComponent;
}());



/***/ }),

/***/ "./src/app/cheque.ts":
/*!***************************!*\
  !*** ./src/app/cheque.ts ***!
  \***************************/
/*! exports provided: Cheque */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cheque", function() { return Cheque; });
var Cheque = /** @class */ (function () {
    function Cheque(purpose, cheque_no, amount, date_issue) {
        this.purpose = purpose;
        this.cheque_no = cheque_no;
        this.amount = amount;
        this.date_issue = date_issue;
    }
    return Cheque;
}());



/***/ }),

/***/ "./src/app/expense-details/expense-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/expense-details/expense-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#para1 {\n    color: DodgerBlue;\n    width: 50%;\n}\n\n#tab2 {\n    color: DodgerBlue;\n}\n\ntr{\n\ttext-align: left;\n}\n\n#summary{\n\tfont-size: 15px;\n\tcolor: DodgerBlue;\n\tfont-family: monospace;\n\tborder:2px solid DodgerBlue;\n}\n\n#updatetable{\n\tfont-size: 15px;\n\tcolor: DodgerBlue;\n\tfont-family: monospace;\n\tborder:2px solid DodgerBlue;\n}\n\n#monthyear{\n\twidth:10%;\n\tfont-size: 25px;\n\tcolor: DodgerBlue;\n}\n\n#tableheader{\n\tfont-size: 15px;\n\tcolor: DodgerBlue;\n\tfont-weight: bold;\n}\n\n#customers {\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n    border-collapse: collapse;\n    width: 60%;\n}\n\n#customers td, #customers th {\n    border: 1px solid #ddd;\n    padding: 8px;\n}\n\n#customers tr:nth-child(even){background-color: #d2e8ff;}\n\n#customers tr:hover {background-color: #ddd;}\n\n#customers th {\n    padding-top: 12px;\n    padding-bottom: 12px;\n    text-align: left;\n    background-color: DodgerBlue;\n    color: white;\n    }\n\n.redcol{\n \tcolor: red;\n \tfont-weight: bold;\n }\n\n.greencol{\n \tcolor: green;\n \tfont-weight: bold;\n }  "

/***/ }),

/***/ "./src/app/expense-details/expense-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/expense-details/expense-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main></app-main>\n<div>\n <select id=\"monthyear\" [(ngModel)]=\"selectedmonth\" (ngModelChange)=\"fillinvoice(selectedmonth, selectedyear)\">   \n    <option *ngFor=\"let month of months\" [ngValue]=\"month\">\n      <span>{{month.name}}</span>\n    </option>\n  </select>\n\n<select id=\"monthyear\" [(ngModel)]=\"selectedyear\">\n  <option *ngFor=\"let year of years\">\n   {{year}}\n  </option>\n</select>\n</div>\n<br> \n<br> \n<button *ngIf=\"scope!='public'\" (click)=\"publish()\">Publish</button>\n<a  *ngIf=\"disabledownload != true\" href={{downloadlink}} download>Download</a>\n<table *ngIf=\"publishmode==true\" id=\"customers\" border=1 name=\"detailstable\">\n  <tr id=\"tableheader\">\n    <th>S/No.</th>\n    <th>Date</th> \n    <th>Details</th>\n    <th>Recipt No.</th>\n    <th>Amount</th>\n  </tr>\n  <tr  *ngFor=\"let detail of details\">\n      <td>{{detail.index}}.</td>\n\n      <td>\n        {{detail.trans_date|date:'d-MMM-yyyy'}}\n      </td>\n\n      <td>\n        {{detail.description}}\n      </td>\n\n      <td>\n        {{detail.recipt_num}}\n      </td>\n\n      <td>\n        {{detail.amount|currency:'INR'}}\n      </td>                 \n  </tr>\n</table>\n\n<table *ngIf=\"publishmode==false\" id=\"customers\" border=1 name=\"detailstable\">\n  <tr id=\"tableheader\">\n    <th>S/No.</th>\n    <th>Date</th> \n    <th>Details</th>\n    <th>Recipt No.</th>\n    <th>Amount</th>\n    <th>For Month</th>\n    <th>For Year</th>\n  </tr>\n  <tr  *ngFor=\"let detail of details\">\n      <td>{{detail.index}}.</td>\n\n      <td>\n        <input type=date [(ngModel)]=\"detail.trans_date\">\n      </td>\n\n      <td>\n        <input type=text [(ngModel)]=\"detail.description\">\n      </td>\n\n      <td>\n        <input type=text [(ngModel)]=\"detail.recipt_num\">\n      </td>\n\n      <td>\n        <input type=number [(ngModel)]=\"detail.amount\">\n      </td>   \n\n      <td>\n        <input type=number [(ngModel)]=\"detail.formonth\">\n      </td>  \n\n      <td>\n        <input type=number [(ngModel)]=\"detail.foryear\">\n      </td>                \n\n      <!--<td *ngIf=\"detail.amount != 0\">{{detail.trans_date| date:'dd-MMM-yyyy'}}</td> -->\n      <td *ngIf=\"publishmode==false\"><button (click)=\"updatedetail(detail)\">Update</button></td>\n      <td><button (click)=\"deletedetail(detail)\">Delete</button></td>\n  </tr>\n</table>\n\n<br>\n<table border=2 id=\"summary\">\n  <tr>\n    <td id=\"tableheader\">Total for this Month:</td>\n    <td>{{total|currency:\"₹\"}}</td>\n  </tr>\n  <tr>\n    <td id=\"tableheader\">Month Balance:</td>\n    <td>{{montlydeposit}} - {{total}} = <span class=\"redcol\"><span [class.greencol]=\"balance > 0\">{{balance|currency:\"₹\"}}</span></span></td>\n  </tr>   \n  <tr>\n    <td id=\"tableheader\">Cumulative Balance:</td>\n    <td>{{prevbal}} + {{balance}} = {{cumbal|currency:\"₹\"}}</td>\n  </tr>  \n</table>\n\n\n\n"

/***/ }),

/***/ "./src/app/expense-details/expense-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/expense-details/expense-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ExpenseDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseDetailsComponent", function() { return ExpenseDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Details */ "./src/app/Details.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _MonthData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MonthData */ "./src/app/MonthData.ts");
/* harmony import */ var _Month__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Month */ "./src/app/Month.ts");
/* harmony import */ var _authscopte_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authscopte.service */ "./src/app/authscopte.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ExpenseDetailsComponent = /** @class */ (function () {
    function ExpenseDetailsComponent(http, authservice) {
        this.http = http;
        this.authservice = authservice;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.publishmode = false;
        this.months = _MonthData__WEBPACK_IMPORTED_MODULE_3__["MONTHS"];
        this.years = _MonthData__WEBPACK_IMPORTED_MODULE_3__["YEARS"];
        this.total = 0;
        this.cumbal = 0;
        this.montlydeposit = 280000;
        this.balance = 0;
        this.prevbal = 0;
        this.newdetail = new _Details__WEBPACK_IMPORTED_MODULE_1__["Details"]("sd", "sd", 2, 4, new Date(), 21, 2018);
        this.dateval = new Date();
        this.scope = "";
        this.selectedyear = 2018;
        this.selectedmonth = new _Month__WEBPACK_IMPORTED_MODULE_4__["Month"](1, "January");
        this.disabledownload = true;
        this.downloadlink = "";
        this.domainurl = _MonthData__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"];
    }
    ExpenseDetailsComponent.prototype.ngOnInit = function () {
        this.authservice.validatelogin('public');
        if (this.authservice.getScope() == "public") {
            this.publishmode = true;
            this.scope = "public";
        }
    };
    ExpenseDetailsComponent.prototype.fillinvoice = function (selectedmonth, selectedyear) {
        var _this = this;
        console.log("selected month:" + this.selectedmonth.name + " and year: " + selectedyear);
        this.disabledownload = false;
        this.getinvoice(selectedmonth.id, selectedyear)
            .subscribe(function (details) {
            _this.details = details;
            _this.total = 0;
            var indx = 1;
            for (var _i = 0, _a = _this.details; _i < _a.length; _i++) {
                var detail = _a[_i];
                _this.total += Number(detail.amount);
                detail.index = indx;
                indx += 1;
            }
            _this.balance = _this.montlydeposit - _this.total;
            _this.getcumulativebal(selectedmonth.id, selectedyear).subscribe(function (prevbal) {
                _this.prevbal = prevbal;
                _this.cumbal = prevbal + _this.balance;
                console.log(_this.prevbal + "previous balane");
            });
            _this.downloadlink = _this.domainurl + "/download.php?month=" + selectedmonth.id
                + "&year=" + selectedyear;
            console.log("download link:" + _this.downloadlink);
        });
    };
    ExpenseDetailsComponent.prototype.getcumulativebal = function (monthval, selectedyear) {
        var geturl = this.domainurl + "/get_cumbal.php?month=" + (monthval - 1) + "&year=" + selectedyear;
        return this.http.get(geturl);
    };
    ExpenseDetailsComponent.prototype.getinvoice = function (monthval, selectedyear) {
        // now returns an Observable of Config
        var geturl = this.domainurl + "/get_invoice.php?month=" + monthval + "&year=" + selectedyear;
        return this.http.get(geturl);
    };
    ExpenseDetailsComponent.prototype.updatedetail = function (detail) {
        console.log("Update: id" + detail.id + " amount: " + detail.updateamount + detail.description + detail.recipt_num + detail.trans_date);
        console.log(detail);
        detail.id = Number(detail.id);
        // detail.amount = detail.updateamount;
        this.updatedetailhttp(detail).subscribe();
    };
    ExpenseDetailsComponent.prototype.updatedetailhttp = function (detail) {
        // now returns an Observable of Config
        var geturl = this.domainurl + "/update_invoice.php";
        return this.http.post(geturl, detail, this.httpOptions);
    };
    ExpenseDetailsComponent.prototype.deletedetail = function (detail) {
        console.log("Delete: id" + detail.id + " amount: " + detail.updateamount + detail.description + detail.recipt_num + detail.trans_date);
        console.log(detail);
        detail.id = Number(detail.id);
        this.details = this.details.filter(function (h) { return h !== detail; });
        this.deletedetailhttp(detail).subscribe();
    };
    ExpenseDetailsComponent.prototype.deletedetailhttp = function (detail) {
        // now returns an Observable of Config
        var geturl = this.domainurl + "/delete_invoice.php";
        return this.http.post(geturl, detail, this.httpOptions);
    };
    // generatereport(selectedmonth: Month, selectedyear)
    // {
    //   console.log("generate report called:" + selectedmonth.id);
    //   this.gethttpreport(selectedmonth.id, selectedyear).subscribe();
    // }
    //  gethttpreport(monthval, selectedyear): Observable<string>{
    //    var geturl = this.domainurl + "/download.php?month=" + monthval + "&year=" + selectedyear;
    //    return  this.http.get<string>(geturl);
    //  }
    ExpenseDetailsComponent.prototype.publish = function () {
        if (this.publishmode == true) {
            this.publishmode = false;
        }
        else {
            this.publishmode = true;
        }
    };
    ExpenseDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expense-details',
            template: __webpack_require__(/*! ./expense-details.component.html */ "./src/app/expense-details/expense-details.component.html"),
            styles: [__webpack_require__(/*! ./expense-details.component.css */ "./src/app/expense-details/expense-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _authscopte_service__WEBPACK_IMPORTED_MODULE_5__["AuthscopteService"]])
    ], ExpenseDetailsComponent);
    return ExpenseDetailsComponent;
}());



/***/ }),

/***/ "./src/app/invoice-form/invoice-form.component.css":
/*!*********************************************************!*\
  !*** ./src/app/invoice-form/invoice-form.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n    font: 24px \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n    padding: 10px 10px 10px 20px;\n    display: block;\n    background: #C0E1FF;\n    border-bottom: 1px solid #B8DDFF;\n\n}\n\ninput[type=text], [type=date], [type=number], select, option {\n    width: 30%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n    font-size: 25px;\n}\n\n.button:hover {\n    background: #3EB1DD;\n}\n\n.button{\n    padding: 10px 30px 10px 30px;\n    background: #66C1E4;\n    border: none;\n    color: #FFF;\n    box-shadow: 1px 1px 1px #4C6E91;\n    -webkit-box-shadow: 1px 1px 1px #4C6E91;\n    -moz-box-shadow: 1px 1px 1px #4C6E91;\n    text-shadow: 1px 1px 1px #5079A3; \n}\n\ndiv {\n    border-radius: 5px;\n    background-color: #D2E9FF;\n    padding: 5px;\n    align-content: center;\n}"

/***/ }),

/***/ "./src/app/invoice-form/invoice-form.component.html":
/*!**********************************************************!*\
  !*** ./src/app/invoice-form/invoice-form.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main></app-main>\n<div class=\"container\">\n    <h1>New Invoice</h1>\n    <form (ngSubmit)=\"onSubmit()\" #invoiceForm=\"ngForm\">\n\n      <div class=\"form-group\">\n        <label for=\"date\">Date</label><br>\n        <input type=\"date\" value=\"2018-05-04\" class=\"form-control\" [(ngModel)]=\"newinvoice.trans_date\" id=\"\n        date\" required name=\"date\"> \n      </div>  \n\n      <div class=\"form-group\">\n        <label for=\"formonth\">For Month</label><br>\n          <select id=\"monthyear\" [(ngModel)]=\"newinvoice.formonth\" id=\"formonth\" required name=\"formonth\">  \n            <option *ngFor=\"let month of months\" [ngValue]=\"month.id\">\n              <span>{{month.name}}</span>\n            </option>\n        </select>\n      </div>  \n\n      <div class=\"form-group\">\n        <label for=\"foryear\">For Year</label><br>\n          <select id=\"monthyear\" [(ngModel)]=\"newinvoice.foryear\" id=\"formonth\" required name=\"foryear\">  \n            <option *ngFor=\"let year of years\" [ngValue]=\"year\">\n              <span>{{year}}</span>\n            </option>\n        </select>\n      </div>  \n\n       <div class=\"form-group\">\n        <label for=\"recipt\">Recipt</label><br>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newinvoice.recipt_num\" id=\"recipt\" required name=\"recipt\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"detail\">Detail</label><br>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newinvoice.description\" id=\"detail\" required name=\"detail\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"amount\">Amount</label><br>\n        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"newinvoice.amount\" id=\"amount\" required name=\"amount\"> \n      </div> \n \n      <input class=\"button\" type=\"submit\" [disabled]=\"!invoiceForm.form.valid\" value=\"Submit\">\n\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/invoice-form/invoice-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/invoice-form/invoice-form.component.ts ***!
  \********************************************************/
/*! exports provided: InvoiceFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceFormComponent", function() { return InvoiceFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Details */ "./src/app/Details.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _MonthData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MonthData */ "./src/app/MonthData.ts");
/* harmony import */ var _authscopte_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authscopte.service */ "./src/app/authscopte.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var InvoiceFormComponent = /** @class */ (function () {
    function InvoiceFormComponent(http, authservice) {
        this.http = http;
        this.authservice = authservice;
        this.today = new Date();
        this.months = _MonthData__WEBPACK_IMPORTED_MODULE_3__["MONTHS"];
        this.years = _MonthData__WEBPACK_IMPORTED_MODULE_3__["YEARS"];
        this.domainurl = _MonthData__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"];
        this.newinvoice = new _Details__WEBPACK_IMPORTED_MODULE_1__["Details"]("  ", "ADO 211", 0, 0, this.today, 1, 2018);
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.today.setHours(0);
    }
    InvoiceFormComponent.prototype.ngOnInit = function () {
        this.authservice.validatelogin('mcm');
    };
    Object.defineProperty(InvoiceFormComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.newinvoice); },
        enumerable: true,
        configurable: true
    });
    InvoiceFormComponent.prototype.onSubmit = function () {
        console.log(this.newinvoice);
        this.addinvoice(this.newinvoice).subscribe();
    };
    InvoiceFormComponent.prototype.addinvoice = function (newinvoice) {
        console.log("making post request");
        return this.http.post(this.domainurl + "/post_invoice.php", newinvoice, this.httpOptions);
    };
    InvoiceFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice-form',
            template: __webpack_require__(/*! ./invoice-form.component.html */ "./src/app/invoice-form/invoice-form.component.html"),
            styles: [__webpack_require__(/*! ./invoice-form.component.css */ "./src/app/invoice-form/invoice-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _authscopte_service__WEBPACK_IMPORTED_MODULE_4__["AuthscopteService"]])
    ], InvoiceFormComponent);
    return InvoiceFormComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n    font: 24px \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n    padding: 10px 10px 10px 20px;\n    display: block;\n    background: #C0E1FF;\n    border-bottom: 1px solid #B8DDFF;\n\n}\n\ninput[type=text], [type=date], [type=password] {\n    width: 20%;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n    font-size: 25px;\n}\n\n.button:hover {\n    background: #3EB1DD;\n}\n\n.button{\n    padding: 10px 30px 10px 30px;\n    background: #66C1E4;\n    border: none;\n    color: #FFF;\n    box-shadow: 1px 1px 1px #4C6E91;\n    -webkit-box-shadow: 1px 1px 1px #4C6E91;\n    -moz-box-shadow: 1px 1px 1px #4C6E91;\n    text-shadow: 1px 1px 1px #5079A3; \n}\n\ndiv {\n    border-radius: 5px;\n    background-color: #D2E9FF;\n    padding: 5px;\n    align-content: center;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <h1>Login</h1>\n    <form (ngSubmit)=\"onSubmit()\" #invoiceForm=\"ngForm\">\n\n      <div class=\"form-group\">\n        <label for=\"user\">User</label><br>\n        <input type=\"text\" value=\"\" class=\"form-control\" [(ngModel)]=\"user.name\" id=\"\n        name\" required name=\"name\"> \n      </div>  \n\n      <div class=\"form-group\">\n        <label for=\"pass\">Password</label><br>\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.pass\" id=\"pass\" required name=\"pass\">\n      </div>\n \n      <input type=\"submit\" class=\"button\" [disabled]=\"!invoiceForm.form.valid\" value=\"Submit\">\n\n    </form>\n\n    <p>{{server_res}}</p>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../User */ "./src/app/User.ts");
/* harmony import */ var _authscopte_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authscopte.service */ "./src/app/authscopte.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _MonthData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MonthData */ "./src/app/MonthData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, authservice, router) {
        this.http = http;
        this.authservice = authservice;
        this.router = router;
        this.server_res = "";
        this.user = new _User__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.cookieValue = 'UNKNOWN';
        this.domainurl = _MonthData__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"];
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.authservice.authroute('/main', "public");
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loginhttp(this.user).subscribe(function (res) {
            //console.log("res:" + res.msg + " " + res.status);
            if (res.status == "successful") {
                _this.authservice.setCookie(res.msg);
                _this.authservice.authroute('/main', "public");
            }
            else {
                _this.server_res = "Authentication failed";
            }
        }, function (err) {
            console.error("error logged ", err.error.msg);
            _this.server_res = err.error.msg;
        });
    };
    LoginComponent.prototype.loginhttp = function (user) {
        //console.log("making post request with: " + user.name + " " + user.pass);
        return this.http.post(this.domainurl + "/login.php", user, this.httpOptions);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _authscopte_service__WEBPACK_IMPORTED_MODULE_3__["AuthscopteService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\n\tfont-size: 15px;\n\tcolor: DodgerBlue;\n\tfont-family: monospace;\n\tfont-weight: bold;\n}\n\nh1{\n\tcolor: DodgerBlue;\n\tfont-family:  Impact;\n\tfont-weight: 900;\n}"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n    <button *ngIf=\"scope!='public'\" routerLink=\"/new-invoice\" routerLinkActive=\"active\">New Invoice</button>\n    <button routerLink=\"/report-invoice\" routerLinkActive=\"active\">Invoice Report</button>\n    <button *ngIf=\"scope=='admin'\" routerLink=\"/admin\" routerLinkActive=\"active\">Admin</button>\n    <button (click)=\"logoff()\">Logout</button>\n </nav>\n "

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authscopte_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authscopte.service */ "./src/app/authscopte.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _MonthData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MonthData */ "./src/app/MonthData.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainComponent = /** @class */ (function () {
    function MainComponent(http, authservice, router) {
        this.http = http;
        this.authservice = authservice;
        this.router = router;
        this.scope = "";
        this.domainurl = _MonthData__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"];
        console.log("constrcutor main ");
    }
    MainComponent.prototype.ngOnInit = function () {
        console.log("nginit main ");
        this.authservice.validatelogin('public');
        this.scope = this.authservice.getScope();
    };
    MainComponent.prototype.logoff = function () {
        var _this = this;
        console.log("logging off");
        this.logouthttp().subscribe(function (res) {
            console.log("scope:" + _this.authservice.getScope());
            _this.authservice.logout();
        });
    };
    MainComponent.prototype.logouthttp = function () {
        // now returns an Observable of Config
        var geturl = this.domainurl + "/logout.php?scope=" + this.authservice.getScope();
        return this.http.get(geturl);
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _authscopte_service__WEBPACK_IMPORTED_MODULE_1__["AuthscopteService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MainComponent);
    return MainComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vippatel/work/learn/angular/ado-expense/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map