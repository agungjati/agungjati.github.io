(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dash-analytics-dash-analytics-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/demo/dashboard/dash-analytics/dash-analytics.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo/dashboard/dash-analytics/dash-analytics.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <!-- conversion-section start -->\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"col-md-4 col-xl-2 col-sm-6\">\r\n        <app-card [hidHeader]=\"true\">\r\n          <span>Total Anggota</span>\r\n          <h3>123</h3>\r\n        </app-card>\r\n      </div>\r\n      <div class=\"col-md-4 col-xl-2 col-sm-6\" >\r\n        <app-card [hidHeader]=\"true\">\r\n          <span class=\"d-block\" >Produk Terjual Hari Ini</span>\r\n          <h3>50</h3>\r\n        </app-card>\r\n      </div>\r\n      <div class=\"col-md-4 col-xl-2 col-sm-6\">\r\n        <app-card [hidHeader]=\"true\">\r\n          <span class=\"d-block\" >Transaksi Pending</span>\r\n          <h3>5</h3>\r\n        </app-card>\r\n      </div>\r\n      <div class=\"col-md-4 col-xl-2 col-sm-6\">\r\n        <app-card [hidHeader]=\"true\">\r\n          <span>Stok Menipis</span>\r\n          <h3>5 item</h3>\r\n        </app-card>\r\n      </div>\r\n      <div class=\"col-md-4 col-xl-2 col-sm-6\" >\r\n        <app-card [hidHeader]=\"true\">\r\n          <span class=\"d-block\" >Permintaan Suplai Baru</span>\r\n          <h3>10</h3>\r\n        </app-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- conversion-section end -->\r\n\r\n  <!-- account-section start -->\r\n  <div class=\"col-xl-8\">\r\n    <app-card cardTitle=\"Grafik Penjualan per Produk (7 Hari Terakhir)\" [options]=\"false\">\r\n      <app-apex-chart chartID=\"daily-visitor-aa-cc\" [chartConfig]=\"this.chartDB.dailyVisitorAACC\" [xAxis]=\"dailyVisitorAxis\"></app-apex-chart>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-xl-4\">\r\n    <app-card [hidHeader]=\"true\">\r\n      <div class=\"row\">\r\n        <div class=\"col-auto\">\r\n          <h6>Produk Terjual</h6>\r\n        </div>\r\n        <div class=\"col text-right\">\r\n          <h2 class=\"mb-0\">1042</h2>\r\n        </div>\r\n      </div>\r\n      <div class=\"row mt-4\">\r\n        <div class=\"col\">\r\n          <h3 class=\"m-0\"><i class=\"fas fa-circle text-success f-10 m-r-5\"></i>66%</h3>\r\n          <span class=\"ml-3\">Sembako</span>\r\n        </div>\r\n        <div class=\"col\">\r\n          <h3 class=\"m-0\"><i class=\"fas fa-circle text-primary f-10 m-r-5\"></i>26%</h3>\r\n          <span class=\"ml-3\">Gas</span>\r\n        </div>\r\n        <div class=\"col\">\r\n          <h3 class=\"m-0\"><i class=\"fas fa-circle text-danger f-10 m-r-5\"></i>8%</h3>\r\n          <span class=\"ml-3\">Lainnya</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"progressbar-stack mt-4\">\r\n        <div *ngFor=\"let bar of deviceProgressBar\" [ngStyle]=\"{width: bar.value + '%'}\" class=\"float-left\">\r\n          <ngb-progressbar [type]=\"bar.type\" height=\"8px\" [value]=\"100\"></ngb-progressbar>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- <app-card [hidHeader]=\"true\">\r\n      <div class=\"row align-items-start\">\r\n        <div class=\"col\">\r\n          <h2 class=\"mb-0\">954</h2>\r\n        </div>\r\n        <div class=\"col-auto text-right\">\r\n          <h6 class=\"\">Location</h6>\r\n        </div>\r\n      </div>\r\n      <div class=\"row mt-2\">\r\n        <div class=\"col-sm-6\">\r\n          <span class=\"d-block\"><i class=\"fas fa-circle text-c-green f-10 m-r-10\"></i>India</span>\r\n          <span class=\"d-block\"><i class=\"fas fa-circle text-c-red f-10 m-r-10\"></i>France</span>\r\n          <span class=\"d-block\"><i class=\"fas fa-circle text-c-blue f-10 m-r-10\"></i>Other</span>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <span class=\"d-block\"><i class=\"fas fa-circle text-c-yellow f-10 m-r-10\"></i>United states</span>\r\n          <span class=\"d-block\"><i class=\"fas fa-circle text-c-purple f-10 m-r-10\"></i>United Kingdom</span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"progress mt-3\" style=\"height:20px;\">\r\n        <div class=\"progress-bar badge-light-success rounded\" role=\"progressbar\" style=\"width: 30%;\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\">24%</div>\r\n        <div class=\"progress-bar badge-light-danger rounded\" role=\"progressbar\" style=\"width: 25%;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">12%</div>\r\n        <div class=\"progress-bar badge-light-primary rounded\" role=\"progressbar\" style=\"width: 20%;\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">10%</div>\r\n        <div class=\"progress-bar badge-light-warning rounded\" role=\"progressbar\" style=\"width: 15%;\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\">8%</div>\r\n        <div class=\"progress-bar badge-light-info rounded\" role=\"progressbar\" style=\"width: 25%;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">35%</div>\r\n      </div>\r\n    </app-card> -->\r\n  </div>\r\n  <!-- account-section end -->\r\n\r\n  <!-- customer overview start -->\r\n  <!-- <div class=\"col-md-12\">\r\n    <app-card cardTitle=\"Campaign Monitor\" cardClass=\"table-card\" blockClass=\"p-0\">\r\n      <perfect-scrollbar [style.max-height]=\"'362px'\">\r\n        <table class=\"table table-hover m-b-0\">\r\n          <thead>\r\n            <tr>\r\n              <th><span>Campaign date</span></th>\r\n              <th>\r\n                <span>Click\r\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\r\n                </span>\r\n              </th>\r\n              <th>\r\n                <span>Cost\r\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\r\n                </span>\r\n              </th>\r\n              <th>\r\n                <span>CTR\r\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\r\n                </span>\r\n              </th>\r\n              <th>\r\n                <span>ARPU\r\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\r\n                </span>\r\n              </th>\r\n              <th>\r\n                <span>ECPI\r\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\r\n                </span>\r\n              </th>\r\n              <th>\r\n                <span>ROI\r\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\r\n                </span>\r\n              </th>\r\n              <th>\r\n                <span>Revenue\r\n                <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\r\n                </span>\r\n              </th>\r\n              <th>\r\n                <span>Conversions\r\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\r\n                </span>\r\n              </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td>08-11-2016</td>\r\n              <td>786\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"60\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>485\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"primary\" height=\"4px\" [value]=\"50\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>769\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>45,3%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"60\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>6,7%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"info\" height=\"4px\" [value]=\"30\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>8,56\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"40\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>10:55\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>33.8%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"40\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>15-10-2016</td>\r\n              <td>786\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"65\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>523\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"primary\" height=\"4px\" [value]=\"80\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>736\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"80\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>78,3%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>6,6%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"info\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>7,56\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"44\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>4:30\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"68\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>76.8%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"90\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>08-08-2017</td>\r\n              <td>624\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"45\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>436\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"primary\" height=\"4px\" [value]=\"55\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>756\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"95\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>78,3%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"38\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>6,4%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"info\" height=\"4px\" [value]=\"30\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>9,45\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"41\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>9:05\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"67\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>8.63%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"41\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>11-12-2017</td>\r\n              <td>423\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"54\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>123\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"primary\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>756\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"75\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>78,6%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"60\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>45,6%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"info\" height=\"4px\" [value]=\"90\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>6,85\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"30\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>7:45\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"40\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>33.8%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"80\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>05-06-2015</td>\r\n              <td>465\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"66\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>463\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"primary\" height=\"4px\" [value]=\"50\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>456\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"30\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>68,6%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"30\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>76,6%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"info\" height=\"4px\" [value]=\"32\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>7,56\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>8:45\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"71\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>39.8%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"38\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>08-11-2016</td>\r\n              <td>786\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"43\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>485\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"primary\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>769\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"69\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>45,3%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"90\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>6,7%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"info\" height=\"4px\" [value]=\"80\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>8,56\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"41\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>10:55\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"55\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>33.8%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>15-10-2016</td>\r\n              <td>786\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"61\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>523\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"primary\" height=\"4px\" [value]=\"45\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>736\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>78,3%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"60\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>6,6%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"info\" height=\"4px\" [value]=\"30\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>7,56\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"40\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>4:30\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n              <td>76.8%\r\n                <div class=\"mt-1\">\r\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"40\"></ngb-progressbar>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </perfect-scrollbar>\r\n    </app-card>\r\n  </div> -->\r\n  <!-- customer overview start -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/demo/dashboard/dash-analytics/dash-analytics-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-analytics/dash-analytics-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: DashAnalyticsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashAnalyticsRoutingModule", function() { return DashAnalyticsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dash_analytics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dash-analytics.component */ "./src/app/demo/dashboard/dash-analytics/dash-analytics.component.ts");




const routes = [
    {
        path: '',
        component: _dash_analytics_component__WEBPACK_IMPORTED_MODULE_3__["DashAnalyticsComponent"]
    }
];
let DashAnalyticsRoutingModule = class DashAnalyticsRoutingModule {
};
DashAnalyticsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DashAnalyticsRoutingModule);



/***/ }),

/***/ "./src/app/demo/dashboard/dash-analytics/dash-analytics.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-analytics/dash-analytics.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZGFzaGJvYXJkL2Rhc2gtYW5hbHl0aWNzL2Rhc2gtYW5hbHl0aWNzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/demo/dashboard/dash-analytics/dash-analytics.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-analytics/dash-analytics.component.ts ***!
  \***************************************************************************/
/*! exports provided: DashAnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashAnalyticsComponent", function() { return DashAnalyticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fack_db_chart_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../fack-db/chart-data */ "./src/app/fack-db/chart-data.ts");
/* harmony import */ var _theme_shared_components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../theme/shared/components/chart/apex-chart/apex-chart.service */ "./src/app/theme/shared/components/chart/apex-chart/apex-chart.service.ts");




let DashAnalyticsComponent = class DashAnalyticsComponent {
    constructor(apexEvent) {
        this.apexEvent = apexEvent;
        this.chartDB = _fack_db_chart_data__WEBPACK_IMPORTED_MODULE_2__["ChartDB"];
        this.dailyVisitorStatus = '1y';
        this.deviceProgressBar = [
            {
                type: 'success',
                value: 66
            }, {
                type: 'primary',
                value: 26
            }, {
                type: 'danger',
                value: 8
            }
        ];
    }
    ngOnInit() { }
};
DashAnalyticsComponent.ctorParameters = () => [
    { type: _theme_shared_components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_3__["ApexChartService"] }
];
DashAnalyticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dash-analytics',
        template: __webpack_require__(/*! raw-loader!./dash-analytics.component.html */ "./node_modules/raw-loader/index.js!./src/app/demo/dashboard/dash-analytics/dash-analytics.component.html"),
        styles: [__webpack_require__(/*! ./dash-analytics.component.scss */ "./src/app/demo/dashboard/dash-analytics/dash-analytics.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_theme_shared_components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_3__["ApexChartService"]])
], DashAnalyticsComponent);



/***/ }),

/***/ "./src/app/demo/dashboard/dash-analytics/dash-analytics.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-analytics/dash-analytics.module.ts ***!
  \************************************************************************/
/*! exports provided: DashAnalyticsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashAnalyticsModule", function() { return DashAnalyticsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dash_analytics_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dash-analytics-routing.module */ "./src/app/demo/dashboard/dash-analytics/dash-analytics-routing.module.ts");
/* harmony import */ var _dash_analytics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dash-analytics.component */ "./src/app/demo/dashboard/dash-analytics/dash-analytics.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");








let DashAnalyticsModule = class DashAnalyticsModule {
};
DashAnalyticsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _dash_analytics_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashAnalyticsRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbProgressbarModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPopoverModule"]
        ],
        declarations: [
            _dash_analytics_component__WEBPACK_IMPORTED_MODULE_4__["DashAnalyticsComponent"],
        ]
    })
], DashAnalyticsModule);



/***/ })

}]);
//# sourceMappingURL=dash-analytics-dash-analytics-module-es2015.js.map