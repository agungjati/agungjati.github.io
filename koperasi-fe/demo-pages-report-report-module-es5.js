(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-report-report-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/demo/pages/report/report.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo/pages/report/report.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/demo/pages/report/sale-report/sale-report.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo/pages/report/sale-report/sale-report.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <h5>Total Penjualan dalam Sehari</h5>\n    <hr />\n    <div class=\"row no-gutters\">\n      <div class=\"col-md-6\">\n        <app-card [hidHeader]=\"true\">\n          <span>Total</span>\n          <h3>2,000,000</h3>\n        </app-card>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-12\">\n    <h5>Total Penjualan dalam 7 Hari</h5>\n    <hr />\n    <div class=\"row no-gutters\">\n      <div class=\"col-md-4 col-xl-2 col-sm-6\">\n        <app-card [hidHeader]=\"true\">\n          <span>Sembako</span>\n          <h3>2,000,000</h3>\n        </app-card>\n      </div>\n      <div class=\"col-md-4 col-xl-2 col-sm-6\" >\n        <app-card [hidHeader]=\"true\">\n          <span>Gas</span>\n          <h3>3,000,000</h3>\n        </app-card>\n      </div>\n      <div class=\"col-md-4 col-xl-2 col-sm-6\">\n        <app-card [hidHeader]=\"true\">\n          <span>BBM & Oli</span>\n          <h3>1,000,000</h3>\n        </app-card>\n      </div>\n      <div class=\"col-md-4 col-xl-2 col-sm-6\">\n        <app-card [hidHeader]=\"true\">\n          <span>Obat-obatan</span>\n          <h3>1,000,000</h3>\n        </app-card>\n      </div>\n      <div class=\"col-md-4 col-xl-2 col-sm-6\" >\n        <app-card [hidHeader]=\"true\">\n          <span>Alat Tani</span>\n          <h3>3,000,000</h3>\n        </app-card>\n      </div>\n      <div class=\"col-md-4 col-xl-2 col-sm-6\" >\n        <app-card [hidHeader]=\"true\">\n          <span>Alat Nelayan</span>\n          <h3>1,000,000</h3>\n        </app-card>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/pages/report/report-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/demo/pages/report/report-routing.module.ts ***!
  \************************************************************/
/*! exports provided: ReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportRoutingModule", function() { return ReportRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report.component */ "./src/app/demo/pages/report/report.component.ts");
/* harmony import */ var _sale_report_sale_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sale-report/sale-report.component */ "./src/app/demo/pages/report/sale-report/sale-report.component.ts");





var routes = [
    {
        path: '',
        component: _report_component__WEBPACK_IMPORTED_MODULE_3__["ReportPageComponent"],
        children: [
            {
                path: '',
                component: _sale_report_sale_report_component__WEBPACK_IMPORTED_MODULE_4__["SaleReportPageComponent"],
            },
            {
                path: 'sale',
                component: _sale_report_sale_report_component__WEBPACK_IMPORTED_MODULE_4__["SaleReportPageComponent"],
            },
            {
                path: 'expenses',
                loadChildren: function () { return __webpack_require__.e(/*! import() | expenses-report-expenses-report-module */ "expenses-report-expenses-report-module").then(__webpack_require__.bind(null, /*! ./expenses-report/expenses-report.module */ "./src/app/demo/pages/report/expenses-report/expenses-report.module.ts"))
                    .then(function (module) { return module.ExpensesReportPageModule; }); }
            }
        ]
    },
];
var ReportRoutingModule = /** @class */ (function () {
    function ReportRoutingModule() {
    }
    ReportRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ReportRoutingModule);
    return ReportRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/pages/report/report.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/demo/pages/report/report.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/demo/pages/report/report.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/demo/pages/report/report.component.ts ***!
  \*******************************************************/
/*! exports provided: ReportPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPageComponent", function() { return ReportPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ReportPageComponent = /** @class */ (function () {
    function ReportPageComponent(router) {
        this.router = router;
    }
    ReportPageComponent.prototype.ngOnInit = function () {
    };
    ReportPageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ReportPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! raw-loader!./report.component.html */ "./node_modules/raw-loader/index.js!./src/app/demo/pages/report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.scss */ "./src/app/demo/pages/report/report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ReportPageComponent);
    return ReportPageComponent;
}());



/***/ }),

/***/ "./src/app/demo/pages/report/report.module.ts":
/*!****************************************************!*\
  !*** ./src/app/demo/pages/report/report.module.ts ***!
  \****************************************************/
/*! exports provided: ReportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPageModule", function() { return ReportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _report_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report-routing.module */ "./src/app/demo/pages/report/report-routing.module.ts");
/* harmony import */ var _report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./report.component */ "./src/app/demo/pages/report/report.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _sale_report_sale_report_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sale-report/sale-report.module */ "./src/app/demo/pages/report/sale-report/sale-report.module.ts");








var ReportPageModule = /** @class */ (function () {
    function ReportPageModule() {
    }
    ReportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_report_component__WEBPACK_IMPORTED_MODULE_4__["ReportPageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _report_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReportRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbButtonsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPaginationModule"],
                _sale_report_sale_report_module__WEBPACK_IMPORTED_MODULE_7__["SaleReportPageModule"],
            ]
        })
    ], ReportPageModule);
    return ReportPageModule;
}());



/***/ }),

/***/ "./src/app/demo/pages/report/sale-report/sale-report-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/demo/pages/report/sale-report/sale-report-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: SaleReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleReportRoutingModule", function() { return SaleReportRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sale_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sale-report.component */ "./src/app/demo/pages/report/sale-report/sale-report.component.ts");




var routes = [
    {
        path: '',
        component: _sale_report_component__WEBPACK_IMPORTED_MODULE_3__["SaleReportPageComponent"],
    },
];
var SaleReportRoutingModule = /** @class */ (function () {
    function SaleReportRoutingModule() {
    }
    SaleReportRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SaleReportRoutingModule);
    return SaleReportRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/pages/report/sale-report/sale-report.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/demo/pages/report/sale-report/sale-report.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvcmVwb3J0L3NhbGUtcmVwb3J0L3NhbGUtcmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/demo/pages/report/sale-report/sale-report.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/demo/pages/report/sale-report/sale-report.component.ts ***!
  \************************************************************************/
/*! exports provided: SaleReportPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleReportPageComponent", function() { return SaleReportPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SaleReportPageComponent = /** @class */ (function () {
    function SaleReportPageComponent(router) {
        this.router = router;
    }
    SaleReportPageComponent.prototype.ngOnInit = function () {
    };
    SaleReportPageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SaleReportPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sale-report',
            template: __webpack_require__(/*! raw-loader!./sale-report.component.html */ "./node_modules/raw-loader/index.js!./src/app/demo/pages/report/sale-report/sale-report.component.html"),
            styles: [__webpack_require__(/*! ./sale-report.component.scss */ "./src/app/demo/pages/report/sale-report/sale-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SaleReportPageComponent);
    return SaleReportPageComponent;
}());



/***/ }),

/***/ "./src/app/demo/pages/report/sale-report/sale-report.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/demo/pages/report/sale-report/sale-report.module.ts ***!
  \*********************************************************************/
/*! exports provided: SaleReportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleReportPageModule", function() { return SaleReportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sale_report_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sale-report-routing.module */ "./src/app/demo/pages/report/sale-report/sale-report-routing.module.ts");
/* harmony import */ var _sale_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sale-report.component */ "./src/app/demo/pages/report/sale-report/sale-report.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");







var SaleReportPageModule = /** @class */ (function () {
    function SaleReportPageModule() {
    }
    SaleReportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_sale_report_component__WEBPACK_IMPORTED_MODULE_4__["SaleReportPageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _sale_report_routing_module__WEBPACK_IMPORTED_MODULE_3__["SaleReportRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbButtonsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPaginationModule"],
            ]
        })
    ], SaleReportPageModule);
    return SaleReportPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=demo-pages-report-report-module-es5.js.map