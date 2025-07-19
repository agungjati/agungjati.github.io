(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["expenses-report-expenses-report-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/demo/pages/report/expenses-report/expenses-report.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo/pages/report/expenses-report/expenses-report.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <h5>Total Pengeluaran dalam Sehari</h5>\n    <hr />\n    <div class=\"row no-gutters\">\n      <div class=\"col-md-6\">\n        <app-card [hidHeader]=\"true\">\n          <span>Total</span>\n          <h3>2,000,000</h3>\n        </app-card>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-12\">\n    <h5>Total Pengeluaran dalam 7 Hari</h5>\n    <hr />\n    <div class=\"row no-gutters\">\n      <div class=\"col-md-4 col-xl-2 col-sm-6\">\n        <app-card [hidHeader]=\"true\">\n          <span>Sembako</span>\n          <h3>2,000,000</h3>\n        </app-card>\n      </div>\n      <div class=\"col-md-4 col-xl-2 col-sm-6\" >\n        <app-card [hidHeader]=\"true\">\n          <span>Gas</span>\n          <h3>3,000,000</h3>\n        </app-card>\n      </div>\n      <div class=\"col-md-4 col-xl-2 col-sm-6\">\n        <app-card [hidHeader]=\"true\">\n          <span>BBM & Oli</span>\n          <h3>1,000,000</h3>\n        </app-card>\n      </div>\n      <div class=\"col-md-4 col-xl-2 col-sm-6\">\n        <app-card [hidHeader]=\"true\">\n          <span>Obat-obatan</span>\n          <h3>1,000,000</h3>\n        </app-card>\n      </div>\n      <div class=\"col-md-4 col-xl-2 col-sm-6\" >\n        <app-card [hidHeader]=\"true\">\n          <span>Alat Tani</span>\n          <h3>3,000,000</h3>\n        </app-card>\n      </div>\n      <div class=\"col-md-4 col-xl-2 col-sm-6\" >\n        <app-card [hidHeader]=\"true\">\n          <span>Alat Nelayan</span>\n          <h3>1,000,000</h3>\n        </app-card>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/pages/report/expenses-report/expenses-report-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/demo/pages/report/expenses-report/expenses-report-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ExpensesReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesReportRoutingModule", function() { return ExpensesReportRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _expenses_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expenses-report.component */ "./src/app/demo/pages/report/expenses-report/expenses-report.component.ts");




var routes = [
    {
        path: '',
        component: _expenses_report_component__WEBPACK_IMPORTED_MODULE_3__["ExpensesReportPageComponent"],
    },
];
var ExpensesReportRoutingModule = /** @class */ (function () {
    function ExpensesReportRoutingModule() {
    }
    ExpensesReportRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ExpensesReportRoutingModule);
    return ExpensesReportRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/pages/report/expenses-report/expenses-report.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/demo/pages/report/expenses-report/expenses-report.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvcmVwb3J0L2V4cGVuc2VzLXJlcG9ydC9leHBlbnNlcy1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/demo/pages/report/expenses-report/expenses-report.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/demo/pages/report/expenses-report/expenses-report.component.ts ***!
  \********************************************************************************/
/*! exports provided: ExpensesReportPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesReportPageComponent", function() { return ExpensesReportPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ExpensesReportPageComponent = /** @class */ (function () {
    function ExpensesReportPageComponent(router) {
        this.router = router;
    }
    ExpensesReportPageComponent.prototype.ngOnInit = function () {
    };
    ExpensesReportPageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ExpensesReportPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expenses-report',
            template: __webpack_require__(/*! raw-loader!./expenses-report.component.html */ "./node_modules/raw-loader/index.js!./src/app/demo/pages/report/expenses-report/expenses-report.component.html"),
            styles: [__webpack_require__(/*! ./expenses-report.component.scss */ "./src/app/demo/pages/report/expenses-report/expenses-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ExpensesReportPageComponent);
    return ExpensesReportPageComponent;
}());



/***/ }),

/***/ "./src/app/demo/pages/report/expenses-report/expenses-report.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/demo/pages/report/expenses-report/expenses-report.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ExpensesReportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesReportPageModule", function() { return ExpensesReportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _expenses_report_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expenses-report-routing.module */ "./src/app/demo/pages/report/expenses-report/expenses-report-routing.module.ts");
/* harmony import */ var _expenses_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expenses-report.component */ "./src/app/demo/pages/report/expenses-report/expenses-report.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");







var ExpensesReportPageModule = /** @class */ (function () {
    function ExpensesReportPageModule() {
    }
    ExpensesReportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_expenses_report_component__WEBPACK_IMPORTED_MODULE_4__["ExpensesReportPageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _expenses_report_routing_module__WEBPACK_IMPORTED_MODULE_3__["ExpensesReportRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbButtonsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPaginationModule"],
            ]
        })
    ], ExpensesReportPageModule);
    return ExpensesReportPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=expenses-report-expenses-report-module-es5.js.map