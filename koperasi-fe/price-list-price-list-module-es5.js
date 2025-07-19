(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["price-list-price-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/demo/pages/sale/price-list/price-list.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo/pages/sale/price-list/price-list.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Harga\" [options]=\"false\">\n      <table class=\"table table-hover\">\n        <thead>\n        <tr>\n          <th>Nama Barang</th>\n          <th>Jenis Barang</th>\n          <th>Lokasi Penyimpanan</th>\n          <th>Harga</th>\n          <th width=\"50\" >&nbsp;</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n          <td>Beras</td>\n          <td>Sembako</td>\n          <td>Gudang Utama</td>\n          <td>20.000</td>\n          <td>\n            <button (click)=\"gotoForm()\" class=\"btn btn-icon btn-success\" >\n              <i class=\"feather icon-edit\"></i>\n            </button>\n          </td>\n        </tr>\n        <tr>\n          <td>Gas Lpg 3kg</td>\n          <td>Gas</td>\n          <td>Gudang Utama</td>\n          <td>10.000</td>\n          <td>\n            <button (click)=\"gotoForm()\" class=\"btn btn-icon btn-success\" >\n              <i class=\"feather icon-edit\"></i>\n            </button>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n      <div class=\"d-flex justify-content-end\">\n        <ngb-pagination [collectionSize]=\"20\" [page]=\"1\" aria-label=\"Default pagination\"></ngb-pagination>\n      </div>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/pages/sale/price-list/price-list-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/demo/pages/sale/price-list/price-list-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: PriceListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceListPageRoutingModule", function() { return PriceListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _price_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./price-list.component */ "./src/app/demo/pages/sale/price-list/price-list.component.ts");




var routes = [
    {
        path: '',
        component: _price_list_component__WEBPACK_IMPORTED_MODULE_3__["PriceListPageComponent"],
    },
    {
        path: 'form',
        loadChildren: function () { return __webpack_require__.e(/*! import() | form-price-list-form-price-list-module */ "form-price-list-form-price-list-module").then(__webpack_require__.bind(null, /*! ./form-price-list/form-price-list.module */ "./src/app/demo/pages/sale/price-list/form-price-list/form-price-list.module.ts"))
            .then(function (module) { return module.FormPriceListPagePageModule; }); }
    }
];
var PriceListPageRoutingModule = /** @class */ (function () {
    function PriceListPageRoutingModule() {
    }
    PriceListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PriceListPageRoutingModule);
    return PriceListPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/pages/sale/price-list/price-list.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/demo/pages/sale/price-list/price-list.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvc2FsZS9wcmljZS1saXN0L3ByaWNlLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/demo/pages/sale/price-list/price-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/demo/pages/sale/price-list/price-list.component.ts ***!
  \********************************************************************/
/*! exports provided: PriceListPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceListPageComponent", function() { return PriceListPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PriceListPageComponent = /** @class */ (function () {
    function PriceListPageComponent(router) {
        this.router = router;
    }
    PriceListPageComponent.prototype.ngOnInit = function () {
    };
    PriceListPageComponent.prototype.gotoForm = function () {
        this.router.navigate(['/sale/price-list/form']);
    };
    PriceListPageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    PriceListPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-price-list',
            template: __webpack_require__(/*! raw-loader!./price-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/demo/pages/sale/price-list/price-list.component.html"),
            styles: [__webpack_require__(/*! ./price-list.component.scss */ "./src/app/demo/pages/sale/price-list/price-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PriceListPageComponent);
    return PriceListPageComponent;
}());



/***/ }),

/***/ "./src/app/demo/pages/sale/price-list/price-list.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/demo/pages/sale/price-list/price-list.module.ts ***!
  \*****************************************************************/
/*! exports provided: PriceListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceListPageModule", function() { return PriceListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _price_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./price-list-routing.module */ "./src/app/demo/pages/sale/price-list/price-list-routing.module.ts");
/* harmony import */ var _price_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./price-list.component */ "./src/app/demo/pages/sale/price-list/price-list.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");







var PriceListPageModule = /** @class */ (function () {
    function PriceListPageModule() {
    }
    PriceListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_price_list_component__WEBPACK_IMPORTED_MODULE_4__["PriceListPageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _price_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["PriceListPageRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbButtonsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPaginationModule"],
            ]
        })
    ], PriceListPageModule);
    return PriceListPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=price-list-price-list-module-es5.js.map